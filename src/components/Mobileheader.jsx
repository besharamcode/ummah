import React from "react";
import Logo from "./Logo";
const Mobileheader = () => {
  return (
    <div className="md:hidden shadow-md sm:px-6 px-3 dark:shadow-primary-foreground flex justify-between items-center">
      <div className="w-fit h-14 grid place-content-center">
        <Logo width={60} />
      </div>
      <div className="flex justify-evenly items-center">
        <i className="fa-regular fa-bell"></i>
        {/* <i className="fa-solid fa-bell"></i> */}
      </div>
    </div>
  );
};

export default Mobileheader;
