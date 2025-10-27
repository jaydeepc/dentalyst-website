import { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Gallery from '../components/sections/Gallery';
import Contact from '../components/sections/Contact';
import useScrollToHash from '../hooks/useScrollToHash';

const Home = () => {
  useScrollToHash();

  // Handle direct navigation to hash on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Add a slight delay to ensure all content is loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Home;
