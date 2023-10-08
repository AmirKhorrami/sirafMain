import React from "react";
import Logo from "../../assets/images/Navlogo.webp";

const NavRight = () => {
  return (
    <div className="mr-7 flex">
      <img className="w-9 h-10 my-1 cursor-pointer" src={Logo} alt="" />
      <h1 className="text-3xl font-semibold my-1 mx-3 text-[#18181b] cursor-pointer">سیراف</h1>
      <span className=" bg-gray-200 h-8 w-[1px] my-3 md:block"></span>
      <ul className="flex">
        <li className="text-lg mx-3 my-3 font-semibold text-[#18181b] cursor-pointer hover:text-[#71717A]">
          ثبت دفتر املاک
        </li>
        <li className="text-lg mx-2 my-3 font-semibold text-[#18181b] cursor-pointer hover:text-[#71717A]">
          محاسبه کمیسیون
        </li>
        <li className="text-lg mx-2 my-3 font-semibold text-[#18181b] cursor-pointer hover:text-[#71717A]">
          استعلامات ثبتی
        </li>
        <li className="text-lg mx-2 my-3 font-semibold text-[#18181b] cursor-pointer hover:text-[#71717A]">
          بلاگ سیراف
        </li>
        <li className="text-lg mx-2 my-3 font-semibold text-[#18181b] cursor-pointer hover:text-[#71717A]">
          درباره سیراف و قوانین استفاده
        </li>
        <li className="text-lg mx-2 my-3 font-semibold text-[#18181b] cursor-pointer hover:text-[#71717A]">
          پشتیبانی
        </li>
        <li className="text-lg mx-2 my-3 font-semibold text-[#18181b] cursor-pointer hover:text-[#71717A]">
          دفاتر املاک
        </li>
      </ul>
    </div>
  );
};

export default NavRight;
