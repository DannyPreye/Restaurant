import React from "react";
import Card from "./Card";
import { pot, face, coffee } from "../public/Pics";

import { motion } from "framer-motion";
const CardSection = () => {
  return (
    <div className="w-screen  grid place-items-center">
      <div className="w-[60%] mt-[104px] grid place-items-center ">
        <h3 className="font-inter text-[27px] leading-[49.62px] ">
          Best way to eat healthy food
        </h3>
        <p className="mt-[25px] text-[18px] leading-[30.26px]  font-[500]  grid place-items-center">
          Making a reservation at Délicious restaurant is easy and takes just a
          couple of minutes.
        </p>
      </div>
      <div className="flex gap-[20px] lg:gap-[114px] mt-[91px] flex-wrap justify-center">
        <Card
          img={pot}
          width={156}
          height={111}
          alt="Food pot"
          heading="Healthy Food"
          word="Making a reservation at Délicious restaurant is easy and takes just a couple of minutes."
        />
        <Card
          img={face}
          width={106}
          height={106}
          alt={"face savouring food"}
          heading="Fast Food"
          word="Making a reservation at Délicious restaurant is easy and takes just a couple of minutes."
        />
        <Card
          img={coffee}
          width={121}
          height={111}
          alt={"face savouring food"}
          heading="Delicious Coffe"
          word="Making a reservation at Délicious restaurant is easy and takes just a couple of minutes."
        />
      </div>
    </div>
  );
};

export default CardSection;
