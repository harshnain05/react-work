import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import swiperImage from '../../assets/image/png/swiperImage.png';
import { CommonHeading } from '../common/CommonHeading'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const SwiperTest = () => {
    return (
        <div className='mx-auto  max-w-[1140px]'>
            <p className='font-semibold mt-[140px] text-[40px] leading-[48px] text-center text-black' >
                Lorem ipsum dolor sit amet
            </p>
            <p className='font-semibold mt-[20px] mb-[45px] text-[16px] leading-[22px] text-center text-[#535353]' >
                Lorem ipsum dolor sit amet consectetur. Amet varius in enim.
            </p>

            <Swiper
                slidesPerView={3}
                spaceBetween={10}


                className="mySwiper mb-[100px]"
            >
                <SwiperSlide>    <img src={swiperImage} alt="imageSwiper" /></SwiperSlide>
                <SwiperSlide>   <img src={swiperImage} alt="imageSwiper" /></SwiperSlide>
                <SwiperSlide>   <img src={swiperImage} alt="imageSwiper" /></SwiperSlide>
                <SwiperSlide>   <img src={swiperImage} alt="imageSwiper" /></SwiperSlide>
                <SwiperSlide>   <img src={swiperImage} alt="imageSwiper" /></SwiperSlide>
                <SwiperSlide>   <img src={swiperImage} alt="imageSwiper" /></SwiperSlide>
                <SwiperSlide>   <img src={swiperImage} alt="imageSwiper" /></SwiperSlide>
                <SwiperSlide>   <img src={swiperImage} alt="imageSwiper" /></SwiperSlide>
                <SwiperSlide>   <img src={swiperImage} alt="imageSwiper" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperTest