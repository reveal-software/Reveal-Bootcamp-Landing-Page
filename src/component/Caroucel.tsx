import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Caroucel = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img className="h-full w-full" src="left-photo.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-full w-full" src="left-photo.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-full w-full" src="left-photo.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-full w-full" src="left-photo.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-full w-full" src="left-photo.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Caroucel;
