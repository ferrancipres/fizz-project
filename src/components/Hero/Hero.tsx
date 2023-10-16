import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css'


export const Hero = () => {
  return (
    <div className='flex justify-center items-center'>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".pagination",
          clickable: true,
        }}
        freeMode={true}
        grabCursor={true}
        breakpoints={{
          0:{
            slidesPerView:1,
            spaceBetween: 5,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 5,    
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 5, 
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 5,
          }
      }}
      >
        <SwiperSlide><Link to={'/product/Baked%20Alaska'}><img src='https://www.lush.com/cdn-cgi/image/width=3840,f=auto/https://unicorn.lush.com/media/thumbnails/products/baked_alaska_soap_hero_2023__2_4a4c0f6d_thumbnail_4096.jpg' alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link to={'/product/Barbie%20Box'}><img src='https://www.lush.com/cdn-cgi/image/width=1920,f=auto/https://unicorn.lush.com/media/thumbnails/products/Barbie_x_lush_boom_box_soap_heros_2023-7_8145f7ac_thumbnail_4096.jpg' alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link to={'/product/Glitter%20Bomb'}><img src='https://www.lush.com/cdn-cgi/image/width=1920,f=auto/https://unicorn.lush.com/media/thumbnails/products/glitterbox_hero_16x9_0c0be1b1_thumbnail_4096.jpg' alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link to={'/product/Barbie%20Bath'}><img src='https://www.lush.com/cdn-cgi/image/width=1080,f=auto/https://unicorn.lush.com/media/thumbnails/products/Barbie_x_lush_barbie_bath_bomb_heros_2023-16_0593f4f8_thumbnail_4096.jpg' alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link to={'/product/Demon%20in%20the%20Dark'}><img src='https://www.lush.com/cdn-cgi/image/width=1920,f=auto/https://unicorn.lush.com/media/thumbnails/products/demon_in_the_dark_soap_hero_2023_3_75435ca7_thumbnail_4096.jpg' alt="" /></Link></SwiperSlide>
      </Swiper>

    </div>
  )
}