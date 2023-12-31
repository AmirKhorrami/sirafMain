import React, { useState } from "react";

const InfoCreate = ({
  setName,
  name,
  description,
  setDescription,
  address,
  setAddress,
}) => {
  const handleChange = (e) => {
    const value = e.target.value;
    if (/^.{1,10}$/.test(value)) {
      setName(value);
    }
  };
  const handle2Change = (e) => {
    const value = e.target.value;
    if (/^.{1,10}$/.test(value)) {
      setDescription(value);
    }
  };
  const explainChange = (e) => {
    const value = e.target.value;
    if (/^.{1,40}$/.test(value)) {
      setAddress(value);
    }
  };
  return (
    <div>
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
              type="text"
              placeholder="درعنوان فایل، به موارد مهمی مانند نوع ملک، متراژومحله اشاره کنید."
              className={`border w-full placeholder:text-xs p-2 rounded focus:outline-none    group-focus-within:shadow group-focus-within:shadow-zinc-200 ${
                name && name.length < 10
                  ? "border-red-300 group-focus-within:border-red-500"
                  : "group-focus-within:border-zinc-200"
                // : ''
              }`}
              id="name"
              value={name}
              onChange={handleChange}
              onChange={(e) => setName(e.target.value)}
            />
            {name && name.length < 10 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                className="absolute left-2 top-6 -translate-y-1/2 fill-rose-500"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zM11 16v2h2v-2h-2zm0-7v5h2V9h-2z"></path>
              </svg>
            )}
            {name && name.length === 0 ? (
              <span className="bg-rose-50 text-rose-500 rounded px-2 min-h-8 text-xs">
                مقدار فیلد نامعتبر است
              </span>
            ) : name && name.length < 10 ? (
              <span className="bg-rose-50 text-rose-500 rounded px-2 min-h-8 text-xs">
                حداقل کاراکتر مجاز ۱۰ است
              </span>
            ) : (
              ""
            )}
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
              className={`border w-full placeholder:text-xs p-2 rounded focus:outline-none   group-focus-within:shadow group-focus-within:shadow-zinc-200 ${
                description && description.length < 40
                  ? "border-red-300 group-focus-within:border-red-500"
                  : "group-focus-within:border-zinc-500"
              }`}
              id="description"
              value={description}
              onChange={explainChange}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            {description && description.length === 0 ? (
              <span className="bg-rose-50 text-rose-500 rounded px-2 min-h-8 text-xs">
                مقدار فیلد نامعتبر است
              </span>
            ) : description && description.length < 40 ? (
              <span className="bg-rose-50 text-rose-500 rounded px-2 min-h-8 text-xs">
                حداقل کاراکتر مجاز 40 است
              </span>
            ) : (
              ""
            )}
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
              className={`border w-full placeholder:text-xs p-2 rounded focus:outline-none   group-focus-within:shadow group-focus-within:shadow-zinc-200 ${
                address && address.length < 10
                  ? "border-red-300 group-focus-within:border-red-500"
                  : "group-focus-within:border-zinc-500"
              }`}
              id="address"
              value={address}
              onChange={handle2Change}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
            {address && address.length === 0 ? (
              <span className="bg-rose-50 text-rose-500 rounded px-2 min-h-8 text-xs">
                مقدار فیلد نامعتبر است
              </span>
            ) : address && address.length < 10 ? (
              <span className="bg-rose-50 text-rose-500 rounded px-2 min-h-8 text-xs">
                حداقل کاراکتر مجاز ۱۰ است
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      </li>
    </div>
  );
};

export default InfoCreate;
