import React from "react";
import Hero from "./components/Hero";
import { bg } from "../public/Pics";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

const about = () => {
  return (
    <>
      <Hero
        img="/assets/bg.png"
        heading="ABOUT US"
        subHeading={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem pariatur nisi, quis porro, sed molestiae quae possimus dignissimos reiciendis rerum voluptates amet eligendi et sunt veniam, vitae dicta culpa? Corrupti."
        }
      />
      <Booking img={bg} />
      <Footer />
    </>
  );
};

export default about;
