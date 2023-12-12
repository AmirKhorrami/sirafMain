import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const CityCreate = ({ city, setCityId }) => {
  const [open, setOpen] = useState("");
  const [close, setClose] = useState(false);
  const [closeEn, setCloseEn] = useState(false);
  const [closeIn, setCloseIn] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [result, setResult] = useState("");
  const cityHandler = (item) => {
    setOpen(item.id);
    setClose(!close);
  };
  const closeHandler = () => {
    setCloseEn(!closeEn);
    setCloseIn(!closeIn);
  };
  const resultHandler = (e, id) => {
    if (!result.includes(e)) setResult(e);
    setCityId(id)
    // setCloseEn(!closeEn);
    // setCloseIn(!closeIn);
  };
  return (
    <div className="flex flex-col">
      <li className="flex justify-between flex-col gap-0">
        <div className="group  w-full">
          <span className="text-sm bg-white px-2 relative right-2 top-[10px] z-[1] text-zinc-500">
            شهر
          </span>
          <div className="select-box-button relative border w-full text-xs rounded ">
            <button
              type="button"
              className="flex items-center justify-between p-2 min-w-[10rem] w-full"
              onClick={closeHandler}
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
              <span className="font-bold">
                {result != 0 ? result : "انتخاب"}
              </span>
              <div></div>
            </button>
          </div>
          {closeEn && (
            <div className="mt-2 border rounded flex flex-col items-center justify-center overflow-y-scroll">
              <input
                type="text"
                className="w-[500px] h-10 my-2  px-2 rounded-md text-xs flex items-center justify-center border"
                placeholder="جستجو..."
              />
              {closeIn &&
                city
                  // .filter((city) => {
                  //   let filter = searchParams.get("filter");
                  //   if (!filter) return true;
                  //   let name = city.name.toLowerCase();
                  //   return name.startsWith(filter.toLowerCase());
                  // })
                  .map((item, index) => {
                    return (
                      <div>
                        <div
                          className="w-[500px] h-10 mt-2 mb-1 bg-zinc-100 px-2 rounded-md text-xs flex items-center justify-center  border cursor-pointer"
                          key={item.id}
                        >
                          <div
                            onClick={() => cityHandler(item)}
                            onKeyPress={(e) => e.target.value}
                            className="flex items-center w-full"
                          >
                            <p className="text-xs font-bold">{item.name}</p>
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
                              className="feather feather-chevron-down mt-1 mr-1"
                            >
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                            {/* <MdKeyboardArrowDown size="25px" /> */}
                          </div>
                        </div>
                        {close &&
                          open === item.id &&
                          item.county.map((con, index) => (
                            <div
                              className="w-[500px] h-10 mt-2 mb-1 px-2 rounded-md text-xs flex flex-col justify-center  border hover:bg-zinc-200 cursor-pointer"
                              key={con.id}
                              onClick={() => resultHandler(con.name, con.id)}
                            >
                              <p>{con.name}</p>
                            </div>
                          ))}
                      </div>
                    );
                  })}
            </div>
          )}
        </div>
      </li>
    </div>
  );
};

export default CityCreate;
