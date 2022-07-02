import React from "react";
import { BsSearch, BsCartCheckFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="h-[83px] flex justify-around items-center">
      <h1 className="font-rubik text-[25px] leading-[30.26px] text-[#FFC222]">
        Restuarant
      </h1>
      <ul className="flex gap-[82px] items-center font-inter text-[20px] leading-[24px] ">
        <li>Home</li>
        <li>Product</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <ul className="flex gap-[68px] items-center">
        <li className="w-[40px] h-[40px] rounded-full grid place-items-center bg-[#FFC222] ">
          <BsSearch className="w-[30px] h-[30px]" />
        </li>
        <li className="w-[40px] h-[40px] rounded-full grid place-items-center bg-[#FFC222] ">
          <FaUserCircle className="w-[30px] h-[30px]" />
        </li>
        <li className="w-[40px] h-[40px] rounded-full grid place-items-center bg-[#FFC222] ">
          <BsCartCheckFill className="w-[30px] h-[30px]" />
        </li>
      </ul>
    </div>
  );
};

export default Nav;
