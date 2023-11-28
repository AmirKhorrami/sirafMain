import ReactStars from "react-rating-stars-component";

const RealEstateH = ({ info }) => {
  // console.log(info.images);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="flex border-b">
      <div className="md:w-52 md:h-52 w-24 h-24 md:border-4 lg:ml-5 object-cover bg-gray-300 group relative rounded-full overflow-hidden border-2 border-solid border-gray-50 m-10">
        <img
          className="transition duration-200 transform group-hover:scale-110"
          src={info?.logoFile}
          alt="real-estate-pic"
        />
      </div>
      <div>
        <h1 className=" mt-28 text-2xl font-bold">{info?.name}</h1>
        <p className="text-sm mt-3">کد صنفی: {info?.guildCode}</p>
        <div className="text-zinc-500 text-base font-medium sm:pl-2 md:ml-2 md:mb-0 mb-1.5 border-gray-500 last:ml-0 last:pl-0 w-fit-content flex items-center mt-2">
          <p className="text-sm">{info?.phoneNumber}</p>
          <span className="block bg-gray-400 h-4 w-[1px] mx-2"></span>
          <p className="text-sm">{info?.telephoneNumber}</p>
          <span className="block bg-gray-400 h-4 w-[1px] mx-2"></span>
          <p className="text-sm">{info?.bio}</p>
          <span className="block bg-gray-400 h-4 w-[1px] mx-2"></span>
          <ReactStars
            className="mb-1"
            count={5}
            onChange={ratingChanged}
            size={24}
            color={"#ffd700"}
            activeColor={"#ffd700"}
            value={info?.rate}
            edit={false}
          />
        </div>
        <div className=" flex items-center">
          <p className="text-zinc-500 text-sm ml-2 mt-1">با مدیریت: </p>
          <p className="font-semibold text-sm mt-1">{info?.managerName}</p>
          <span className="block bg-gray-400 h-4 w-[1px] mx-2 mt-1"></span>
          <p className="text-zinc-500 text-sm ml-2 mt-1">آدرس: </p>
          <p className="font-semibold text-sm mt-1">{info?.address}</p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-16 mr-10">
        <div className="flex ml-5">
          <p className="text-blue-800 font-bold">{info?.countOnSale}</p>
          <p className="text-sm mx-2 mt-0.5 text-zinc-500">فروشی</p>
        </div>
        <div className="flex ml-5">
          <p className="text-blue-800 font-bold">{info?.countRent}</p>
          <p className="text-sm mx-2 mt-0.5 text-zinc-500">اجاره ای</p>
        </div>
        <div className="flex">
          <p className="text-blue-800 font-bold">{info?.countConstruction}</p>
          <p className="text-sm mx-2 mt-0.5 text-zinc-500">ساخت و ساز</p>
        </div>
      </div>
    </div>
  );
};

export default RealEstateH;
