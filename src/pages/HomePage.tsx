import Hero from '../components/Hero';
import OurFocus from '../components/OurFocus';
import AboutUs from '../components/AboutUs';
import OurServices from '../components/OurServices';
import WhyChooseUs from '../components/WhyChooseUs';
import CTA from '../components/CTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <OurFocus />
      <AboutUs />
      <OurServices />
      <WhyChooseUs />
      <CTA />
    </main>
  );
}
