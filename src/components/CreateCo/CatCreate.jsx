import React, { useState } from "react";
import EnteryCreate from "./EnteryCreate";
const CatCreate = ({ type, resultid, setResultid , result, setResult}) => {
  const [close, setClose] = useState(false);
  // const [closeIn, setCloseIn] = useState(false);
  const closeHandler = () => {
    setClose(!close);
  };
  const parentId4 = type && type.filter((item) => item.parent_id === null);
  
  return (
    <div>
      <li className="flex flex-col justify-between gap-0">
        <div className="group  w-full">
          <span className="text-sm bg-white px-2 relative right-2 top-[10px] z-[1] text-zinc-500">
            دسته بندی
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
          {close && (
            <div className="mt-2 border rounded flex flex-col items-center justify-center overflow-y-scroll">
              <input
                type="text"
                className="w-[500px] h-10 my-2  px-2 rounded-md text-xs flex items-center justify-center border"
                placeholder="جستجو..."
              />
              {type &&
                type.length > 0 &&
                parentId4.map((item) => (
                  <div key={item.id}>
                    <EnteryCreate
                      name={item}
                      data={type.filter((typei) => item.id === typei.parent_id)}
                      setResult={setResult}
                      result={result}
                      resultid={resultid}
                      setResultid={setResultid}
                    />
                  </div>
                ))}
            </div>
          )}
        </div>
      </li>
    </div>
  );
};

export default CatCreate;
