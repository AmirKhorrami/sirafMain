import React from "react";
import NavRight from "./NavRight";
import NavLeft from "./NavLeft";

const Header = (props) => {
  return (
    // <div className=" h-32 flex items-center shadow-md lg:justify-between  lg:pl-10">
    <div className="sticky top-0 bg-white shadow mb-4 z-40 text-right w-full gap-x-6 text-gray-500 ">
      <div className="flex relative items-center w-full justify-between py-4 px-2">
        <NavRight className="w-3/5" />
        <NavLeft className="w-2/5" getApi={props.getApi} />
      </div>
    </div>
    // </div>
  );
};

export default Header;
