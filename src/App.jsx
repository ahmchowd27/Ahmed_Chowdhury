/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/**
 * Components
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Certifications from "./components/Certifications";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FireBackground from "./components/FireBackground";


const App = () => {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');
    
    elements.forEach((element, index) => {
      gsap.set(element, { y: 20, opacity: 0 }); // Set initial state
      
      ScrollTrigger.create({
        trigger: element,
        start: '-200 bottom',
        end: 'bottom 80%',
        onEnter: () => {
          gsap.to(element, {
            y: 0,
            opacity: 1,
            duration: 0.6, // Faster animations
            ease: 'power1.out', // Simpler easing
            delay: index * 0.05, // Stagger effect
          });
        },
        once: true, // Only animate once for better performance
      });
    });

    // Refresh ScrollTrigger after setup
    ScrollTrigger.refresh();
  }, []);

  return (
    <ReactLenis 
      root 
      options={{
        lerp: 0.05, // Smoother but more performant scrolling
        duration: 1.2,
        smoothTouch: false, // Disable on touch for better mobile performance
        infinite: false,
        touchMultiplier: 2,
        wheelMultiplier: 1,
      }}
    >
      <FireBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Skill />
          <Work />
          <Certifications />
          <Review />
          <Contact />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  )

}


export default App;