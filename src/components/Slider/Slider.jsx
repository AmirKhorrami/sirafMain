import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import noImage from "../../assets/images/noImage.jpg";
// import video from "../../assets/video/video.MP4";
import "swiper/css";
import "swiper/css/navigation";

const Slider = ({  media }) => {
  return (
    <div className="w-[900px] h-[500px] m-auto mb-10 bg-slate-200 rounded-lg">
      <Swiper modules={[Navigation]} slidesPerView={1} navigation>
        {media &&
          media.Video.map((item) => (
            <SwiperSlide>
              <div key={item.id}>
                <video className="w-[1050px] h-[500px] rounded-lg" src={item.path} controls />
                <p className="absolute bottom-0 w-20 h-12 m-3 flex items-center justify-center text-white bg-black rounded-xl opacity-80">
                  {item.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        {media &&
          media.Image.map((item) => (
            <SwiperSlide>
              <div key={item.id}>
                <img
                  className="w-[1050px] h-[500px] rounded-lg"
                  src={!item?.path ?  noImage : item?.path}
                  alt="slider"
                />
                <p className="absolute bottom-0 w-20 h-12 m-3 flex items-center justify-center text-white bg-black rounded-xl opacity-80">
                  {item?.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      {/* <img src={noImage} /> */}
    </div>
  );
};

export default Slider;
