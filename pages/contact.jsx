import React from "react";
import Hero from "../components/Hero";
import { avatar } from "../public/Pics";
import Booking from "../components/Booking";
import Footer from "../components/Footer";

import { motion } from "framer-motion";
const contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Hero
        img="/assets/bg.png"
        heading="CONTACT US"
        subHeading={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
        }
      />
      <Booking img={avatar} />
    </motion.div>
  );
};

export default contact;
