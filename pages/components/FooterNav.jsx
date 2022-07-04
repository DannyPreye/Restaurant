import React from "react";

const FooterNav = ({ heading, children }) => {
  return (
    <div className=" grid">
      <h3 className="font-inter text-[25px] leading-[30.26px] text-white text-center">
        {heading}
      </h3>
      <div className=" ">{children}</div>
    </div>
  );
};

export default FooterNav;
