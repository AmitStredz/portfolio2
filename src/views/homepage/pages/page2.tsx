import profile from "../assets/profile2.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page2() {
  // //   useEffect(() => {
  //     gsap.to(".profile", {
  //       scale: 2,
  //       rotation: 360,
  //       duration:3,
  //       scrollTrigger: {
  //         trigger: ".profile",
  //         start: "center center",
  //         end: "top 100px",
  //         scrub: 1, // Smooth scrolling effect
  //         pin: true, // Pins the image while the effect is active
  //         markers: true, // Show markers for debugging
  //         // snap: {
  //         //   snapTo: 0.5, // Snaps to the middle of the animation
  //         //   duration: { min: 0.2, max: 1 }, // Duration for the snap effect
  //         //   ease: "power1.inOut", // Easing for the snap effect
  //         // },
  //       },
  //     //   x: "50vw", // Centers the image horizontally
  //     //   y: "50vh", // Centers the image vertically
  //       transformOrigin: "center center", // Ensures scaling happens from the center
  //     });
  // //   }, []);

  //   useEffect(() => {
  //     gsap.to(".profile", {
  //       scale: 2,
  //       // duration: 10,
  //       rotation: 360,
  //       scrollTrigger: {
  //         trigger: ".profile",
  //         start: "center center",
  //         end: "center 200px", // Customize this value based on when you want the zoom to end
  //         scrub: true,
  //         pin: true, // Pins the image in place while zooming
  //         markers: true,
  //         snap: 2,
  //       },
  //       x: 400,
  //     });
  //   }, []);
//   useEffect(() => {
//     gsap.to(".profile", {
//       x: 700,
//       duration: 5,
//       scrollTrigger: {
//         trigger: ".profile",
//         start: "10% top",
//         end: "center center",
//         markers: true,
//       },
//     });
//   });

  return (
    <div className="h-[100rem]">
      <div className="">
        <img src={profile} alt="Profile" className="profile" />
      </div>
    </div>
  );
}
