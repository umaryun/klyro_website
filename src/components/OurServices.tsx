const services = [
  {
    num: '01',
    title: 'Web Development',
    description:
      'We build fast, scalable, and responsive websites tailored to your business needs.',
  },
  {
    num: '02',
    title: 'Brand Identity & Design',
    description:
      'We create brand systems that define how your business looks and communicate.',
  },
  {
    num: '03',
    title: 'Marketing Systems',
    description:
      'We develop structured marketing funnels that attract, nurture and convert leads.',
  },
  {
    num: '04',
    title: 'Digital Strategy',
    description:
      'We help define clear, analyzed strategies to position your business for growth.',
  },
  {
    num: '05',
    title: 'Automation & Integration',
    description:
      'We streamline operations by automating repetitive task and connecting your tools.',
  },
  {
    num: '06',
    title: 'Analytics & Optimization',
    description:
      'We track performance and continuously refine your systems for better results.',
  },
];


function ServiceCard({ num, title, description }: { num: string; title: string; description: string }) {
  return (
    <div className="bg-[#0E1F5B40] flex flex-col gap-2 px-7 py-4">
      <span className="text-[#8B949E] text-[1.6rem] font-bold font-[var(--font-heading)] tracking-tight leading-none">
        [{num}]
      </span>
      <h3 className="text-[#6EB3FF] text-[1.05rem] font-bold font-[var(--font-heading)] leading-snug">
        {title}
      </h3>
      <p className="text-klyro-text text-[0.85rem] leading-[1.6] font-[var(--font-body)] max-w-[260px]">
        {description}
      </p>
    </div>
  );
}


export default function OurServices() {
  return (
    <section
      id="services"
      className="relative bg-[#34467D26] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-28">
        {/* Section Heading */}
        <h2 className="text-center text-[#8B949E] text-[clamp(1.8rem,4vw,2.6rem)] font-bold font-[var(--font-heading)] tracking-tight mb-16 md:mb-20">
          Our Services
        </h2>

        {/* Services Grid with Center Image */}
        <div className="relative">
          {/* Center Image — absolutely positioned behind the grid */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <img
              src="/ourservicesimage.png"
              alt="Abstract fluid art representing our creative services"
              className="w-[260px] h-[260px] md:w-[500px] md:h-[500px] object-contain opacity-90"
              loading="lazy"
            />
          </div>

          {/* Mobile: stacked single column */}
          <div className="relative z-10 flex flex-col gap-8 md:hidden">
            {services.map((service) => (
              <ServiceCard key={service.num} {...service} />
            ))}
          </div>

          {/* Desktop: scattered 3-column grid */}
          <div
            className="relative z-10 hidden md:grid gap-y-20 gap-x-5"
            style={{
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'auto auto auto',
            }}
          >
            {/* Row 1: [01] far left, [02] far right */}
            <div className="col-start-1 col-end-2 row-start-1">
              <ServiceCard {...services[0]} />
            </div>
            <div className="col-start-3 col-end-5 row-start-1">
              <ServiceCard {...services[1]} />
            </div>

            {/* Row 2: [03] center-left, [04] center-right */}
            <div className="col-start-2 col-end-3 row-start-2">
              <ServiceCard {...services[2]} />
            </div>
            <div className="col-start-3 col-end-4 row-start-2">
              <ServiceCard {...services[3]} />
            </div>

            {/* Row 3: [05] far left, [06] center-left */}
            <div className="col-start-1 col-end-2 row-start-3">
              <ServiceCard {...services[4]} />
            </div>
            <div className="col-start-2 col-end-3 row-start-3">
              <ServiceCard {...services[5]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
