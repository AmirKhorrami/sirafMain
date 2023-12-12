import React from 'react';

const OwnerCreate = () => {
    return (
      <div>
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
      </div>
    );
};

export default OwnerCreate;