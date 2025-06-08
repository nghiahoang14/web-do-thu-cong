"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Slide } from "./Slide";
export const Paginations = (props: { preview: number ,images:string[], className:string}) => {
  const { preview,images ,className} = props;
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation,Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={preview}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((src, index) => (
          <SwiperSlide >
        <Slide key={index} image={src} className={className}/>
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
};
