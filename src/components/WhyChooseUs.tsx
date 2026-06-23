import { ChartColumnBig, ChartNoAxesCombined, CircleUser, ShieldCheck, TrendingUpDown, Users } from "lucide-react";

/* ─── Data ─── */

const features = [
  {
    icon: <ChartColumnBig />,
    text: 'Scalable solutions that grow with your business.',
  },
  {
    icon: <TrendingUpDown />,
    text: 'A blend of creativity, technology and strategy.',
  },
  {
    icon: <ShieldCheck />,
    text: 'Modern, reliable systems built for performance.',
  },
  {
    icon: <CircleUser />,
    text: 'User-focused experienced systems.',
  },
  {
    icon: <ChartNoAxesCombined />,
    text: 'Data-driven decisions that deliver results.',
  },
  {
    icon: <Users />,
    text: 'A collaborative process tailored to your goals.',
  },
];

/* ─── Feature Card ─── */

function FeatureCard({ icon, text, style }: { icon: React.ReactNode; text: string; style?: React.CSSProperties }) {
  return (
    <div
      className="bg-[#8B949E4D] backdrop-blur-xs border border-[#0707074D] rounded-xl px-5 py-3 flex flex-col gap-3 max-w-[280px] w-full"
      style={style}
    >
      <span className="text-[#73FFFF]">
        {icon}
      </span>
      <p className="text-klyro-text/70 text-[0.85rem] leading-[1.6] font-[var(--font-body)]">
        {text}
      </p>
    </div>
  );
}

/* ─── Main Component ─── */

// Explicit pixel offsets for the diagonal slant effect.
// Left column: cards shift right progressively going down.
// Right column: cards shift left progressively going down.
const leftOffsets = [0, 50, 100];
const rightOffsets = [-100, -50, 0];

export default function WhyChooseUs() {
  // Split features into left (even indices) and right (odd indices)
  const leftFeatures = [features[0], features[2], features[4]];
  const rightFeatures = [features[1], features[3], features[5]];

  return (
    <section
      id="why-choose-us"
      className="relative bg-[#0E1F5B40] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-[#6EB3FF] text-lg uppercase font-semibold mb-3 font-[var(--font-body)]">
            WHY CHOOSE US
          </p>
          <h2 className="text-[#8B949E] text-[clamp(1.6rem,4vw,2.4rem)] font-bold font-[var(--font-heading)] tracking-tight">
            Why Businesses Choose Klyro
          </h2>
        </div>

        {/* Staggered Grid with Center Image */}
        <div className="relative max-w-[800px] mx-auto">
          {/* Center Image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <img
              src="/whychooseusimage.png"
              alt="Abstract visualization representing Klyro's value proposition"
              className="w-[200px] h-[200px] md:w-[340px] md:h-[340px] object-contain opacity-85"
              loading="lazy"
            />
          </div>

          {/* Mobile: single-column stack */}
          <div className="relative z-10 flex flex-col gap-6 items-center md:hidden">
            {features.map((f, i) => (
              <FeatureCard key={i} icon={f.icon} text={f.text} />
            ))}
          </div>

          {/* Desktop: staggered two-column layout */}
          <div className="relative z-10 hidden md:flex gap-10 justify-between">
            {/* Left column — cards slant to the right going down */}
            <div className="flex flex-col gap-8 pt-0">
              {leftFeatures.map((f, i) => (
                <FeatureCard key={i} icon={f.icon} text={f.text} style={{ marginLeft: leftOffsets[i] }} />
              ))}
            </div>

            {/* Right column — offset down + cards slant to the left going down */}
            <div className="flex flex-col gap-8 pt-16 items-end">
              {rightFeatures.map((f, i) => (
                <FeatureCard key={i} icon={f.icon} text={f.text} style={{ marginRight: Math.abs(rightOffsets[i]) }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

