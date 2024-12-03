import React from 'react'
import { useLocation } from 'react-router-dom';
const Footer = ({ props }) => {
  const location = useLocation().pathname;
  return (
    <div className={`${location === "/"
      ? "flex flex-col justify-center items-center bg-[#1E1E1E] pt-20 rounded-t-[30px]" : "flex flex-col justify-center items-center bg-[#002B43] pt-20"
      }`}>
      <div className="container mx-auto px-3 max-w-[1140px]">
        <div className="flex flex-wrap mx-auto justify-center items-center">
          <div className='lg:w-6/12 w-full'>
            <h2 className={`${location === "/"
              ? "text-[#FF5501] font-bold xl:text-[38px] lg:text-3xl text-2xl lg:mb-4 mb-3" : "lg:mb-4 mb-3 xl:text-[38px] lg:text-3xl text-2xl font-bold text-[#007AFF]"
              }`}>Logo <span className='text-white'>Here</span>  </h2>
            <p className='max-w-[431px] lg:text-base text-sm text-white opacity-[70%]'>Lorem ipsum dolor sit amet consectetur. Metus mattis cum sem integer est. Amet fringilla tristique hendrerit vestibulum diam est penatibus interdum imperdiet. Duis ut libero suspendisse arcu erat. Pulvinar in est.</p>
          </div>
          <div className="lg:w-6/12 w-full flex max-lg:justify-center max-lg:items-center max-lg:mt-5">
            <div className='lg:w-6/12 md:w-3/12 sm:w-4/12 w-6/12 text-white lg:space-y-4'>
              <h2 className='lg:mb-5 mb-2 !text-white !opacity-[100%]'>About website</h2>
              <a href="/"><p className='mb-4 opacity-[70%]'>Home</p> </a>
              <a href="/"><p className='mb-4 opacity-[70%]'>How It Works</p></a>
              <a href="/"><p className='mb-4 opacity-[70%]'>Testimonials</p></a>
              <a href="/"><p className='opacity-[70%]'>Why Choose Us</p></a>
            </div>
            <div className='lg:w-6/12 md:w-3/12 sm:w-4/12 w-6/12 text-white space-y-4'>
              <h2 className='lg:mb-5 mb-2'>About website</h2>
              <a href="/"><p className=' mb-4 opacity-[70%]'>Instagram</p></a>
              <a href="/"><p className=' mb-4 opacity-[70%]'>Twitter</p></a>
              <a href="/"><p className=' mb-4 opacity-[70%]'>Discord  </p></a>
              <a href="/"><p className=' opacity-[70%]'>You Tube</p></a>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full max-w-[1440px] h-[1px] lg:mt-[58px] mt-10 mb-1 bg-[#FFFFFF] bg-opacity-[40%]'></div>
      <p className='mx-a\ text-center lg:text-base text-sm text-white opacity-[70%] lg:py-6 md:py-5 py-4'>Copyright©2024 (Logo) All Rights Reserved.</p>
    </div>
  )
}

export default Footer