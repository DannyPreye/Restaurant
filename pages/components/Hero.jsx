import React from "react";
import Image from "next/image";

function Hero({ img }) {
  return (
    <div
      className={`w-screen lg:h-[699px]    grid place-items-center relative`}
    >
      <Image
        src={img}
        layout="fill"
        alt="alr"
        className="absolute top-0 left-0"
      />
      <div className="w-full h-full absolute top-0 left-0 bg-[rgba(128,128,128,0.55)] z-10 backdrop-blur-sm "></div>
    </div>
  );
}

export default Hero;
