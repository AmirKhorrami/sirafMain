import React from "react";

const FileItems = (props) => {
  const pricePermeter = (totalprice, meter) => {
    const permeter = totalprice / meter;
    return permeter;
  };
  return (
    <div className="cursor-pointer h-[180px]  grid gap-3 grid-cols-3 items-center border-2 border-[#e5e7eb] shadow-sm rounded-md p-3 hover:bg-[#e5e7eb] relative">
      <div className="w-32 h-32">
        <div className="w-full h-full">
          <img src={props.image} className=" w-full h-full rounded-md" alt="" />
        </div>
      </div>
      <div className="col-span-2 mr-4">
        <div className="text-base font-bold my-2">{props.name}</div>
        <div className="flex items-center">
          <p className="whitespace-nowrap text-sm font-extrabold my-2">
            {props.category}
          </p>
          <span className=" bg-gray-400 h-4 w-[1px] mx-1"></span>
          <div className="text-[10px] font-normal">
            {props.publishedAgo}
            <span className="before:content-['|'] before:px-1"></span>
            {props.cityName}
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <p className="ml-3 font-bold text-lg">{props.properties[0].name}</p>
            <p className="font-bold">{props.totalPrice}</p>
          </div>
        </div>
        <div>
          <div className="flex">
            <p className="ml-3">قیمت هر متر</p>
            <p className="font-thin">
              {pricePermeter(props.totalPrice, props.properties[1].value)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileItems;
