import React, { useEffect, useState } from "react";
import FeaCreateIL from "./FeaCreateIL";

const FeaturesCreate = ({ specs, saveTHandler }) => {
  const [feData, setFeData] = useState({});
  const saveHandler = (key, value) => {
    if (feData[key]) {
      setFeData({
        ...feData,
        [key]: value,
      });
    } else {
      setFeData({
        ...feData,
        [key]: value,
      });
    }
  };
  useEffect(() => {
    saveTHandler(feData);
  }, [feData]);
  return (
    <div>
      {specs != null && (
        <div className="py-3">
          <div className="font-semibold">
            <span className="inline-flex bg-gray-500 w-1.5 h-1.5 rounded-full ml-1"></span>
            ویژگی ها
          </div>

          {specs &&
            specs.length > 0 &&
            specs
              .sort((a, b) => a.weightInsert - b.weightInsert)
              .map((item) => (
                <div key={item.id}>
                  <FeaCreateIL item={item} saveHandler={saveHandler} />
                </div>
              ))}
        </div>
      )}
    </div>
  );
};

export default FeaturesCreate;
