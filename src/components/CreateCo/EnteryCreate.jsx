import React, { useState } from "react";

const EnteryCreate = ({
  name,
  data,
  result,
  setResult,
  search,
  setResultid,
  resultid,
}) => {
  const [closeIn, setCloseIn] = useState(false);
  const closeInHandler = () => {
    setCloseIn(!closeIn);
  };
  const resultHandler = (e, id) => {
    if (!result.includes(e)) setResult(e);
    setResultid(id);
  };
  // console.log(name);
  // console.log(result);
  return (
    <div>
      <div
        className="w-[500px] h-10 mt-2 mb-1 bg-zinc-100 px-2 rounded-md text-xs flex items-center  border cursor-pointer"
        onClick={closeInHandler}
      >
        <p>{name.name}</p>
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
      </div>
      {closeIn &&
        data.map((item) => {
          return (
            item.isAll === false && (
              <div
                className="w-[500px] h-10 mt-2 mb-1 px-2 rounded-md text-xs flex items-center  border hover:bg-zinc-200 cursor-pointer"
                onClick={() => resultHandler(item.name, item.id)}
              >
                <p className="">{item.name}</p>
              </div>
            )
          );
        })}
    </div>
  );
};

export default EnteryCreate;
