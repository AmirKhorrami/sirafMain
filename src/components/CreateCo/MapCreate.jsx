import React from 'react';

const MapCreate = () => {
    return (
      <div>
        <li className="border-b">
          <button className=" w-full h-full py-3 cursor-pointer flex items-center justify-between">
            <div className="flex justify-between items-center w-full">
              <span>موقعیت بر روی نقشه</span>
              <span className="bg-gray-100 rounded text-xs py-1 px-2 font-medium text-gray-400 ">
                انتخاب کنید
              </span>
            </div>
          </button>
        </li>
      </div>
    );
};

export default MapCreate;