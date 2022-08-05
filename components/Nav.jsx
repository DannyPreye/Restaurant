import React, { useState } from "react";
import { BsSearch, BsCartCheckFill } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

import { motion } from "framer-motion";
const Nav = () => {
  const [isClick, setIsClick] = useState(false);
  return (
    <div className="h-[83px] flex justify-around items-center relative">
      <h1 className="font-rubik text-[25px] leading-[30.26px] text-[#FFC222]">
        <Link href="/">Restuarant</Link>
      </h1>
      <ul className=" hidden lg:flex gap-[82px] items-center font-inter text-[20px] leading-[24px] ">
        <li>
          <Link href="/">
            <a className="focus:text-green">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a className="focus:text-green">Product</a>
          </Link>
        </li>
        <li>
          {" "}
          <Link href={"/about"}>
            <a className="focus:text-green"> About </a>
          </Link>
        </li>
        <li>
          <Link href={"./contact"}>
            <a className="focus:text-green">Contact</a>
          </Link>
        </li>
      </ul>
      <ul className="flex gap-[20] lg:gap-[68px] items-center">
        <li className="lg:w-[40px] lg:h-[40px] w-[20px] h-[20px] rounded-full grid place-items-center bg-[#FFC222] ">
          <BsSearch className="lg:w-[30px] lg:h-[30px] w-[9px] h-[9px]" />
        </li>
        <li className="lg:w-[40px] lg:h-[40px] w-[20px] h-[20px] rounded-full grid place-items-center bg-[#FFC222] ">
          <FaUserCircle className="lg:w-[30px] lg:h-[30px] w-[10px] h-[10px]" />
        </li>
        <li className="lg:w-[40px] lg:h-[40px] w-[20px] h-[20px] rounded-full grid place-items-center bg-[#FFC222] ">
          <BsCartCheckFill className="lg:w-[30px] lg:h-[30px] w-[9px] h-[9px]" />
        </li>
      </ul>
      <motion.div
        whileTap={{ scale: 0.8 }}
        whileHover={{
          backgroundColor: "rgb(255, 194, 34)",
          color: "white",
          borderRadius: "50%",
        }}
        className="lg:hidden rounded-full cursor-pointer"
        onClick={() => setIsClick(!isClick)}
      >
        <BiMenuAltRight className="w-[30px] h-[30px] pointer-events-none" />
      </motion.div>
      <motion.div
        initial={{ x: 500 }}
        animate={isClick ? { x: 0 } : { x: 500 }}
        transition={{ duration: 2 }}
        className={`absolute top-[5rem] lg:hidden  shadow-md z-[1000]  rounded-b-lg ${
          isClick ? "block" : "hidden"
        } right-0 w-[50%] h-fit py-3 bg-white `}
      >
        <Link href="/">
          <a className="py-3 px-4 block text-[18px] w-[100%] font-[600]  focus:bg-green focus:text-white">
            Home
          </a>
        </Link>
        <Link href="/products">
          <a className="py-3 px-4 block text-[18px] w-[100%] font-[600]  focus:bg-green focus:text-white">
            Product
          </a>
        </Link>
        <Link href="/about">
          <a className="py-3 px-4 block text-[18px] w-[100%] font-[600]  focus:bg-green focus:text-white">
            About
          </a>
        </Link>
        <Link href="/contact">
          <a className="py-3 px-4 block text-[18px] w-[100%] font-[600]  focus:bg-green focus:text-white">
            Contact
          </a>
        </Link>
      </motion.div>
    </div>
  );
};

export default Nav;
