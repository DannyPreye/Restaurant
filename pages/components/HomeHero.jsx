import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import { pizza, shape1, shape3, shape4 } from "../../public/Pics";

const HomeHero = () => {
  return (
    <div className="w-full lg:h-[601px] bg-black grid place-items-center">
      <div className="flex justify-between w-[80%] h-[90%] items-center flex-wrap-reverse">
        <div className="w-[410px] h-[302px] ">
          <h1 className=" text-[30px] leading-[36px] text-white">Promo!!!</h1>
          <h1 className="font-inter text-[45px] leading-[54.46px] text-white">
            BUY
          </h1>
          <h1 className="font-inter text-[45px] leading-[54.46px] text-white">
            TWO <span className="text-orange">PIZZAS</span>
          </h1>
          <p className=" font-inter text-[30px] leading-[36.31px] text-green">
            Get one for free
          </p>
          <p className="text-[30px] font-[500] leading-[36.31px] text-white">
            Free Delivery within Lagos
          </p>
          <button className="mt-[19px] w-[163px] h-[48px] rounded-[8px] bg-orange font-inter text-[23px] leading-[28px]">
            ORDER NOW
          </button>
        </div>
        <div className="h-[507px ]  relative">
          <Image
            src={pizza}
            width={490}
            height={507}
            alt="pizza"
            className="z-[100]"
          />
          <div className="absolute top-0 left-0">
            <Image src={shape1} width={535} height={296} alt="shape" />
          </div>
          <div className="absolute bottom-0 right-0">
            <Image src={shape1} width={535} height={296} alt="shape" />
          </div>
          <div className="absolute bottom-0 left-0">
            <Image src={shape1} width={535} height={296} alt="shape" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
