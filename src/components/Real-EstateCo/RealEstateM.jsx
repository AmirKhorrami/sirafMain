import React from "react";
import RealEstateS from "../Real-EstateCo/RealEstateS";

const RealEstateM = ({ info }) => {
  return (
    <div className="border-b">
      <p className="m-5 text-sm">{info?.description}</p>
      <div className="h-80 w-full">
        <video
          className="w-96 h-full pb-5 mx-auto"
          src={info?.video}
          // autoPlay
          // loop
          controls
        />
      </div>
      <RealEstateS info={info} />
    </div>
  );
};

export default RealEstateM;
