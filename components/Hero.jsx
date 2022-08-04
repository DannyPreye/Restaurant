import React from "react";
import Image from "next/image";

function Hero({ img, heading, subHeading, children }) {
  return (
    <div className={`w-screen lg:h-[699px]  grid place-items-center relative`}>
      <Image
        src={img}
        layout="fill"
        alt="alr"
        className="absolute top-0 left-0"
      />
      <div className="w-full h-full absolute top-0 left-0 bg-[rgba(128,128,128,0.87)] z-10 grid place-items-center  ">
        <div className="w-[60%]">
          <h1 className="font-inter text-orange text-[25px]  mb-[73px]">
            {heading}
          </h1>
          <p className="font-[400] text-white text-[18px] leading-[30.26px]">
            {subHeading}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
