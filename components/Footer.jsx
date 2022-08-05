import React from "react";
import FooterNav from "./FooterNav";

import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
  const today = new Date();
  return (
    <div className="w-screen bg-black">
      <div className="w-full grid place-items-center  pb-[14px]">
        <h1 className="font-rubik text-[20px] leading-[30.26px] text-[#FFC222] mt-[33px] w-[90%]">
          Restuarant
        </h1>
      </div>
      <hr className="border-green" />
      <div className="grid place-items-center mt-[105px]">
        <div className="w-[90%] flex justify-center lg:justify-between flex-wrap gap-10">
          <FooterNav heading={"ADDRESS"}>
            <p className="font-[600] mt-[20px] text-[14px]  text-white">
              570 8th Ave, <br /> <br /> New York, NY 10018 <br /> United States
            </p>
          </FooterNav>
          <FooterNav heading={"BOOKING"}>
            <p className="font-[500] mt-[30px] text-[14px]  text-white">
              Dogfood och Sliders <br /> foodtruck. <br /> Under Om oss kan ni
              läsa
            </p>
          </FooterNav>
          <FooterNav heading={"OPENING HOURS"}>
            <p className="font-[800] mt-[30px] text-[14px]  text-white">
              Monday-Friday: 8AM-4PM <br />
              Saturday: 9AM-5PM
            </p>
          </FooterNav>
          <FooterNav heading={"FOLLOW US"}>
            <div className="flex gap-[16px] mt-[10px] lg:mt-0">
              <div className="w-[40px] h-[40px] bg-white rounded-full grid place-items-center">
                <AiFillLinkedin className="w-[20px] h-[20px]" />
              </div>
              <div className="w-[40px] h-[40px] bg-white rounded-full grid place-items-center">
                <BsFacebook className="w-[20px] h-[20px]" />
              </div>
              <div className="w-[40px] h-[40px] bg-white rounded-full grid place-items-center">
                <AiFillTwitterCircle className="w-[20px] h-[20px]" />
              </div>
            </div>
          </FooterNav>
        </div>
      </div>
      <div className="h-[60px] bg-green mt-[77px] grid place-items-center">
        <div className="w-[90%] flex h-[24px] items-center ">
          <p className="text-[10px] lg:text-[12px]  ">
            <span className="   font-inter text-white border-r-[2px] pr-[2px]">
              {" "}
              Copyright {today.getFullYear()}
            </span>{" "}
            <span className="font-rubik text-[12px] leading-[30.26px] text-[#FFC222] mt-[33px]">
              Restuarant
            </span>
            <span className="font-[600] text-white"> by Olawoyin Daniel</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
