import React from "react";
import Logo from "../../assets/images/Navlogo.webp";
import { Link } from "react-router-dom";

const NavRight = () => {
  return (
    <div className="mr-7 flex items-center">
      <Link className="flex" to="/">
        <img className="w-9 h-10 my-1 cursor-pointer" src={Logo} alt="" />
        <h1 className="text-3xl font-semibold my-1 mx-3 text-[#18181b] cursor-pointer">
          سیراف
        </h1>
      </Link>
      <span className=" bg-gray-200 h-8 w-[1px] my-3 mr-7 ml-2 md:block"></span>
      <ul className="flex">
        <Link to="/profile/real-estate">
          <li className="text-lg mx-3 my-3 font-semibold text-[#18181b] cursor-pointer hover:text-[#71717A]">
            ثبت دفتر املاک
          </li>
        </Link>
        <Link to="/commission-calculation">
          <li className="text-lg mx-2 my-3 font-semibold text-[#18181b] cursor-pointer hover:text-[#71717A]">
            محاسبه کمیسیون
          </li>
        </Link>
        <Link to="/inquiry">
          <li className="text-lg mx-2 my-3 font-semibold text-[#18181b] cursor-pointer hover:text-[#71717A]">
            استعلامات ثبتی
          </li>
        </Link>
        <li className="text-lg mx-2 my-3 font-semibold text-[#18181b] cursor-pointer hover:text-[#71717A]">
          بلاگ سیراف
        </li>
        <Link to="/about">
          <li className="text-lg mx-2 my-3 font-semibold text-[#18181b] cursor-pointer hover:text-[#71717A]">
            درباره سیراف و قوانین استفاده
          </li>
        </Link>
        <li className="text-lg mx-2 my-3 font-semibold text-[#18181b] cursor-pointer hover:text-[#71717A]">
          پشتیبانی
        </li>
      </ul>
    </div>
    // <div className="flex grow items-center justify-start my-[20px]">
    //   <a className="flex ">
    //     <div>
    //       <img src={Logo} className="h-[32px] w-[28px] "></img>
    //     </div>
    //     <h2 className="font-bold text-xl text-zinc-900 pr-[7px] pt-[2px]">
    //       سیراف
    //     </h2>
    //   </a>
    //   <span className="block bg-gray-200 h-6 w-[1px] mx-2 lg:block"></span>
    //   <ul className="space-x-4 space-x-reverse text-zinc-900 hidden lg:inline-flex">
    //     <li className="text-[0.92rem] font-medium ">
    //       <a href="#" className="hover:text-zinc-500">
    //         ثبت دفتر املاک
    //       </a>
    //     </li>
    //     <li className="text-[0.92rem] font-medium ">
    //       <a href="#" className="hover:text-zinc-500">
    //         محاسبه کمیسیون
    //       </a>
    //     </li>
    //     <li className="text-[0.92rem] font-medium ">
    //       <a href="#" className="hover:text-zinc-500">
    //         استعلامات ثبت
    //       </a>
    //     </li>
    //     <li className="text-[0.92rem] font-medium ">
    //       <a href="#" className="hover:text-zinc-500">
    //         بلاگ سیراف
    //       </a>
    //     </li>
    //     <li className="text-[0.92rem] font-medium ">
    //       <a href="#" className="hover:text-zinc-500">
    //         درباره سیراف و قوانین استفاده
    //       </a>
    //     </li>
    //     <li className="text-[0.92rem] font-medium ">
    //       <a href="#" className="hover:text-zinc-500">
    //         پشتیبانی
    //       </a>
    //     </li>
    //     <li className="text-[0.92rem] font-medium ">
    //       <a href="#" className="hover:text-zinc-500">
    //         دفاتر املاک
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default NavRight;
