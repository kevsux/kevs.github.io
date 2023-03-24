import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook, BsTelegram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Ros from "./img/las.png";

const shadow = {
  boxShadow: "0 0 20px white",
};

function Hero() {
  return (
    <section className="relative flex justify-between items-center h-[90vh] gap-5">
      <Fade top duration={1500}>
        <div className="relative h-[50%] w-[5px] border border-green-400 z-[-1] left-10 rounded-lg">
          <Fade left delay={1000}>
            <div
              className="absolute w-[18px] h-[18px] rounded-[50%] bg-[#36ec9d] z-20 left-[-7.6px] top-[-2px]"
              style={{ ...shadow }}
            />
          </Fade>
          <Fade left delay={1300}>
            <div className="absolute w-[18px] h-[18px] rounded-[50%] border border-[#36ec9d] bg-[#050318] z-20 left-[-7.6px] top-[170px]" />
          </Fade>
          <Fade left delay={1600}>
            <div className="absolute w-[18px] h-[18px] rounded-[50%] border border-[#36ec9d] bg-[#050318] z-20 left-[-7.6px] top-[356px]" />
          </Fade>
        </div>
      </Fade>
      <div className="w-[50%] flex items-center flex-col gap-2">
        <h1 className="text-[#36ec9d] text-[35px] tracking-wider w-[70%] text-center">
          Mark Kevin Romero
        </h1>
        <p className="text-[#36ec9d] w-[50%] text-center">
          <span className="text-white tracking-wider">Student </span>|{" "}
          <span className="text-white tracking-wider">Software Engineer </span>|{" "}
          <span className="text-white tracking-wider">Web Developer</span> |{" "}
          <span className="text-white tracking-wider">UI/UX Designer</span>
        </p>

        <div className="flex text-white justify-center items-center gap-3 w-full my-3">
          <Fade left delay={500}>
            <a
              href="https://www.facebook.com/kevinromero00"
              target="_blank"
              className="text-[#a3a7a5] text-[24px] duration-[300ms] cursor-pointer hover:text-blue-500 hover:translate-y-[-2px]"
            >
              <BsFacebook />
            </a>
          </Fade>
          <Fade left delay={1000}>
            <a
              href="https://www.instagram.com/kevsus_/"
              target="_blank"
              className="text-[#a3a7a5] text-[30px] duration-[300ms] cursor-pointer hover:text-orange-400 hover:translate-y-[-2px]"
            >
              <AiOutlineInstagram />
            </a>
          </Fade>
          <Fade left delay={1500}>
            <a
              href="#"
              className="text-[#a3a7a5] text-[30px] duration-[300ms] cursor-pointer hover:text-cyan-300 hover:translate-y-[-2px]"
            >
              <AiOutlineTwitter />
            </a>
          </Fade>
          <Fade left delay={2000}>
            <a
              href="https://github.com/Kevszz"
              target="_blank"
              className=" text-[#a3a7a5] hover:text-white text-[30px] cursor-pointer duration-[300ms] hover:translate-y-[-2px]"
            >
              <AiFillGithub />
            </a>
          </Fade>
          <Fade left delay={2500}>
            <a
              href="#"
              className=" text-[#a3a7a5] hover:text-cyan-400 text-[28px] cursor-pointer duration-[300ms] hover:translate-y-[-2px]"
            >
              <BsTelegram />
            </a>
          </Fade>
        </div>
      </div>

      <div className="w-[50%] h-full flex justify-center items-center">
        <Zoom duration={2000}>
          <div
            className="w-[60%] h-[60%] rounded-full bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${Ros})` }}
          />
        </Zoom>
      </div>
    </section>
  );
}

export default Hero;
