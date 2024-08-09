import React from "react";

import circleLogo from "./assets/logo-circle.png";

export default function header() {
  return (
    <div className="flex justify-between items-center w-screen h-24 p-5 px-20  bg-black bg-opacity-30">
      <div className="logo">
        <img src={circleLogo} className="w-14" alt="logo" />
      </div>
      <div className="menu flex gap-10">
        <span>Home</span>
        <span>About</span>
        <span>Portfolio</span>
        <span>Services</span>
      </div>

      <div className="contact-btn">
        <button className="border border-slate-500 rounded-lg p-1 px-4">Contact Me</button>
      </div>
    </div>
  );
}
