import React from "react";
import CityModal from "../Modals/CityModal";
import { BsSearch } from "react-icons/bs";
import {
  RiSearch2Line,
  RiRoadMapLine,
  RiArrowRightCircleLine,
} from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import Estate from '../../assets/images/estate.webp'
import { BiLogInCircle } from "react-icons/bi";
import { TbFilterSearch } from "react-icons/tb";

const NavLeft = () => {
  return (
    <div className="mr-24 lg:flex items-center hidden">
      <span className=" bg-gray-200 h-8 w-[1px] my-3 md:block "></span>
      <button className="relative">
        <CityModal />
      </button>
      <button className="rounded-full group hover:bg-gray-100 p-1 relative">
        <BsSearch
          size={"25px"}
          className="mx-3 my-4 text-[#6b7280] hover:bg-[#f3f4f6] rounded-full cursor-pointer"
        />
        <span className="tooltip z-10 rounded-sm text-xs absolute invisible group-hover:visible bg-zinc-900 text-white top-[110%] left-1/2 -translate-x-1/2 whitespace-nowrap p-2 before:absolute before:w-3 before:h-3 before:-top-1 before:rotate-45 before:rounded-sm before:left-1/2 before:-translate-x-1/2 before:bg-zinc-900">
          جستجو
        </span>
      </button>
      <button className="rounded-full group hover:bg-gray-100 p-1 relative">
        <HiAdjustmentsHorizontal
          size={"30px"}
          className="mx-5 my-3.5 text-[#6b7280] hover:bg-[#f3f4f6] rounded-full cursor-pointer"
        />
        <span className="tooltip z-10 rounded-sm text-xs absolute invisible group-hover:visible bg-zinc-900 text-white top-[110%] left-1/2 -translate-x-1/2 whitespace-nowrap p-2 before:absolute before:w-3 before:h-3 before:-top-1 before:rotate-45 before:rounded-sm before:left-1/2 before:-translate-x-1/2 before:bg-zinc-900">
          فیلتر فایل ها
        </span>
      </button>
      <button className="rounded-full group hover:bg-gray-100 p-1 relative">
        <img
          size={"30px"}
          className="mx-5 my-3.5 text-[#6b7280] hover:bg-[#f3f4f6] rounded-full cursor-pointer"
          src={Estate}
          alt=""
        />
        <span className="tooltip z-10 rounded-sm text-xs absolute invisible group-hover:visible bg-zinc-900 text-white top-[110%] left-1/2 -translate-x-1/2 whitespace-nowrap p-2 before:absolute before:w-3 before:h-3 before:-top-1 before:rotate-45 before:rounded-sm before:left-1/2 before:-translate-x-1/2 before:bg-zinc-900">
          دفتر املاک
        </span>
      </button>
      <button className="rounded-full group hover:bg-gray-100 p-1 relative">
        <RiRoadMapLine
          size={"30px"}
          className="mx-5 my-3.5 text-[#6b7280] hover:bg-[#f3f4f6] rounded-full cursor-pointer"
        />
        <span className="tooltip z-10 rounded-sm text-xs absolute invisible group-hover:visible bg-zinc-900 text-white top-[110%] left-1/2 -translate-x-1/2 whitespace-nowrap p-2 before:absolute before:w-3 before:h-3 before:-top-1 before:rotate-45 before:rounded-sm before:left-1/2 before:-translate-x-1/2 before:bg-zinc-900">
          فایل های اطراف من
        </span>
      </button>
      <button className="rounded-full group hover:bg-gray-100 p-1 relative">
        <AiOutlinePlus
          size={"30px"}
          className="mx-5 my-3.5 text-[#6b7280] hover:bg-[#f3f4f6] rounded-full cursor-pointer"
        />
        <span className="tooltip z-10 rounded-sm text-xs absolute invisible group-hover:visible bg-zinc-900 text-white top-[110%] left-1/2 -translate-x-1/2 whitespace-nowrap p-2 before:absolute before:w-3 before:h-3 before:-top-1 before:rotate-45 before:rounded-sm before:left-1/2 before:-translate-x-1/2 before:bg-zinc-900">
          ثبت فایل
        </span>
      </button>
      <button className="w-40 h-12 my-1.5 border border-solid border-[#e5e7eb] flex items-center rounded-lg justify-center hover:text-[#1d4ed8]">
        <RiArrowRightCircleLine className="my-1 mx-2" size={"30px"} />
        <p className="text-sm font-medium">ورود | ثبت نام</p>
      </button>
    </div>
    // <div className="flex">
    //   <div className="lg:flex items-center gap-4 justify-end hidden">
    //     <ul className="flex items-center py-4 gap-4">
    //       <li className="flex items-center">
    //         <span className="block bg-gray-200 h-6 w-[1px] ml-1"></span>
    //         <button className="rounded-full group text-sm p-1 relative">
    //           اراک
    //         </button>
    //       </li>
    //       <li>
    //         <button className="rounded-full group hover:bg-gray-100 p-2 relative w-[33px] h-[33px]">
    //           <RiSearch2Line className="w-[24px] h-[24px]" />
    //         </button>
    //       </li>
    //       <li>
    //         <button className="rounded-full group hover:bg-gray-100 p-2 relative w-[33px] h-[33px]">
    //           <TbFilterSearch className="w-[24px] h-[24px]" />
    //         </button>
    //       </li>
    //       <li>
    //         <button className="rounded-full group hover:bg-gray-100 p-2 relative w-[33px] h-[33px]">
    //           <RiRoadMapLine className="w-[24px] h-[24px]" />
    //         </button>
    //       </li>
    //       <li>
    //         <button className="rounded-full group hover:bg-gray-100 p-2 relative w-[33px] h-[33px] ">
    //           <AiOutlinePlus className="w-[24px] h-[24px]" />
    //         </button>
    //       </li>
    //     </ul>
    //     <button
    //       type="button"
    //       className="inline-flex items-center py-2 px-4 text-xs font-bold text-[0.65rem] text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
    //     >
    //       <BiLogInCircle className="ml-1 fill-current w-[24px] h-[24px]" />
    //       ورود
    //       <span className="after:content-['|'] after:p-1"></span>
    //       ثبت نام
    //     </button>
    //   </div>
    // </div>
  );
};

export default NavLeft;
