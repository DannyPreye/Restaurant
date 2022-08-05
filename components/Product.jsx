import React from "react";
import Image from "next/image";
import { BsCartCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";
const Product = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="w-[90%] lg:max-w-[520px] h-fit py-3 lg:py-0 lg:h-[248px] rounded-[20px]  border-[1px] border-[#c4c4c4] grid place-items-center"
    >
      <div className="flex w-[90%] lg:w-[95%] flex-wrap h-fit lg:h-[90%] rounded-[20px] bg-[#FFF9E9] p-[21px]">
        <Image alt="" src="/assets/food.png" width={153.6} height={149.26} />
        <div className="grid gap-[10px] lg:gap-[20px]">
          <h3 className="font-[600] text-[17px] lg:text-[20px] ">
            BBQ Chicken
          </h3>
          <div className="flex gap-[55px] items-end">
            <p className="text-orange font-extrabold  lg:text-[18px] ">
              <span className="">N</span>4,000
            </p>
            <motion.li className=" w-[30px] h-[30px] lg:w-[82.73px] lg:h-[80.37px] rounded-full grid place-items-center bg-[#FFC222] ">
              <BsCartCheckFill className="lg:w-[41.36px] lg:h-[40.19px]" />
            </motion.li>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
