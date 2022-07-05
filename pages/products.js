import React from "react";
import Image from "next/image";
import Footer from "./components/Footer";
import { avatar } from "../public/Pics";
import Product from "./components/Product";

const products = () => {
  return (
    <>
      <div className="h-fit w-screen ">
        <div>
          <Image
            src={avatar}
            alt=""
            layout="intrinsic"
            height={669}
            className="absolute top-0 left-0"
          />
        </div>
      </div>
      <div className="grid place-items-center w-screen">
        <h1 className="text-[45px] font-inter leading-[54.46px] mt-[70px] w-[80%] ">
          Top Recipes
        </h1>
        <div className="w-[80%]  grid grid-cols-2 gap-[77px]  mb-[156px] mt-[62px] ">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  );
};

export default products;
