'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export const Paginations =()=>{
    return(
        <>
         <Swiper
        modules={[Autoplay,  Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false, 
      }}
   
      pagination={{ clickable: true }}
      
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
       <div className='w-[100%] h-[493px] truncate aspect-square'>
         <img src="/demo/img-5.jpg" alt="" className='w-full h-full object-cover' />
       </div>
      </SwiperSlide>
      <SwiperSlide>   
        <div className='w-[100%] h-[493px] truncate aspect-square'>
          <img src="/demo/img-2.jpeg" alt="" className='w-full h-full object-cover'/>
        </div>
        </SwiperSlide>
      <SwiperSlide>
        < div className='w-[100%] h-[493px] truncate aspect-square'>
          <img src="/demo/img-6.jpg" alt="" className='w-full h-full object-cover'/>
        </ div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-[100%] h-[493px] truncate aspect-square'>
          <img src="/demo/img-4.png" alt="" className='w-full h-full object-cover' />
        </div>
      </SwiperSlide>
      
    </Swiper>
        </>
    )
}