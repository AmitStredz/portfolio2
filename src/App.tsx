
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './App.css'; // Import your Tailwind CSS file

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  useEffect(() => {
    gsap.to('.pin-section', {
      scrollTrigger: {
        trigger: '.pin-section',
        start: 'top top', // Pin the section when its top reaches the top of the viewport
        end: '+=100%', // Pin duration, adjust based on your layout
        pin: true,
        pinSpacing: false, // Optional: Adjust spacing between pinned section and other content
      },
    });
  }, []);

  return (
    <div className="pin-container">
      <section className="pin-section">First Page</section>
      <section className="scroll-section">Second Page</section>
      <section className="scroll-section">Third Page</section>
    </div>
  );
};

export default App;
