
import circleLogo from './assets/logoCircle.png';

export default function header() {
  return (
    <div className="sticky top-0 flex justify-between items-center w-screen h-24 p-5 px-20 bg-black bg-opacity-25 text-white">
      <div className="logo">
        <img src={circleLogo} className="w-14" alt="logo" />
      </div>
      <div className="menu flex gap-10">
        <span>Home</span>
        <span>About</span>
        <span>Portfolio</span>
        <span>Services</span>
      </div>

      <div className="cont">
        <button className="btn-fill">Contact Me</button>
      </div>
    </div>
  );
}
