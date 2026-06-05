import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurFocus from './components/OurFocus';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OurFocus />
        <AboutUs />
        <OurServices />
        <WhyChooseUs />
      </main>
    </>
  );
}

export default App;
