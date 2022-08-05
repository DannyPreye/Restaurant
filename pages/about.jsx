import React from "react";
import Hero from "../components/Hero";
import { bg } from "../public/Pics";
import Booking from "../components/Booking";

import { motion } from "framer-motion";

const about = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Hero
        img="/assets/pizzaGirl.jpg"
        heading="ABOUT US"
        subHeading={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem pariatur nisi, quis porro, sed molestiae quae possimus dignissimos reiciendis rerum voluptates amet eligendi et sunt veniam, vitae dicta culpa? Corrupti."
        }
      />
      <Booking img={bg} />
    </motion.div>
  );
};

export default about;
