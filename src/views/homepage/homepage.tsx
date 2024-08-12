import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Homepage() {

  useEffect(() => {
    gsap.to(".one", {
      scrollTrigger: {
        trigger: ".one",
        start: "top top",
        end: "bottom top",
        pin: true,
        markers: true,
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="">
      <div className="one w-screen h-screen bg-pink-300 flex justify-center items-center">
        Hello......
      </div>
      <div className="two w-screen h-screen bg-green-400 flex justify-center items-center">
        Hi.....
      </div>
    </div>
  );
}
