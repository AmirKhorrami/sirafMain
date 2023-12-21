import React, { useState, useEffect } from "react";
import OtherFeaIL from "./OtherFeaIL";
import OtherFaIL from "./OtherFaIL";

const  OtherFCreate = ({ specs, saveTHandler }) => {
  const [feature, setFeature] = useState(false);
  const [ofc, setOFC] = useState({});
  const saveHandler = (key, value) => {
    if (ofc[key]) {
      setOFC({
        ...ofc,
        [key]: value,
      });
    } else {
      setOFC({
        ...ofc,
        [key]: value,
      });
    }
  };
  useEffect(() => {
    saveTHandler(ofc);
  }, [ofc]);
  const featureHandler = () => {
    setFeature(!feature);
  };
  // console.log(ofc);
  return (
    <div>
      {specs && (
        <div className="mt-8 ">
          <div className="w-full cursor-pointer  " onClick={featureHandler}>
            <div className="flex items-center justify-between border-b">
              <p className="font-bold text-lg">سایر امکانات و ویژگی ها</p>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
              </svg>
            </div>
          </div>
          {feature && (
            <div
              className=" accordion-content  show "
              style={{ height: "auto" }}
            >
              <div>
                <div className="py-3">
                  <div className="font-semibold">
                    <span className="inline-flex bg-gray-500 w-1.5 h-1.5 rounded-full ml-1"></span>
                    سایر ویژگی ها
                  </div>
                  <ul>
                    {specs &&
                      specs.length > 0 &&
                      specs
                        .sort((a, b) => a.weightInsert - b.weightInsert)
                        .map((item) => (
                          <div key={item.id}>
                            <OtherFeaIL item={item} saveHandler={saveHandler} />
                          </div>
                        ))}
                  </ul>
                </div>
                <div class="py-3 ">
                  <div class="font-semibold">
                    <span class="inline-flex bg-gray-500 w-1.5 h-1.5 rounded-full ml-1"></span>
                    سایر امکانات
                  </div>
                  <ul class="" style={{ height: "580px" }}>
                    {specs &&
                      specs.length > 0 &&
                      specs
                        .sort((a, b) => a.weightInsert - b.weightInsert)
                        .map((item) => (
                          <div key={item.id}>
                            <OtherFaIL item={item} saveHandler={saveHandler} />
                          </div>
                        ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OtherFCreate;
