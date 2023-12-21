import React, { useState } from "react";

const OtherFaIL = ({ item, saveHandler }) => {
  const [closefe, setClosefe] = useState(false);
  const [open, setOpen] = useState("");
  const [otIn, setOtIn] = useState("");
  const [otLi, setOtLi] = useState("انتخاب");
  const OtInHandler = (e) => {
    if (item.value === "meter" || item.value === "price") {
      const inputNumber = parseInt(e.target.value);
      if (isNaN(inputNumber)) {
        otIn(0);
      } else {
        setOtIn(inputNumber);
        saveHandler(item.value, otIn);
      }
    } else {
      setOtIn(e.target.value);
      saveHandler(item.value, otIn);
    }
  };
  const OtLiHandler = (eN, eV) => {
    setOtLi(eN);
    saveHandler(item.value, eV.toString());
    // console.log(eV);
    // console.log(eV.toString());
  };
  const closefeHandler = (item) => {
    setClosefe(!closefe);
    setOpen(item.id);
  };
  return (
    <div>
      {item.type === "List" && item.insert === 4 && (
        <div>
          <li className="flex flex-col justify-between">
            <div
              id="select-box"
              className="group w-full "
              onClick={() => closefeHandler(item)}
            >
              <span className="text-sm bg-white px-2 relative right-2 top-[10px] z-[1]  text-zinc-500">
                {item.name}
              </span>
              <div className="select-box-button relative border w-full text-xs rounded ">
                <div>
                  <button className="flex items-center justify-between p-2 min-w-[10rem] w-full">
                    <span>{otLi}</span>
                    <div className="flex items-center">
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
              </div>
              {closefe &&
                open === item.id &&
                item.Items.map((ite) => (
                  <div class="flex w-full left-0 top-[calc(100%+3px)] z-[15]">
                    <ul class="bg-white w-full border rounded mx-auto transition-all duration-500 overflow-hidden divide-y">
                      <li
                        id="option-item"
                        data-name="انتخاب"
                        class="px-2 py-3 hover:bg-zinc-100 cursor-pointer select-box-option "
                        value={otLi}
                        onClick={() => OtLiHandler(ite.name, ite.value)}
                      >
                        <p className="text-xs">{ite.name}</p>
                      </li>
                    </ul>
                  </div>
                ))}
            </div>
          </li>
        </div>
      )}
      {item.type === "Number" && item.insert === 4 && (
        <div>
          <li className="flex justify-between items-center">
            <div className="my-2 relative group w-full">
              <label
                className="text-sm translate-x-4 z-[1] relative top-3 right-3 px-2  group-focus-within:font-bold bg-white  text-zinc-500 group-focus-within:text-zinc-900"
                htmlFor="meter"
              >
                {item.name}
              </label>
              <div className="relative">
                <input
                  maxLength=""
                  type="text"
                  placeholder={item.name}
                  className="border w-full placeholder:text-xs p-2 rounded focus:outline-none   group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200"
                  id="meter"
                  value={otIn}
                  onChange={(e) => OtInHandler(e)}
                />
              </div>
            </div>
          </li>
        </div>
      )}
    </div>
  );
};

export default OtherFaIL;
