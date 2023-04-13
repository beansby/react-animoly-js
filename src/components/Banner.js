import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation, Autoplay, Pagination} from "swiper";

function Banner(){

    return (
        <div className="w-[930px] h-[180px] mx-auto mt-20 mb-10 overflow-clip">
            <Swiper modules={[Pagination, Autoplay]} autoplay={{delay:3000}} 
            className="mySwiper">
                <SwiperSlide>
                    <img src="./ad-ex6.jpeg" alt=""
                    className="object-cover w-full h-[180px]"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./ad-ex2.png" alt=""
                    className="object-fill w-full h-[180px]"
                    />
                </SwiperSlide>
                
            </Swiper>
        </div>
    )
}

export default Banner;