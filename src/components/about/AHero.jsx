import React from 'react'
import { CommonHeading } from '../common/CommonHeading'
const AHero = () => {
    return (
        <div className='bg-[#43BBFF] flex min-h-screen  items-center justify-center '>
            <div className='container  items-center justify-center '>
                <CommonHeading MainHeading={'Lorem ipsum dolor sit amet consectetur. Sceleris'} />
                <CommonHeading SubHeading={'Lorem ipsum dolor sit amet consectetur. Id mattis at tristique duis.'} />
                <div className="flex gap-5 justify-center mt-10">
                    <button className='rounded-[55px]  hover:bg-white py-[14px]text-white text-white bg-[#43BBFF] border-white border px-[24px] font-semibold text-base  hover:text-[#43BBFF]'>
                        sing Up
                    </button>
                    <button className='rounded-[55px] hover:bg-white py-[14px]text-white text-white bg-[#43BBFF] border-white border px-[24px] font-semibold text-base  hover:text-[#43BBFF] py-[14px]'>
                        Login
                    </button>

                </div>
            </div>


        </div>

    )
}

export default AHero