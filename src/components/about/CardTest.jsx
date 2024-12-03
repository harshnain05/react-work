import React from 'react'
import { CARD } from '../common/helper'
const CardTest = () => {
    return (
        <div>
            <p className=' font-semibold text-center text-[40px] leading-[48px] mb-[-100px] '>Lorem ipsum</p>
            <div className=" flex mx-auto justify-between max-w-[1140px]">
               
                {CARD.map((data, i) => (
                    <div key={i} className="mt-[200px]  mb-[20px]">
                        <div className="bg-[#FFF3ED]  p-5 rounded-lg shadow-md max-w-[365px] mx-auto">
                            <img
                                src={data.imgSrc}
                                alt=""
                                className="mb-8 rounded-lg max-w-[60px]"
                            />
                            <h1 className="text-2xl mb-4 font-semibold">{data.Heading}</h1>
                            <p className="text-lg font-light text-[#101010] leading-[150%]">
                                {data.para}{" "}
                                <span className="flex cursor-pointer font-semibold text-[#FF5501]">
                                    Read more
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className=" flex mx-auto justify-between max-w-[1140px]">
                {CARD.map((data, i) => (
                    <div key={i} className=" mb-[100px]">
                        <div className="bg-[#FFF3ED]  p-5 rounded-lg shadow-md max-w-[365px] mx-auto">
                            <img
                                src={data.imgSrc}
                                alt=""
                                className="mb-8 rounded-lg max-w-[60px]"
                            />
                            <h1 className="text-2xl mb-4 font-semibold">{data.Heading}</h1>
                            <p className="text-lg font-light text-[#101010] leading-[150%]">
                                {data.para}{" "}
                                <span className="flex cursor-pointer font-semibold text-[#FF5501]">
                                    Read more
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardTest