import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import About from '../components/sections/About';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <About />
    </div>
  );
};

export default Home;
