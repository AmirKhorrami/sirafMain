import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

const EstatesCreate = ({ estate }) => {
  const [close, setClose] = useState(false);
  const [result, setResult] = useState([]);
  const closeHandler = () => {
    setClose(!close);
  };
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const resultHandler = (e) => {
    if (!result.includes(e)) setResult([...result, e]);
  };

  return (
    <div>
      <li className="flex justify-between border-b items-center">
        <div id="select-box" className="group w-full ">
          <span className="text-sm bg-white px-2 relative right-2 top-[10px] z-[1]  text-zinc-500">
            دفتر/دفاتر املاک &zwnj; (اختیاری)
          </span>

          <div className="select-box-button border w-full text-xs rounded ">
            <div className="flex flex-row mt-2">
              {result &&
                result.length > 0 &&
                result?.map((item, index) => {
                  return (
                    <div
                      className="flex items-center gap-2 mx-2 mt-2"
                      key={index}
                    >
                      <p className="bg-neutral-200 px-2 py-1 rounded">{item}</p>
                    </div>
                  );
                })}
            </div>

            <div>
              <button
                className="flex items-center justify-between p-2 min-w-[10rem] w-full flex-wrap"
                onClick={closeHandler}
              >
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2"></div>
                </div>
                <div className="flex items-center flex-wrap">
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
            {close && (
              <div className="mt-2 border rounded flex flex-col items-center justify-center overflow-y-scroll flex-wrap">
                <input
                  type="text"
                  className="w-[500px] h-10 my-2  px-2 rounded-md text-xs flex items-center justify-center border"
                  placeholder="جستجو..."
                />

                {estate &&
                  estate.length > 0 &&
                  estate.map((item) => (
                    <ul
                      className=" w-full  mx-auto transition-all duration-500 "
                      onClick={() => resultHandler(item.name)}
                    >
                      <li className="px-2 py-3 flex justify-between hover:bg-zinc-100 cursor-pointer select-box-option  ">
                        <p>{item?.name}</p>
                        <p>مدیریت: {item?.managerName}</p>
                        <p className="px-1"></p>
                        <ReactStars
                          className="mb-1"
                          count={5}
                          onChange={ratingChanged}
                          size={20}
                          value={item?.rate}
                          edit={false}
                        />
                      </li>
                    </ul>
                  ))}
              </div>
            )}
          </div>
        </div>
      </li>
    </div>
  );
};

export default EstatesCreate;
