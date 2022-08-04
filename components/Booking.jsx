import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
const Booking = ({ img }) => {
  return (
    <div className="w-screen  grid place-items-center mb-[182px]">
      <div className="w-[85%] flex mt-[170px]  gap-[100px] items-center flex-wrap">
        <div className="lg:w-[546px] w-[320px]  h-[80%]">
          <Image src={img} layout="responsive" alt="girl" />
        </div>
        <div className="flex-1">
          <h2 className="font-[600] text-[30px]  text-center  ">
            Book a table
          </h2>
          <form action="">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className=" w-full  rounded-[20px] h-[68px] p-[23px] leading-[30px] text-[20px] border-[1px] mt-[49px]"
            />
            <div className="flex mt-[37px] lg:flex-nowrap flex-wrap gap-[30px]">
              <input
                type="date"
                name="date"
                className="w-full lg:max-w-[288px]  h-[68px] rounded-[20px] border-[1px] p-[23px]  leading-[30px] text-[20px]  "
              />
              <input
                type="time"
                name="time"
                className="w-full lg:max-w-[288px] h-[68px] rounded-[20px] border-[1px] p-[23px]  leading-[30px] text-[20px]  "
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone No:"
              className="w-full rounded-[20px] h-[68px] p-[23px] leading-[30px] text-[20px] border-[1px] mt-[26px]"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              className=" p-[23px] h-[147px] w-full border-[1px] resize-none rounded-[20px] mt-[26px]"
            ></textarea>
            <div className="grid place-items-center">
              <button className=" :max-w-[368px] h-[58px] rounded-[20px] bg-orange pt-[12px] pb-[10px] px-[82px] mt-[28px] font-[600] text-[20px] leading-[36.31px]">
                Send Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
