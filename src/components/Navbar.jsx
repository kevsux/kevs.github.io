import React from "react";
import Slide from "react-reveal/Slide";

function Navbar() {
  return (
    <nav className="h-[10vh] flex items-center justify-between px-[5em] bg-transparent">

      <Slide left>
        <h1 className="text-gradient font-[500] tracking-[2px] outline-none text-[25px]">
          Portfolio
        </h1>
      </Slide>

      <ul className="flex items-center gap-5">

        <Slide right>
          <button className="relative transition-all outline-none px-2 py-1 tracking-wide text-[18px] hover:text-[#36ec9d] text-[#09975a] before:content-[''] before:absolute before:bg-white before:h-[10%] before:w-0 before:z-[-1] hover:before:w-full before:duration-[500ms] before:left-0 before:bottom-0 before:rounded-md active:text-green-500">
            Resume
          </button>
        </Slide>

      </ul>
    </nav>
  );
}

export default Navbar;
