import React, { useEffect, useState } from "react";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";
import CatCreate from "../../components/CatCreate.jsx/CatCreate";
import axios from "axios";

const Create = () => {
  const [close, setClose] = useState(false);
  const [closeIn, setCloseIn] = useState(false);
  const [type, setType] = useState();
  useEffect(() => {
    document.title = "ثبت فایل";
  }, []);
  useEffect(() => {
    axios
      .get("https://file.siraf.app/api/category/categorys/")
      .then((res) => setType(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  const closeHandler = () => {
    setClose(!close);
  };
  const closeInHandler = () => {
    setCloseIn(!closeIn);
  };
  return (
    <div className="flex flex-col">
      <Header />
      <div>
        <div>
          <main className="max-w-xl mx-auto py-5 px-4">
            <div className="text-xl font-bold py-5">ثبت فایل</div>
            <div className="max-h-max">
              <div className="font-semibold">
                <span className="inline-flex bg-gray-500 w-1.5 h-1.5 rounded-full ml-1"></span>
                مشخصات کلی
              </div>
              <ul>
                <CatCreate type={type} />
                <li className="flex justify-between flex-col gap-0">
                  <div className="group  w-full">
                    <span className="text-sm bg-white px-2 relative right-2 top-[10px] z-[1] text-zinc-500">
                      شهر
                    </span>
                    <div className="select-box-button relative border w-full text-xs rounded ">
                      <button
                        type="button"
                        className="flex items-center justify-between p-2 min-w-[10rem] w-full"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#71717a"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-chevron-down"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        <span className="font-bold">انتخاب</span>
                        <div></div>
                      </button>
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <div className="my-2 relative group w-full">
                    <label
                      className="text-sm translate-x-4 z-[1] relative top-3 right-3 px-2  group-focus-within:font-bold bg-white  text-zinc-500 group-focus-within:text-zinc-900"
                      htmlFor="name"
                    >
                      عنوان
                    </label>
                    <div className="relative">
                      <input
                        maxLength=""
                        type="text"
                        placeholder="درعنوان فایل، به موارد مهمی مانند نوع ملک، متراژومحله اشاره کنید."
                        className="border w-full placeholder:text-xs p-2 rounded focus:outline-none   group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200"
                        id="name"
                        value=""
                      />
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <div className=" group w-full">
                    <label
                      className="text-sm translate-x-4 relative top-3 z-[1] right-3 px-2 group-focus-within:font-bold  bg-white  text-zinc-500 group-focus-within:text-zinc-900"
                      htmlFor="description"
                    >
                      توضیحات
                    </label>
                    <div className="relative">
                      <textarea
                        type="text"
                        rows="4"
                        placeholder="درتوضیحات به جزییات و ویژگی های قایل توجه، دسترسی های محلی و موقعیت ملک اشاره کنید و از درج شماره تماس یا آدرس مستقیم در آن خودداری کنید."
                        className="border w-full placeholder:text-xs p-2 rounded focus:outline-none   group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200"
                        id="description"
                      ></textarea>
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <div className=" group w-full">
                    <label
                      className="text-sm translate-x-4 relative top-3 z-[1] right-3 px-2 group-focus-within:font-bold  bg-white  text-zinc-500 group-focus-within:text-zinc-900"
                      htmlFor="address"
                    >
                      آدرس
                    </label>
                    <div className="relative">
                      <textarea
                        type="text"
                        rows="4"
                        placeholder="مثلا خیابان امام کوچه شهید صدوقی و..."
                        className="border w-full placeholder:text-xs p-2 rounded focus:outline-none   group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200"
                        id="address"
                      ></textarea>
                    </div>
                  </div>
                </li>
                <li className="border-b">
                  <button className=" w-full h-full py-3 cursor-pointer flex items-center justify-between">
                    <div className="flex justify-between items-center w-full">
                      <span>موقعیت بر روی نقشه</span>
                      <span className="bg-gray-100 rounded text-xs py-1 px-2 font-medium text-gray-400 ">
                        انتخاب کنید
                      </span>
                    </div>
                  </button>
                </li>
                <li className="flex justify-between items-center">
                  <div className="my-2 relative group w-full">
                    <label
                      className="text-sm translate-x-4 z-[1] relative top-3 right-3 px-2  group-focus-within:font-bold bg-white  text-zinc-500 group-focus-within:text-zinc-900"
                      for="ownerName"
                    >
                      نام مالک
                    </label>
                    <div className="relative">
                      <input
                        maxLength=""
                        type="text"
                        placeholder="نام مالک"
                        className="border w-full placeholder:text-xs p-2 rounded focus:outline-none   group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200"
                        id="ownerName"
                        value=""
                      />
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <div className="my-2 relative group w-full">
                    <label
                      className="text-sm translate-x-4 z-[1] relative top-3 right-3 px-2  group-focus-within:font-bold bg-white  text-zinc-500 group-focus-within:text-zinc-900"
                      htmlFor="ownerPhoneNumber"
                    >
                      شماره همراه مالک
                    </label>
                    <div className="relative">
                      <input
                        maxLength=""
                        type="number"
                        placeholder="شماره همراه مالک"
                        className="border w-full placeholder:text-xs p-2 rounded focus:outline-none   group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200"
                        id="ownerPhoneNumber"
                        value=""
                      />
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <div className="my-2 relative group w-full">
                    <label
                      className="text-sm translate-x-4 z-[1] relative top-3 right-3 px-2  group-focus-within:font-bold bg-white  text-zinc-500 group-focus-within:text-zinc-900"
                      for="visitName"
                    >
                      نام هماهنگ کننده بازدید
                    </label>
                    <div className="relative">
                      <input
                        maxLength=""
                        type="text"
                        placeholder="نام هماهنگ کننده بازدید"
                        className="border w-full placeholder:text-xs p-2 rounded focus:outline-none group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200"
                        id="visitName"
                        value=""
                      />
                    </div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <div className="my-2 relative group w-full">
                    <label
                      className="text-sm translate-x-4 z-[1] relative top-3 right-3 px-2  group-focus-within:font-bold bg-white  text-zinc-500 group-focus-within:text-zinc-900"
                      htmlFor="visitPhoneNumber"
                    >
                      شماره همراه هماهنگ کننده بازدید
                    </label>
                    <div className="relative">
                      <input
                        maxLength=""
                        type="number"
                        placeholder="شماره همراه هماهنگ کننده بازدید"
                        className="border w-full placeholder:text-xs p-2 rounded focus:outline-none   group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200"
                        id="visitPhoneNumber"
                        value=""
                      />
                    </div>
                  </div>
                </li>
              </ul>
              <div className="py-3 border-t">
                <div className="font-semibold">
                  <span className="inline-flex bg-gray-500 w-1.5 h-1.5 rounded-full ml-1"></span>
                  آپلود فایل های تصویری
                  <button className="text-blue-600 text-xs mr-1">
                    (راهنما)
                  </button>
                  <div className="text-gray-600 text-sm pt-1 font-light ">
                    (عکس،نقشه،ویدیو و تورمجازی)
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-2 pt-5 w-full ">
                  <label className="border-dashed border-[3px] border-zinc-400 rounded-lg flex cursor-pointer w-24 h-24 hover:opacity-50 ">
                    <input
                      type="file"
                      className="hidden"
                      multiple=""
                      accept=".jpg , .jpeg , .png , .mp4 , .avi , .zip"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-zinc-400 m-auto inline w-10 h-10"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path>
                    </svg>
                  </label>
                  <ul className="flex flex-wrap gap-4 col-span-3 sm:col-span-4 mr-8 sm:mr-0"></ul>
                </div>
              </div>
              <li className="flex justify-between items-center">
                <div className=" group w-full">
                  <label
                    className="text-sm translate-x-4 relative top-3 z-[1] right-3 px-2 group-focus-within:font-bold  bg-white  text-zinc-500 group-focus-within:text-zinc-900"
                    htmlFor="securityDescription"
                  >
                    توضیحات محرمانه
                  </label>
                  <div className="relative">
                    <textarea
                      type="text"
                      rows="4"
                      className="border w-full placeholder:text-xs p-2 rounded focus:outline-none   group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200"
                      id="securityDescription"
                    ></textarea>
                  </div>
                </div>
              </li>
              <li className="flex justify-between py-3 border-b items-center">
                <div id="select-box" className="group w-full ">
                  <span className="text-sm bg-white px-2 relative right-2 top-[10px] z-[1]  text-zinc-500">
                    دفتر/دفاتر املاک &zwnj; (اختیاری)
                  </span>
                  <div className="select-box-button relative border w-full text-xs rounded ">
                    <div>
                      <button className="flex items-center justify-between p-2 min-w-[10rem] w-full">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-2"></div>
                        </div>
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#71717a"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-chevron-down  "
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <div>
                <button
                  type="button"
                  className="rounded px-4 py-2 my-2 transition-all duration-200  cursor-pointer bg-zinc-500 text-white hover:bg-zinc-600 w-full undefined disabled:bg-zinc-300 disabled:cursor-auto disabled :hover:bg-zinc-300"
                >
                  ثبت نهایی
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Create;
