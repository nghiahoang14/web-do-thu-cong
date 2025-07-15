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
const getResponsiveBreakpoints = (preview: number) => {
  if (preview <= 1) {
    return {
      0: { slidesPerView: 1 },
    };
  }

  return {
    0: { slidesPerView: 1 },
    576: { slidesPerView: Math.min(2, preview) },
    768: { slidesPerView: Math.min(3, preview) },
    992: { slidesPerView: Math.min(4, preview) },
    1200: { slidesPerView: preview },
  };
};

export const Paginations = (props: { preview: number ,images:string[], className:string}) => {
  const { preview,images ,className} = props;
  return (
    <>
     <div className="px-4 sm:px-4 md:px-6 lg:px-0">
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
          <SwiperSlide  >
        <Slide key={index} image={src} className={className}/>
        </SwiperSlide>
      ))}
      </Swiper>
      </div>
    </>
  );
};
