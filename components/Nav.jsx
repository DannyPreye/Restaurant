import React from "react";
import { BsSearch, BsCartCheckFill } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="h-[83px] flex justify-around items-center">
      <h1 className="font-rubik text-[25px] leading-[30.26px] text-[#FFC222]">
        <Link href="/">Restuarant</Link>
      </h1>
      <ul className=" hidden lg:flex gap-[82px] items-center font-inter text-[20px] leading-[24px] ">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/products"> Product </Link>
        </li>
        <li>
          {" "}
          <Link href={"/about"}>
            <a> About </a>
          </Link>
        </li>
        <li>
          <Link href="./contact"> Contact</Link>
        </li>
      </ul>
      <ul className="flex gap-[20] lg:gap-[68px] items-center">
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
      <div className="lg:hidden">
        <BiMenuAltRight />
      </div>
    </div>
  );
};

export default Nav;
