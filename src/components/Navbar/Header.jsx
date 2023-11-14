import React from "react";
import NavRight from "./NavRight";
import NavLeft from "./NavLeft";

const Header = () => {
  return (
    // <div className=" h-32 flex items-center shadow-md lg:justify-between  lg:pl-10">
    <div className="sticky top-0 bg-white shadow mb-4 z-40 text-right w-full gap-x-6 text-gray-500 ">
      <div className="flex relative items-center justify-between py-4 px-6">
        <NavRight className="w-4/5" />
        <NavLeft className="w-1/5" />
      </div>
    </div>
    // </div>
  );
};

export default Header;
