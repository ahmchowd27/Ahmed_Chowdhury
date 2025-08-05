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

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          // Removed scrub for better performance
          toggleActions: 'play none none reverse'
        },
        y: 0,
        opacity: 1,
        duration: 0.8, // Reduced from 1 to 0.8
        ease: 'power2.out'
      })
    });
  });

  return (
    <ReactLenis root>
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