import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import blobImg from '../assets/blob.png';
import dnaImg from '../assets/dna.png';
import techImg from '../assets/tech.png';

const focusData = [
  {
    id: 1,
    title: 'Creativity',
    description:
      'We create distinctive brand identities and visual systems that communicate clearly and leave lasting impressions. By combining design, storytelling and strategy, we help businesses stand out to their audience.',
    image: blobImg,
    color: '#3b82f6',
    glowColor: 'rgba(59, 130, 246, 0.4)',
  },
  {
    id: 2,
    title: 'Growth',
    description:
      'We build structured marketing systems that attract, convert, and retain customers effectively. Through data-driven strategies and continuous optimization, we position businesses for sustainable and measurable growth.',
    image: dnaImg,
    color: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.4)',
  },
  {
    id: 3,
    title: 'Tech',
    description:
      'We develop scalable digital solutions that streamline operations and support long-term performance. From websites to automation systems, our technology is built to be efficient, reliable and future ready.',
    image: techImg,
    color: '#0ea5e9',
    glowColor: 'rgba(14, 165, 233, 0.4)',
  },
];

function project(
  x: number,
  y: number,
  z: number,
  cx: number,
  cy: number,
  fov: number
) {
  const scale = fov / (fov + z);
  return { x: cx + x * scale, y: cy + y * scale, scale };
}

function PyramidCanvas({ rotationRef }: { rotationRef: React.RefObject<number> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // High DPI
    const dpr = window.devicePixelRatio || 1;
    const w = 500;
    const h = 500;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.scale(dpr, dpr);

    const cx = w / 2;
    const cy = h / 2 + 20;
    const fov = 600;

    // Pyramid geometry — beautifully balanced and majestic proportions
    const size = 135;      // Base half-width (total base is 290x290, feeling solid and grounded)
    const height = 350;    // Reduced height for classic, elegant Egyptian-style proportions (ratio ~0.72)
    const baseY = 130;      // Vertically balanced base position
    const apexY = baseY - height;

    // Base vertices (square base, ordered clockwise from back-left)
    const baseVerts = [
      { x: -size, y: baseY, z: -size }, // 0: back-left
      { x: size, y: baseY, z: -size },  // 1: back-right
      { x: size, y: baseY, z: size },   // 2: front-right
      { x: -size, y: baseY, z: size },  // 3: front-left
    ];
    const apex = { x: 0, y: apexY, z: 0 };

    const pitch = -14 * Math.PI / 180; // A refined forward tilt for an organic top-down perspective

    function rotate3D(px: number, py: number, pz: number, yaw: number) {
      // 1. Rotate Y (yaw / spin)
      const cosY = Math.cos(yaw);
      const sinY = Math.sin(yaw);
      const x1 = px * cosY + pz * sinY;
      const y1 = py;
      const z1 = -px * sinY + pz * cosY;

      // 2. Rotate X (pitch / tilt forward)
      const cosX = Math.cos(pitch);
      const sinX = Math.sin(pitch);
      const x2 = x1;
      const y2 = y1 * cosX - z1 * sinX;
      const z2 = y1 * sinX + z1 * cosX;

      return { x: x2, y: y2, z: z2 };
    }

    let autoAngle = 0;

    function render() {
      ctx.clearRect(0, 0, w, h);

      autoAngle += 0.002;
      const totalAngle = autoAngle + ((rotationRef.current ?? 0) * Math.PI) / 180;

      // Transform all vertices
      const rApex = rotate3D(apex.x, apex.y, apex.z, totalAngle);
      const rBase = baseVerts.map((v) => rotate3D(v.x, v.y, v.z, totalAngle));

      // Project all vertices
      const pApex = project(rApex.x, rApex.y, rApex.z, cx, cy, fov);
      const pBase = rBase.map((v) => project(v.x, v.y, v.z, cx, cy, fov));

      // Define the 4 triangular faces (each connects apex to two adjacent base verts)
      const faces = [
        { verts: [0, 1], z: (rBase[0].z + rBase[1].z) / 2 },  // back
        { verts: [1, 2], z: (rBase[1].z + rBase[2].z) / 2 },  // right
        { verts: [2, 3], z: (rBase[2].z + rBase[3].z) / 2 },  // front
        { verts: [3, 0], z: (rBase[3].z + rBase[0].z) / 2 },  // left
      ];

      // Sort faces back-to-front (painter's algorithm)
      faces.sort((a, b) => a.z - b.z);

      // --- Draw apex glow / light beam ---
      const apexScreen = pApex;
      const glowGrad = ctx.createRadialGradient(
        apexScreen.x, apexScreen.y - 30, 0,
        apexScreen.x, apexScreen.y + 40, 80
      );
      glowGrad.addColorStop(0, 'rgba(200, 220, 255, 0.15)');
      glowGrad.addColorStop(0.4, 'rgba(150, 180, 230, 0.06)');
      glowGrad.addColorStop(1, 'rgba(150, 180, 230, 0)');
      ctx.beginPath();
      ctx.arc(apexScreen.x, apexScreen.y, 80, 0, Math.PI * 2);
      ctx.fillStyle = glowGrad;
      ctx.fill();

      // --- Draw volumetric light cone from apex ---
      const baseCx = (pBase[0].x + pBase[1].x + pBase[2].x + pBase[3].x) / 4;
      const baseCy = (pBase[0].y + pBase[1].y + pBase[2].y + pBase[3].y) / 4;
      const coneGrad = ctx.createLinearGradient(apexScreen.x, apexScreen.y, baseCx, baseCy);
      coneGrad.addColorStop(0, 'rgba(180, 200, 240, 0.07)');
      coneGrad.addColorStop(0.5, 'rgba(180, 200, 240, 0.02)');
      coneGrad.addColorStop(1, 'rgba(180, 200, 240, 0)');

      // Draw a subtle inner cone
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      ctx.beginPath();
      ctx.moveTo(apexScreen.x, apexScreen.y);
      // Use the two frontmost base vertices for cone width
      const sortedByZ = [...rBase.map((v, i) => ({ i, z: v.z }))].sort((a, b) => b.z - a.z);
      const frontIdx1 = sortedByZ[0].i;
      const frontIdx2 = sortedByZ[1].i;
      const midX1 = (pBase[frontIdx1].x + baseCx) / 2;
      const midY1 = (pBase[frontIdx1].y + baseCy) / 2;
      const midX2 = (pBase[frontIdx2].x + baseCx) / 2;
      const midY2 = (pBase[frontIdx2].y + baseCy) / 2;
      ctx.lineTo(midX1, midY1);
      ctx.lineTo(midX2, midY2);
      ctx.closePath();
      ctx.fillStyle = coneGrad;
      ctx.fill();
      ctx.restore();

      // --- Draw faces (semi-transparent filled triangles) ---
      for (const face of faces) {
        const [i, j] = face.verts;
        const avgZ = face.z;
        // Faces further back are dimmer, closer faces are slightly brighter
        const depthNorm = (avgZ + size) / (2 * size); // 0 = back, 1 = front
        const faceAlpha = 0.03 + depthNorm * 0.06;

        ctx.beginPath();
        ctx.moveTo(pApex.x, pApex.y);
        ctx.lineTo(pBase[i].x, pBase[i].y);
        ctx.lineTo(pBase[j].x, pBase[j].y);
        ctx.closePath();
        ctx.fillStyle = `rgba(150, 170, 200, ${faceAlpha})`;
        ctx.fill();
      }

      // --- Draw center vertical line (apex to base center) ---
      ctx.beginPath();
      ctx.moveTo(pApex.x, pApex.y);
      ctx.lineTo(baseCx, baseCy);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // --- Draw all wireframe edges ---
      // Base edges
      for (let i = 0; i < 4; i++) {
        const next = (i + 1) % 4;
        const avgZ = (rBase[i].z + rBase[next].z) / 2;
        const depthNorm = (avgZ + size) / (2 * size);
        const alpha = 0.2 + depthNorm * 0.5;

        ctx.beginPath();
        ctx.moveTo(pBase[i].x, pBase[i].y);
        ctx.lineTo(pBase[next].x, pBase[next].y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Side edges (base to apex)
      for (let i = 0; i < 4; i++) {
        const depthNorm = (rBase[i].z + size) / (2 * size);
        const alpha = 0.2 + depthNorm * 0.55;

        ctx.beginPath();
        ctx.moveTo(pBase[i].x, pBase[i].y);
        ctx.lineTo(pApex.x, pApex.y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // --- Floor reflection ---
      // Reflected pyramid edges (mirrored below base, faded)
      const reflectDist = 10;
      const reflectAlpha = 0.12;
      const reflectedApex = { x: pApex.x, y: baseCy + (baseCy - pApex.y) * 0.15 + reflectDist };

      for (let i = 0; i < 4; i++) {
        const rp = { x: pBase[i].x, y: pBase[i].y + reflectDist };
        const next = (i + 1) % 4;
        const rpNext = { x: pBase[next].x, y: pBase[next].y + reflectDist };

        // Reflected base edges
        ctx.beginPath();
        ctx.moveTo(rp.x, rp.y);
        ctx.lineTo(rpNext.x, rpNext.y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${reflectAlpha})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();

        // Reflected side edges (short, faded)
        ctx.beginPath();
        ctx.moveTo(rp.x, rp.y);
        ctx.lineTo(
          rp.x + (reflectedApex.x - rp.x) * 0.25,
          rp.y + (reflectedApex.y - rp.y) * 0.25
        );
        ctx.strokeStyle = `rgba(255, 255, 255, ${reflectAlpha * 0.5})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Floor glow ellipse
      const floorGrad = ctx.createRadialGradient(baseCx, baseCy + reflectDist, 0, baseCx, baseCy + reflectDist, 160);
      floorGrad.addColorStop(0, 'rgba(140, 170, 220, 0.08)');
      floorGrad.addColorStop(0.5, 'rgba(140, 170, 220, 0.02)');
      floorGrad.addColorStop(1, 'rgba(140, 170, 220, 0)');
      ctx.beginPath();
      ctx.ellipse(baseCx, baseCy + reflectDist + 5, 160, 24, 0, 0, Math.PI * 2);
      ctx.fillStyle = floorGrad;
      ctx.fill();

      animFrameRef.current = requestAnimationFrame(render);
    }

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [rotationRef]);

  return (
    <canvas
      ref={canvasRef}
      className="w-[500px] h-[500px]"
      style={{ imageRendering: 'auto' }}
    />
  );
}



/* ─── Main Component ─── */

export default function OurFocus() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const pyramidRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Track rotation for canvas
  useMotionValueEvent(pyramidRotation, 'change', (v) => {
    rotationRef.current = v;
  });

  // Active index for step indicator
  const activeIndex = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 0, 1, 2]);

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] bg-[#0d1117] text-white"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center overflow-hidden">
        {/* Header */}
        <div className="pt-20 pb-6 w-full text-center z-10">
          <motion.p
            className="text-sm uppercase tracking-[0.25em] text-[#4a7cff]/70 font-medium mb-3 font-[var(--font-body)]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What we do
          </motion.p>
          <motion.h2
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent font-[var(--font-heading)]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Focus
          </motion.h2>
        </div>

        {/* Content */}
        <div className="flex-1 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-6 gap-4 relative">
          {/* Left: Pyramid + Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center relative">
            <div className="relative">
              {/* Canvas Pyramid */}
              <PyramidCanvas rotationRef={rotationRef} />

              {/* Centered Image Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ marginTop: '20px' }}>
                <div className="relative w-[230px] h-[230px] flex items-center justify-center">
                  {focusData.map((data, index) => (
                    <div key={data.id} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <FocusImage
                        data={data}
                        index={index}
                        scrollYProgress={scrollYProgress}
                      />
                      <FocusImageReflection
                        data={data}
                        index={index}
                        scrollYProgress={scrollYProgress}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text + Step Indicator */}
          <div className="w-full md:w-1/2 flex items-center justify-center relative">
            {/* Step indicator dots */}
            <div className="hidden md:flex flex-col items-center gap-3 absolute left-0 top-1/2 -translate-y-1/2">
              {focusData.map((_, i) => (
                <StepDot key={i} index={i} activeIndex={activeIndex} />
              ))}
            </div>

            {/* Text area */}
            <div className="relative h-[280px] w-full max-w-[480px] md:ml-12">
              {focusData.map((data, index) => (
                <FocusText
                  key={data.id}
                  data={data}
                  index={index}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Step Dot ─── */

function StepDot({
  index,
  activeIndex,
}: {
  index: number;
  activeIndex: ReturnType<typeof useTransform<number>>;
}) {
  const isActive = useTransform(activeIndex, (v: number) =>
    Math.round(v) === index ? 1 : 0
  );
  const dotScale = useTransform(isActive, [0, 1], [1, 1.5]);
  const dotOpacity = useTransform(isActive, [0, 1], [0.25, 1]);

  return (
    <motion.div
      className="rounded-full bg-[#4a7cff]"
      style={{
        width: 6,
        height: 6,
        scale: dotScale,
        opacity: dotOpacity,
      }}
    />
  );
}

/* ─── Animations ─── */

const imageAnimations = [
  { input: [0, 0.15, 0.35], opacity: [1, 1, 0], scale: [1, 1, 0.85] },
  {
    input: [0.15, 0.35, 0.65, 0.85],
    opacity: [0, 1, 1, 0],
    scale: [0.85, 1, 1, 0.85],
  },
  { input: [0.65, 0.85, 1.0], opacity: [0, 1, 1], scale: [0.85, 1, 1] },
];

const textAnimations = [
  { input: [0, 0.15, 0.35], opacity: [1, 1, 0], y: [0, 0, -60] },
  {
    input: [0.15, 0.35, 0.65, 0.85],
    opacity: [0, 1, 1, 0],
    y: [60, 0, 0, -60],
  },
  { input: [0.65, 0.85, 1.0], opacity: [0, 1, 1], y: [60, 0, 0] },
];

function FocusImage({ data, index, scrollYProgress }: any) {
  const anim = imageAnimations[index];
  const opacity = useTransform(scrollYProgress, anim.input, anim.opacity);
  const scale = useTransform(scrollYProgress, anim.input, anim.scale);

  return (
    <motion.img
      src={data.image}
      alt={data.title}
      style={{
        opacity,
        scale,
        mixBlendMode: 'lighten',
        maskImage:
          'radial-gradient(circle at 50% 50%, black 35%, transparent 70%)',
        WebkitMaskImage:
          'radial-gradient(circle at 50% 50%, black 35%, transparent 70%)',
      }}
      className="absolute w-[170px] h-[170px] object-contain z-10"
    />
  );
}

function FocusImageReflection({ data, index, scrollYProgress }: any) {
  const anim = imageAnimations[index];
  const opacity = useTransform(scrollYProgress, anim.input, anim.opacity);
  const scale = useTransform(scrollYProgress, anim.input, anim.scale);

  // Soft, beautiful reflection opacity (fades on scroll exactly like the real image)
  const reflectOpacity = useTransform(opacity, (o) => o * 0.16);

  return (
    <motion.img
      src={data.image}
      alt=""
      style={{
        opacity: reflectOpacity,
        scale,
        scaleY: -1,
        y: 132, // Positioned symmetrically under the reflected base
        mixBlendMode: 'lighten',
        filter: 'blur(1.5px)',
        maskImage:
          'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 80%)',
        WebkitMaskImage:
          'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 80%)',
      }}
      className="absolute w-[170px] h-[170px] object-contain z-0 pointer-events-none select-none"
    />
  );
}

function FocusText({ data, index, scrollYProgress }: any) {
  const anim = textAnimations[index];
  const y = useTransform(scrollYProgress, anim.input, anim.y);
  const opacity = useTransform(scrollYProgress, anim.input, anim.opacity);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute top-1/2 -translate-y-1/2 left-0 w-full"
    >
      {/* Number accent */}
      <span
        className="text-[5rem] font-black leading-none absolute -left-2 -top-10 pointer-events-none select-none font-[var(--font-heading)]"
        style={{
          color: 'transparent',
          WebkitTextStroke: `1px ${data.color}20`,
        }}
      >
        0{index + 1}
      </span>
      <div className="relative z-10">
        <h3
          className="text-2xl md:text-3xl font-bold mb-3 font-[var(--font-heading)]"
          style={{ color: data.color }}
        >
          {data.title}
        </h3>
        <div
          className="w-12 h-[2px] rounded-full mb-5"
          style={{
            background: `linear-gradient(90deg, ${data.color}, transparent)`,
          }}
        />
        <p className="text-[1.05rem] leading-[1.8] text-gray-400 font-light max-w-[420px]">
          {data.description}
        </p>
      </div>
    </motion.div>
  );
}
