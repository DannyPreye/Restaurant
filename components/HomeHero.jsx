import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { pizza, shape1, shape3, shape4 } from "../public/Pics";

const HomeHero = () => {
  return (
    <div className="w-full  bg-black grid place-items-center overflow-x-hidden overflow-y-hidden ">
      <div className="flex justify-between w-[80%] h-[90%] items-center flex-wrap">
        <div className="w-[410px] h-[302px]  ">
          <h1 className=" text-[20px] leading-[36px] text-white">Promo!!!</h1>
          <h1 className="font-inter text-[25px] leading-[54.46px] text-white">
            BUY
          </h1>
          <h1 className="font-inter text-[25px] leading-[54.46px] text-white">
            TWO <span className="text-orange">PIZZAS</span>
          </h1>
          <p className=" font-inter text-[20px] leading-[36.31px] text-green">
            Get one for free
          </p>
          <p className="text-[20px] font-[500] leading-[36.31px] text-white">
            Free Delivery within Lagos
          </p>
          <motion.button
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.1 }}
            className="mt-[19px] w-[163px] h-[40px] rounded-[8px] bg-orange font-inter text-[18px] "
          >
            ORDER NOW
          </motion.button>
        </div>
        <motion.div
          initial={{ rotate: 360 }}
          animate={{ rotate: 0 }}
          transition={{ ease: "linear", duration: 4, repeat: Infinity }}
          className="h-[507px ]  relative "
        >
          <motion.div>
            <Image
              src={pizza}
              width={490}
              height={507}
              alt="pizza"
              className="z-[100]"
              layout="intrinsic"
            />
          </motion.div>
          <div className="absolute top-10 left-0">
            <Image src={shape1} width={535} height={296} alt="shape" />
          </div>
          <div className="absolute bottom-10 right-0">
            <Image src={shape1} width={535} height={296} alt="shape" />
          </div>
          <div className="absolute bottom-10 left-0 ">
            <Image src={shape1} width={535} height={296} alt="shape" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeHero;
