import React from "react";
import { BsFillSendFill, BsFillSendCheckFill } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Fade from "react-reveal/Fade";
import { useState } from "react";

function Contact() {
  const [send, setSend] = useState("Send");

  const [sendIcon, setSendIcon] = useState(
    <BsFillSendFill className="text-[#36ec9d] text-[20px]" />
  );

  const shadow = {
    boxShadow: "0 0 20px white",
  };

  return (
    <section className=" text-white h-[100vh] flex justify-center items-center ">
      <Fade bottom duration={1500}>
        <div className="relative h-[50%] w-[5px] border border-green-400 z-[-1] left-[-200px] rounded-lg">
          <Fade left delay={1000}>
            <div className="absolute w-[18px] h-[18px] rounded-[50%] bg-[#050318] border border-[#36ec9d] z-20 left-[-7.6px] top-[-2px]"></div>
          </Fade>
          <Fade left delay={1300}>
            <div className="absolute w-[18px] h-[18px] rounded-[50%] border border-[#36ec9d] bg-[#050318] z-20 left-[-7.6px] top-[190px]"></div>
          </Fade>
          <Fade left delay={1600}>
            <div
              className="absolute w-[18px] h-[18px] rounded-[50%] border border-[#36ec9d] bg-[#36ec9d] z-20 left-[-7.6px] top-[396px]"
              style={{ ...shadow }}
            ></div>
          </Fade>
        </div>
      </Fade>

      <div className="w-[60%] h-[60%] flex items-center flex-col gap-2 rounded-[15px]">
        <h1 className="text-[40px] text-center w-full">
          Get in <span className="font-[500] text-gradient w-full">Touch</span>
        </h1>
        <p className="text-center font-['Open Sans'] tracking-wide">
          Have feedback or need some help?
        </p>
        <div className="w-full px-10 pt-7 flex justify-around items-center">

          <Fade left>
            <div>
              <p className="text-[14px] tracking-widest">Name</p>
              <input
                type="text"
                placeholder="Ex. Juan P. Dela Cruz"
                className="outline-none bg-transparent border border-[#36ec9d] pl-3 py-2 rounded-lg w-[280px] mt-2 placeholder:text-[#36ec9d]/40 placeholder:text-[15px]"
              />
            </div>
          </Fade>

          <Fade right>
            <div>
              <p className="text-[14px] tracking-widest">Email</p>
              <input
                type="text"
                placeholder="Ex. example123@gmail.com"
                className="outline-none bg-transparent border border-[#36ec9d] pl-3 py-2 rounded-lg w-[280px] mt-2 placeholder:text-[#36ec9d]/40 placeholder:text-[15px]"
              />
            </div>
          </Fade>

        </div>
        <div className="w-full px-10 pt-7 flex justify-around items-center">
          
          <Fade left>
            <div>
              <p className="text-[14px] tracking-widest">Address</p>
              <input
                type="text"
                placeholder="Street/City"
                className="outline-none bg-transparent border border-[#36ec9d] pl-3 py-2 rounded-lg w-[280px] mt-2 placeholder:text-[#36ec9d]/40 placeholder:text-[15px]"
              />
            </div>
          </Fade>

          <Fade right>
            <div>
              <p className="text-[14px] tracking-widest">Phone Number</p>
              <input
                type="text"
                placeholder="+63 912 345 6789"
                className="outline-none bg-transparent border border-[#36ec9d] pl-3 py-2 rounded-lg w-[280px] mt-2 placeholder:text-[#36ec9d]/40 placeholder:text-[15px]"
              />
            </div>
          </Fade>

        </div>
        <div className="w-full h-full px-10 pt-10 flex flex-col items-center justify-center gap-2">

          <Fade bottom delay={1000}>
            <textarea
              name="message/concern"
              className="w-full bg-transparent outline-none resize-none border border-[#36ec9d] rounded-md p-2 h-[100%] placeholder:text-[#36ec9d]/40 placeholder:text-[15px]"
              placeholder="Message..."
            ></textarea>
          </Fade>

          <Fade bottom delay={1400}>
            <button
              className="outline-none px-5 rounded-lg flex items-center gap-3 py-1 tracking-wider mb-[-20px]"
              onClick={() => {
                setSend("Sending...");

                setSendIcon(
                  <AiOutlineLoading3Quarters className=" animate-spin text-[#36ec9d]" />
                );

                setTimeout(() => {
                  setSend("Thank you!");
                  setSendIcon(
                    <BsFillSendCheckFill className="text-[#36ec9d] text-[20px]" />
                  );
                }, 3000);
              }}
            >
              {sendIcon}
              {send}
            </button>
          </Fade>
          
        </div>
      </div>
    </section>
  );
}

export default Contact;
