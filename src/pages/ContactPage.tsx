import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

/* ─── Contact Info Item ─── */
function ContactInfoItem({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-[#0E1F5BCC] text-[#0E1F5BCC]">
        {icon}
      </span>
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {lines.map((line, i) => (
          <p key={i} className="text-[13px] text-klyro-text/60 leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

/* ─── Step Card for "How It Works" ─── */
function StepCard({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#73FFFF66] text-2xl font-bold text-white">
          {number}
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-white mb-1.5">{title}</h3>
      <p className="text-base text-klyro-text/50 max-w-[180px]">{description}</p>
    </div>
  );
}

/* ─── Main Contact Page ─── */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <section className='relative'>
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
          <img
            src="/herobgimage.jpg"
            alt=""
            className="w-full h-full object-cover object-center scale-105 animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(7,7,7,0.85)_80%)]" />
        </div>
      {/* ── Hero / Header ── */}
      <section
        id="contact-hero"
        className="flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden"
      >

        <div className="relative z-10 text-center px-6">
          <h1 className="font-[var(--font-heading)] text-[clamp(2rem,5vw,3rem)] font-bold leading-[1.2] tracking-tight text-[#6EB3FF] animate-fade-in-up">
            Contact Us
          </h1>
          <p className="mt-3 text-[clamp(0.85rem,1.3vw,1rem)] text-klyro-text/70 max-w-[440px] mx-auto animate-fade-in-up-delay-1">
            Let's discuss how we can help you grow, build and Scale
          </p>
        </div>
      </section>

      {/* ── Contact Form + Info ── */}
      <section id="contact-form-section" className="relative py-12 md:py-20">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* ── Left: Contact Form ── */}
            <div className="rounded-2xl border border-[#0E1F5B80] bg-[#6EB3FF1A]  p-8 md:p-10">
              <h2 className="font-[var(--font-heading)] text-[clamp(1.3rem,2.5vw,1.6rem)] font-bold text-white mb-8">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5" id="contact-form">
                <input
                  type="text"
                  name="name"
                  id="contact-name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-[#FDFDFF40] bg-[#FDFDFF1A] px-4 py-3.5 text-[16px] text-white placeholder:text-klyro-text/30 outline-none transition-all duration-200 focus:border-klyro-cta/50 focus:ring-1 focus:ring-[#6EB3FFCC]"
                />
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-[#FDFDFF40] bg-[#FDFDFF1A] px-4 py-3.5 text-[16px] text-white placeholder:text-klyro-text/30 outline-none transition-all duration-200 focus:border-klyro-cta/50 focus:ring-1 focus:ring-[#6EB3FFCC]"
                />
                <input
                  type="text"
                  name="company"
                  id="contact-company"
                  placeholder="Company Name (opt)"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#FDFDFF40] bg-[#FDFDFF1A] px-4 py-3.5 text-[16px] text-white placeholder:text-klyro-text/30 outline-none transition-all duration-200 focus:border-klyro-cta/50 focus:ring-1 focus:ring-[#6EB3FFCC]"
                />
                <textarea
                  name="message"
                  id="contact-message"
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-[#FDFDFF40] bg-[#FDFDFF1A] px-4 py-3.5 text-[16px] text-white placeholder:text-klyro-text/30 outline-none transition-all duration-200 focus:border-klyro-cta/50 focus:ring-1 focus:ring-[#6EB3FFCC]"
                />
                <button
                  type="submit"
                  id="contact-submit"
                  className="w-full rounded-lg bg-[#6EB3FFCC] py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#6EB3FFCC]/50 hover:translate-y-[-1px] active:translate-y-0"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* ── Right: Contact Info ── */}
            <div className="rounded-2xl border border-[#0E1F5B80] bg-[#6EB3FF1A] p-8 md:p-10 flex flex-col">
              <h2 className="font-[var(--font-heading)] text-[clamp(1.3rem,2.5vw,1.6rem)] font-bold text-white mb-8">
                Contact Info
              </h2>

              <div className="flex flex-col gap-7">
                <ContactInfoItem
                  icon={<Mail size={25} fill='#FDFDFFCC'/>}
                  title="Email"
                  lines={['hello@klyro.com']}
                />
                <ContactInfoItem
                  icon={<Phone size={25} fill='#FDFDFFCC'/>}
                  title="Phone"
                  lines={['+234 803 546 1122']}
                />
                <ContactInfoItem
                  icon={<MapPin size={25} fill='#FDFDFFCC'/>}
                  title="Location"
                  lines={['Lagos, Nigeria']}
                />
                <ContactInfoItem
                  icon={<Clock size={25} fill='#FDFDFFCC'/>}
                  title="Hours"
                  lines={['Mon – Fri, 9AM – 6PM']}
                />
              </div>

              {/* Map Embed */}
              <div className="mt-8 flex-1 min-h-[140px] rounded-xl overflow-hidden border border-klyro-outline/30">
                <iframe
                  title="Klyro Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.46280690025!2d3.1438721!3d6.5480555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng"
                  className="w-full h-full min-h-[140px]"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          {/* Section Title */}
          <h2 className="font-[var(--font-heading)] text-center text-[clamp(1.5rem,3.5vw,2.2rem)] font-bold italic leading-[1.2] tracking-tight text-[#6EB3FF] mb-14 md:mb-20">
            How It Works
          </h2>

          {/* Steps */}
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">
            {/* Connecting Line (desktop only) */}
            {/* <div className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-[30%] h-[2px] bg-white" />
            <div className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 w-[30%] h-[2px] bg-white" /> */}

            <div className="relative z-10 flex-1 flex justify-center">
              <StepCard
                number={1}
                title="Review"
                description="We analyze your needs"
              />
              <div className="hidden md:block absolute top-8 right-0 w-[30%] h-[2px] bg-[#8B949E]" />
            </div>

            {/* Connector dash (mobile) */}
            <div className="md:hidden w-[2px] h-8 bg-klyro-outline/50" />

            <div className="relative z-10 flex-1 flex justify-center">
              <div className="hidden md:block absolute top-8 left-0 w-[30%] h-[2px] bg-[#8B949E]" />
              <StepCard
                number={2}
                title="Connect"
                description="We align on strategy"
              />
              <div className="hidden md:block absolute top-8 right-0 w-[30%] h-[2px] bg-[#8B949E]" />
            </div>

            
            <div className="md:hidden w-[2px] h-8 bg-klyro-outline/50" />

            <div className="relative z-10 flex-1 flex justify-center">
              <div className="hidden md:block absolute top-8 left-0 w-[30%] h-[2px] bg-[#8B949E]" />
              <StepCard
                number={3}
                title="Build"
                description="We bring it to life"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Banner Image ── */}
      <section id="contact-banner" className="relative overflow-hidden pb-10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-4">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/contactimage.jpg"
              alt="Team collaborating on digital solutions"
              className="w-full h-[300px] md:h-[400px] object-cover object-center"
              loading="lazy"
            />
            {/* Subtle gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-klyro-dark/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>
      

      </section>
    </>
  );
}
