import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
const Card = ({ img, width, height, alt, heading, word }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      className="w-[80%] lg:max-w-[356px]  rounded-[9px] h-[394px] border-[1px] py-[80px] px-[36px]  grid place-items-center"
    >
      <Image src={img} width={width} height={height} alt={alt} />
      <h3 className="lg:text-[25px] text-[18] text-orange font-inter leading-[42px]">
        {heading}
      </h3>
      <p className="font-[500] lg:text-[17px] text-[14] leading-[21px] mt-[18px]">
        {word}
      </p>
    </motion.div>
  );
};

export default Card;
