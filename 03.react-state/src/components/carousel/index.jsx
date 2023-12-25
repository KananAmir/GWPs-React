// import Swiper core and required modules
import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import bg1 from "../../assets/images/bg1.jpg";
import bg2 from "../../assets/images/bg2.jpg";
import bg3 from "../../assets/images/bg3.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./index.scss";
const CarouselComp = () => {
  return (
    <div id="carousel">
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <h3>Fixed-Height Slider</h3>
          <h1>Excellent bouquets for you</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h3>Floral</h3>
          <h1>Excellent bouquets for you</h1>
        </SwiperSlide>
        <SwiperSlide>
          <h3>Fixed-Height Slider</h3>
          <h1>Excellent bouquets for you</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselComp;
