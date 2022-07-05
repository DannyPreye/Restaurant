import React from "react";
import Hero from "./components/Hero";
import { avatar } from "../public/Pics";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
const contact = () => {
  return (
    <>
      <Hero
        img="/assets/bg.png"
        heading="CONTACT US"
        subHeading={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
        }
      />
      <Booking img={avatar} />
    </>
  );
};

export default contact;
