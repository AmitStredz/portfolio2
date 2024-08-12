
import profile from "../assets/profile3.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import { CiLinkedin } from "react-icons/ci";
// import { SlSocialLinkedin } from "react-icons/sl";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  // const imageRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   gsap.to(".hero", {
  //     scrollTrigger: {
  //       trigger: ".hero",
  //       start: "top top",
  //       end: "bottom top", // Ends when the bottom of the Hero section reaches the top of the viewport
  //       pin: true, // Pins the Hero section in place
  //       markers: true, // Show markers for debugging
  //       scrub: true, // Smooth scroll effect
  //     },
  //   });
  // }, []);

  // useEffect(()=>{
  //   let tl = gsap.timeline({
  //     scrollTrigger:{
  //       trigger : '.hero',
  //       pin:true,
  //       start:'top top'
  //     }
  //   })

  // })

  // ScrollTrigger.create({
  //   trigger: ".profile",
  //   start: "top bottom",
  //   // scale: 3,
  //   end: "200px",
  //   onToggle: (self) => console.log("toggled, isActive:", self.isActive),
  //   markers: true,
  //   pin: true,
  // });
  // useEffect(() => {
  //   gsap.to(".hero1", {

  //     scrollTrigger: {
  //       trigger: ".hero",
  //       start: "top top",
  //       end: "bottom top", // Ends when the bottom of the Hero section reaches the top of the viewport
  //       pin: true, // Pins the Hero section in place
  //       markers: true, // Show markers for debugging
  //       // scrub: true, // Smooth scroll effect
  //     },
  //   });
  // }, []);

  return (
    <div className="relative">
      <div className="flex justify-center hero1 sticky top-0 -z-50 items-center w-screen h-screen bg-[#1b1f24] text-white font-kode overflow-hidden">
        <div className="w-3/5 p-10 ps-40 " data-aos="zoom-in-right">
          <div className="text-content ps-5">
            <h4 className="text-[20px]">Hi, There!</h4>
            <h1 className="text-[60px]">
              I'm <span className="text-red-500">Amit</span>
            </h1>
            <p>I'm a Front end Web Developer, and a Sketch Artist .</p>
            <div className="social flex gap-5 py-5">
              <FaGithub className="text-xl hover:text-red-500 hover:scale-125 cursor-pointer transition-all" />
              <FaInstagram className="text-xl hover:text-red-500 hover:scale-125 cursor-pointer transition-all" />
              <FaXTwitter className="text-xl hover:text-red-500 hover:scale-125 cursor-pointer transition-all" />
              <FaLinkedin className="text-xl hover:text-red-500 hover:scale-125 cursor-pointer transition-all" />
              {/* <SlSocialLinkedin color="red"/> */}
            </div>
            <div className="flex gap-10 py-5">
              <button className="btn-blank">Hire me</button>
              <button className="btn-fill">Download CV</button>
            </div>
          </div>
          {/* <div className="photo d-flex justify-content-end "><img src="../img/profile.png" alt="" /></div> */}
        </div>
        <div id="profile2" className="  image w-2/5 h-full">
          <img src={profile} className="  left-0 scale-x-100 " alt="" />
        </div>
      </div>
    </div>
  );
}
