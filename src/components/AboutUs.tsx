
export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative bg-[#0E1F5B40] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20">
          {/* Left: Text Content */}
          <div className="flex-1 w-full">
            {/* Label */}
            <p
              className="text-2xl font-medium tracking-[0.12em] text-klyro-text/60 mb-6 font-[var(--font-body)]"
            >
              About Us
            </p>

            {/* Heading */}
            <h2
              className="font-[var(--font-heading)] text-[clamp(2.2rem,5vw,3.2rem)] font-bold leading-[1.15] tracking-tight mb-7"
            >
              <span className="text-white block">Your Partner In</span>
              <span className="text-[#6EB3FF] block">Digital Innovation</span>
            </h2>

            {/* Description */}
            <p
              className="text-[1.05rem] leading-[1.85] text-klyro-text font-light max-w-[500px] mb-10 font-[var(--font-body)]"
            >
              We help businesses grow and scale impactful digital solutions by combining creativity, technology, and growth-driven strategies. From brand identity to marketing and scalable tech, we partner with you to build experiences that bring long-term success and systems that deliver real results.
            </p>

            {/* CTA Button */}
            <div
            >
              <a
                href="#services"
                id="about-learn-more"
                className="inline-flex items-center justify-center rounded-lg bg-[#6EB3FF80] px-8 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-klyro-cta/85 hover:shadow-[0_4px_30px_rgba(59,108,231,0.3)] hover:translate-y-[-1px] active:translate-y-0"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div
            className="flex-1 w-full flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[520px] aspect-[4/3] rounded-sm overflow-hidden">
              <img
                src="/aboutusimage.jpg"
                alt="Abstract digital innovation visualization"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Subtle edge blend into background */}
              <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-white/[0.04]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
