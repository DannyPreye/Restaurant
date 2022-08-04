import React from "react";
import Image from "next/image";

const Card = ({ img, width, height, alt, heading, word }) => {
  return (
    <div className="w-[356px] rounded-[9px] h-[394px] border-[1px] py-[80px] px-[36px]  grid place-items-center">
      <Image src={img} width={width} height={height} alt={alt} />
      <h3 className="text-[25px] text-orange font-inter leading-[42px]">
        {heading}
      </h3>
      <p className="font-[500] text-[17px] leading-[21px] mt-[18px]">{word}</p>
    </div>
  );
};

export default Card;
