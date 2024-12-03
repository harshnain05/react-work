import React from 'react'
import { CommonHeading } from './CommonHeading'
import SearchImage  from '../../assets/image/svg/search.svg'
export const Hero = () => {
  return (
    <div className='bg-gradient-to-r from-orange-400 to-red-500 flex min-h-screen  items-center justify-center '>
      <div className='container  items-center justify-center '>
        <CommonHeading MainHeading={'Lorem ipsum dolor sit amet consectetur. Sceleris'} />
        <CommonHeading SubHeading={'Lorem ipsum dolor sit amet consectetur. Id mattis at tristique duis.'}/>
          <form class="flex bg-white mx-auto mt-10 rounded-2xl shadow-md overflow-hidden w-[435px]">
        <img className='ms-3' src={SearchImage} alt="image-logo" />
          <input
              type="text"
              placeholder="Search"
              class="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              class="bg-orange-500 me-3 mt-3 mb-3 rounded-2xl text-white px-6 py-2 font-medium hover:bg-orange-600 transition duration-200"
            >
              Start
            </button>
          </form>
        </div>


      </div>


  )
}
