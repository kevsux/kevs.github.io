import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact, FaFigma, FaJava } from "react-icons/fa";
import Fade from "react-reveal/Fade";

function Skill() {
  const shadow = {
    boxShadow: "0 0 6px rgb(255, 255, 255, 0.300)",
  };
  const circle = {
    boxShadow: "0 0 20px white",
  };

  return (
    <section className="relative h-[100vh] flex justify-center items-center text-white overflow-hidden">
      <div className=" w-[75%] h-[75%]">
        <Fade left>
          <h1 className="relative text-[#36ec9d] text-[40px] w-[35%] before:content-[''] before:absolute before:w-[20%] before:left-0 before:bottom-0 before:bg-white before:z-[2] before:h-[5%] before:rounded-lg tracking-wide">
            Skill-Set
          </h1>
        </Fade>

        <div className="w-full h-full grid grid-cols-3 place-items-center ">
          <Fade left duration={1500} delay={500}>
            <div
              className=" w-[80%] h-[80%] shadow-sm shadow-[#36ec9d] flex justify-center items-center "
              style={{ ...shadow }}
            >
              <div className="w-[80%] h-[50%] flex flex-col gap-2">
                <FaJava className="text-blue-200 text-[40px] " />
                <p className="text-[#36ec9d]">Java</p>
                <p className="text-[13px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laborum, quasi.
                </p>
              </div>
            </div>
          </Fade>
          <Fade top duration={1500} delay={500}>
            <div
              className=" w-[80%] h-[80%] shadow-sm shadow-[#36ec9d] flex justify-center items-center "
              style={{ ...shadow }}
            >
              <div className="w-[80%] h-[50%] flex flex-col gap-2">
                <AiFillHtml5 className="text-orange-600 text-[40px] " />
                <p className="text-[#36ec9d]">HTML</p>
                <p className="text-[13px] tracking-wide">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laborum, quasi.
                </p>
              </div>
            </div>
          </Fade>

          <Fade right duration={1500} delay={500}>
            <div
              className=" w-[80%] h-[80%] shadow-sm shadow-[#36ec9d] flex justify-center items-center "
              style={{ ...shadow }}
            >
              <div className="w-[80%] h-[50%] flex flex-col gap-2">
                <DiCss3Full className="text-blue-500 text-[40px] " />
                <p className="text-[#36ec9d]">CSS</p>
                <p className="text-[13px] tracking-wide">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laborum, quasi.
                </p>
              </div>
            </div>
          </Fade>

          <Fade left duration={1500} delay={500}>
            <div
              className=" w-[80%] h-[80%] shadow-sm shadow-[#36ec9d] flex justify-center items-center "
              style={{ ...shadow }}
            >
              <div className="w-[80%] h-[50%] flex flex-col gap-2">
                <FaReact className="text-blue-500 text-[40px] " />
                <p className="text-[#36ec9d]">React</p>
                <p className="text-[13px] tracking-wide">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laborum, quasi.
                </p>
              </div>
            </div>
          </Fade>

          <Fade bottom duration={1500}>
            <div
              className=" w-[80%] h-[80%] shadow-sm shadow-[#36ec9d] flex justify-center items-center "
              style={{ ...shadow }}
            >
              <div className="w-[80%] h-[50%] flex flex-col gap-2">
                <SiJavascript className="text-yellow-500 text-[40px] " />
                <p className="text-[#36ec9d]">Javascript</p>
                <p className="text-[13px] tracking-wide">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laborum, quasi.
                </p>
              </div>
            </div>
          </Fade>

          <Fade right duration={1500}>
            <div
              className=" w-[80%] h-[80%] shadow-sm shadow-[#36ec9d] flex justify-center items-center "
              style={{ ...shadow }}
            >
              <div className="w-[80%] h-[50%] flex flex-col gap-2">
                <FaFigma className="text-violet-400 text-[40px]" />
                <p className="text-[#36ec9d]">Figma</p>
                <p className="text-[13px] tracking-wide">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laborum, quasi.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <Fade bottom duration={1500}>
        <div className="relative h-[50%] w-[5px] border border-green-400 z-[-1] left-[80px] top-[70px] rounded-lg">
          <Fade right delay={1000}>
            <div className="absolute w-[18px] h-[18px] rounded-[50%] border border-[#36ec9d] bg-[#050318] z-20 left-[-7.6px] top-[-2px]" />
          </Fade>
          <Fade right delay={1300}>
            <div
              className="absolute w-[18px] h-[18px] rounded-[50%] bg-[#36ec9d] z-20 left-[-7.6px] top-[190px]"
              style={{ ...circle }}
            ></div>
          </Fade>
          <Fade right delay={1600}>
            <div className="absolute w-[18px] h-[18px] rounded-[50%] border border-[#36ec9d] bg-[#050318] z-20 left-[-7.6px] top-[396px]" />
          </Fade>
        </div>
      </Fade>
    </section>
  );
}

export default Skill;
