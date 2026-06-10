
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-klyro-dark"
    >
      {/* Background Hero Image with Premium Blending Overlays */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        <img
          src="/herobgimage.jpg"
          alt=""
          className="w-full h-full object-cover object-center scale-105 animate-subtle-zoom"
        />

        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(7,7,7,0.85)_80%)]" 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Left Content */}
          <div className="flex-1">
            <div className=''>
              {/* Heading */}
              <h1 className="font-[var(--font-heading)] max-w-[460px] mx-auto">
                <span className="block text-[clamp(3rem,7vw,5rem)] font-bold italic leading-[1.1] tracking-tight text-white animate-fade-in-up">
                  Build. Grow.
                </span>
                <span
                  className="block text-[#6EB3FF] text-[clamp(3rem,7vw,5rem)] font-bold italic leading-[1.1] tracking-tight animate-fade-in-up-delay-1"
                >
                  Lead.
                </span>
              </h1>

              {/* Subtext */}
              <p className="mt-7 mx-auto max-w-[460px] text-[clamp(0.95rem,1.5vw,1.1rem)] leading-[1.75] text-klyro-white animate-fade-in-up-delay-2">
                We partner with ambitious businesses to design, build and scale
                intelligent digital solutions. Creating brands, products and
                experiences that drive real results and brings long-term success.
              </p>

              {/* CTA Buttons */}
              <div className="max-w-[460px] mx-auto mt-10 flex flex-wrap items-center gap-5 animate-fade-in-up-delay-3">
                <a
                  href="#contact"
                  id="hero-get-started"
                  className="inline-flex items-center justify-center rounded-lg bg-klyro-blue px-8 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-klyro-cta hover:shadow-[0_4px_30px_rgba(74,124,255,0.35)] hover:translate-y-[-1px] active:translate-y-0"
                >
                  Get Started
                </a>
                <a
                  href="#services"
                  id="hero-learn-more"
                  className="inline-flex items-center justify-center rounded-lg border border-klyro-btn-outline bg-transparent px-8 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:border-klyro-blue/50 hover:bg-klyro-blue/10 hover:shadow-[0_0_20px_rgba(74,124,255,0.1)]"
                >
                  Learn More
                </a>  
            </div>
            
            </div>
          </div>

          {/* Right - Hero Image */}
          <div className="w-full flex-1 flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              <img
                src="/handimage.png"
                alt="3D holographic cubes representing intelligent digital solutions"
                className="w-full h-auto object-cover"
                loading="eager"
                
              />

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
