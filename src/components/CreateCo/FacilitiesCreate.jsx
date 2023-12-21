import React, { useState, useEffect } from "react";
import FaCreateIL from "./FaCreateIL";

const FacilitiesCreate = ({ specs, saveTHandler }) => {
  const [faData, setFaData] = useState({});
  const saveHandler = (key, value) => {
    if (faData[key]) {
      setFaData({
        ...faData,
        [key]: value,
      });
    } else {
      setFaData({
        ...faData,
        [key]: value,
      });
    }
  };
  useEffect(() => {
    saveTHandler(faData);
  }, [faData]);
  return (
    <div>
      <div class="py-3">
        <div class="font-semibold">
          <span class="inline-flex bg-gray-500 w-1.5 h-1.5 rounded-full ml-1"></span>
          امکانات
        </div>
        {specs &&
          specs.length > 0 &&
          specs
            .sort((a, b) => a.weightInsert - b.weightInsert)
            .map((item) => (
              <ul>
                <div key={item.id}>
                  <FaCreateIL item={item} saveHandler={saveHandler} />
                </div>
              </ul>
            ))}
      </div>
    </div>
  );
};

export default FacilitiesCreate;
