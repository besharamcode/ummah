import React from "react";
import Logo from "./Logo";
const Mobileheader = () => {
  return (
    <div className="md:hidden sm:px-6 px-3 border-b flex justify-between items-center">
      <div className="w-fit h-14 grid place-content-center">
        <Logo width={60} />
      </div>
      <div className="flex justify-evenly items-center text-lg">
        <i className="fa-regular fa-bell"></i>
        {/* <i className="fa-solid fa-bell"></i> */}
      </div>
    </div>
  );
};

export default Mobileheader;
