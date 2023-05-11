import React from "react";
import logo from "../../android-chrome1-512x512.png";
import { TypeAnimation } from "react-type-animation";
const IntroSection = () => {
  return (
    <div className="">
      <div>
        <img
          className="h-96 rounded-lg w-full"
          src="https://redefinestatus.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1568736772245-26914aae0b09%3Fixlib%3Drb-4.0.3%26q%3D80%26fm%3Djpg%26crop%3Dentropy%26cs%3Dtinysrgb&w=3840&q=75"
          alt=""
        />
      </div>
      <div className="flex justify-center -top-12 relative">
        <img className="h-24 w-24 static  " src={logo} alt="" />
      </div>
      <div className="mb-16 backdrop-blur-3xl">
        <h1
          data-aos="zoom-out-right"
          className="text-3xl font-bold text-center text-slate-600"
        >
          Redefine Status
        </h1>
        <div data-aos="zoom-out-right ">

        <TypeAnimation
          sequence={["How We Can Correct Mankind’s Leaderboard ", 2000]}
          className="text-lg text-center font-medium  mt-10  text-slate-600"
          wrapper="span"
          cursor={false}
          repeat={Infinity}
          style={{ fontSize: "1.4em", display: "inline-block" }}
        />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
