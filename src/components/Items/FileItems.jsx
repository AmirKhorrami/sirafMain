import React from "react";
import noImage from "../../assets/images/noImage.jpg";
import PN from "persian-number";

const FileItems = (props) => {
  const pricePermeter = (totalprice, meter) => {
    const permeter = totalprice / meter;
    return Math.ceil(permeter);
  };
  return (
    <div className="cursor-pointer h-[180px]  grid gap-3 grid-cols-3 items-center border-2 border-[#e5e7eb] shadow-sm rounded-md p-3 hover:bg-[#e5e7eb] relative">
      <div className="w-32 h-32">
        <div className="w-full h-full">
          <img
            src={props.image[0].path || noImage}
            className=" w-full h-full rounded-md"
            alt=""
          />
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
            {PN.convertEnToPe(props.publishedAgo)}
            <span className="before:content-['|'] before:px-1"></span>
            {props.cityName}
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <p className="ml-3 font-bold text-lg">{props.properties[0].name}</p>
            <p className="font-bold">{PN.convertEnToPe(props.totalPrice)}</p>
          </div>
        </div>
        <div>
          {props.properties[1] && (
            <div className="flex">
              <p className="ml-3">قیمت هر متر</p>
              <p className="font-thin">
                {PN.convertEnToPe (pricePermeter(
                  props.totalPrice,
                  props.properties[1] && props.properties[1].value
                ))}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileItems;
