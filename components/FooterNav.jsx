import React from "react";

const FooterNav = ({ heading, children }) => {
  return (
    <div className=" grid">
      <h3 className="font-inter text-[20px]  text-white text-center">
        {heading}
      </h3>
      <div className=" ">{children}</div>
    </div>
  );
};

export default FooterNav;
