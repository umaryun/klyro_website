export default function CTA() {
  return (
    <section id="cta" className="relative py-24 px-6 lg:px-12 bg-[#0E1F5B26]">
      {/* CTA Card with background image */}
      <div className="relative mx-auto max-w-[1400px] rounded-2xl overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/handshakeimage.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          {/* Dark blue overlay */}
          <div className="absolute inset-0 bg-[#0a1a3e]/55" />
          {/* Extra gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e1f5b]/40 via-transparent to-[#0e1f5b]/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-6 sm:px-12 md:py-24">
          <h2 className="font-[var(--font-heading)] text-[clamp(1.75rem,4vw,2.75rem)] font-bold italic leading-[1.2] tracking-tight text-white max-w-[600px]">
            Let's Build Something Great Together
          </h2>
          <p className="mt-4 text-[clamp(0.9rem,1.3vw,1.05rem)] text-klyro-text/90 max-w-[500px] leading-relaxed">
            Ready to elevate your business with smart digital solutions?
          </p>
          <a
            href="#contact"
            id="cta-contact-us"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-klyro-cta px-10 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-klyro-accent hover:shadow-[0_4px_30px_rgba(69,112,212,0.4)] hover:translate-y-[-2px] active:translate-y-0"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
