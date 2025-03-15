import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const NaviLinkCarousel = () => {
  const categoriesList = [
    "Trending Music",
    "Music",
    "Films",
    "Live",
    "Gaming",
    "category",
    "News",
    "Sports",
    "Learning",
    "Trending",
    "Music",
    "Films",
    "Live",
    "Gaming",
    "category",
    "News",
    "Sports",
    "Learning",
    "Trending",
    "Music",
    "Films",
    "Live",
    "Gaming",
    "category",
    "News",
    "Sports",
    "Learning",
  ];
  return (
    <div className="w-full relative ">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={3}
        navigation={true}
        breakpoints={{
          620: { slidesPerView: 4 },
          740: { slidesPerView: 5 },
          1024: { slidesPerView: 8 },
          2024: { slidesPerView: 10 },
        }}
        className="w-full"
      >
        {/* Slides */}
        {categoriesList.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center  "
          >
            <div className="text-center  overflow-hidden     lowercase cursor-pointer h-7 bg-white/20  px-1 mb-[1px] rounded-lg hover:bg-white/50 ">
              {item}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
};

export default NaviLinkCarousel;
