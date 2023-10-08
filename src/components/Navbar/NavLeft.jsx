import React from "react";
import { BsSearch } from "react-icons/bs";
import { RiRoadMapLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { RiArrowRightCircleLine } from "react-icons/ri";

const NavLeft = () => {
  return (
    <div className="mr-24 flex">
      <span className=" bg-gray-200 h-8 w-[1px] my-3 md:block "></span>
      <p className="mx-3 my-3 text-[#6b7280] cursor-pointer">اراک</p>
      <BsSearch
        size={"25px"}
        className="mx-3 my-4 text-[#6b7280] hover:bg-[#f3f4f6] rounded-full rounded-md cursor-pointer"
      />
      <HiAdjustmentsHorizontal
        size={"30px"}
        className="mx-5 my-3.5 text-[#6b7280] hover:bg-[#f3f4f6] rounded-full cursor-pointer"
      />
      <RiRoadMapLine
        size={"30px"}
        className="mx-5 my-3.5 text-[#6b7280] hover:bg-[#f3f4f6] rounded-full cursor-pointer"
      />
      <AiOutlinePlus
        size={"30px"}
        className="mx-5 my-3.5 text-[#6b7280] hover:bg-[#f3f4f6] rounded-full cursor-pointer"
      />
      <button className="w-40 h-12 my-1.5 border border-solid border-[#e5e7eb] flex items-center rounded-lg justify-center hover:text-[#1d4ed8]">
        <RiArrowRightCircleLine className="my-1 mx-2" size={"30px"} />
        <p className="text-sm font-medium">ورود | ثبت نام</p>
      </button>
    </div>
  );
};

export default NavLeft;
