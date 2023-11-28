import React from "react";
import ReactStars from "react-rating-stars-component";

const RealEstateF = ({ info }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="m-7 mb-10">
      <div className="flex text-sm text-gray-500">
        <p className="ml-10 hover:text-blue-700 cursor-pointer font-medium">
          پروفایل
        </p>
        <p className="ml-10 hover:text-blue-700 cursor-pointer font-medium">
          لیست فایل ها
        </p>
        <p className="ml-10 hover:text-blue-700 cursor-pointer font-medium">
          ثبت امتیاز
        </p>
        <p className="ml-10 hover:text-blue-700 cursor-pointer font-medium">
          ثبت فایل
        </p>
        <p className="ml-10 hover:text-blue-700 cursor-pointer font-medium">
          ثبت درخواست
        </p>
      </div>
      {/* <div className='flex justify-center items-center mt-20'> */}
      <div className="mb-3 relative flex items-center justify-center before:w-8 before:h-[0.09px] before:-left-10 mt-20  before:bg-zinc-500 before:ml-2 after:mr-2 before:mt-2 after:mt-2 after:w-8 after:h-[0.09px] after:-right-10 after:top-1/2 after:-translate-y-1/2 after:bg-zinc-500">
        <p className="font-bold text-sm">لیست مشاورین</p>
      </div>
      <div className="flex wrap mr-12">
        {info &&
          info.consultants?.map((item, index) =>
            item.countFile ? (
              <div key={item.id} className="flex flex-col wrap ml-16">
                <img
                  src={item?.avatar}
                  className="h-24 w-24 rounded-full"
                  alt="avatar"
                />
                <p className="mt-2">{item.name}</p>
                <ReactStars
                  className="mb-1"
                  count={5}
                  onChange={ratingChanged}
                  size={20}
                  value={item?.rate}
                  edit={false}
                />
              </div>
            ) : (
              ""
            )
          )}
      </div>
    </div>
  );
};

export default RealEstateF;
