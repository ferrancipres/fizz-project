import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css'

import 'swiper/css';
import 'swiper/css/free-mode'
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export const ProductRelative = () => {
    return (
        <div className='mt-4 lg:px-80'>
            <Swiper
                modules={[Pagination]}
                pagination={{
                    el: ".pagination",
                    clickable: true,
                }}
                freeMode={true}
                grabCursor={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
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
                <SwiperSlide><Link to={'/product/Lord%20of%20Misrule'}><img className='h-36' src='https://www.lush.com/cdn-cgi/image/width=3840,f=auto/https://unicorn.lush.com/media/thumbnails/products/lord_of_misrule_bath_bomb_ecom_2023_3accf742_thumbnail_256.png' alt="" /></Link></SwiperSlide>
                <SwiperSlide><Link to={'/product/Bat%20Art'}><img className='h-36' src='https://www.lush.com/cdn-cgi/image/width=3840,f=auto/https://unicorn.lush.com/media/thumbnails/products/bat_art_bath_bomb_2023_1_a85b5216_thumbnail_256.png' alt="" /></Link></SwiperSlide>
                <SwiperSlide><Link to={'/product/Avobath'}><img className='h-36' src='https://www.lush.com/cdn-cgi/image/width=3840,f=auto/https://unicorn.lush.com/media/thumbnails/products/avobath_bath_bomb_2021_thumbnail_256.png' alt="" /></Link></SwiperSlide>
                <SwiperSlide><Link to={'/product/Intergalactic'}><img className='h-36' src='https://www.lush.com/cdn-cgi/image/width=3840,f=auto/https://unicorn.lush.com/media/thumbnails/products/intergalactic_bath_bomb_2021_thumbnail_256.png' alt="" /></Link></SwiperSlide>
                <SwiperSlide><Link to={'/product/Lakes'}><img className='h-36' src='https://www.lush.com/cdn-cgi/image/width=3840,f=auto/https://unicorn.lush.com/media/thumbnails/products/lakes_bath_bomb_kitchen_2021_thumbnail_256.png' alt="" /></Link></SwiperSlide>
            </Swiper>
        </div>

    )
}