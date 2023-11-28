import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import noImage from "../../assets/images/noImage.jpg";
import "swiper/css";
import "swiper/css/navigation";

const RealEstateS = ({ info }) => {
  return (
    <div className="w-[900px] h-[280px] m-auto mb-10 bg-slate-200 rounded-md">
      <Swiper modules={[Navigation]} slidesPerView={1} navigation>
        {info &&
          info.images?.map((item) => (
            <SwiperSlide>
              <div className="flex justify-center" key={item.id}>
                <img
                  className="w-[450px] h-[250px]"
                  // sizes="100vw"
                  src={item?.image || noImage}
                  alt="slider"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default RealEstateS;
