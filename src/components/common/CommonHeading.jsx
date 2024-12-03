import React from 'react'

export const CommonHeading = ({ MainHeading, SubHeading }) => {
  return (
    <div>
    
          <p className='text-6xl text-white max-w-[816px] text-center mx-auto leading-[72px] font-extrabold '>{MainHeading}</p>
          <p className='text-base leading-[22px] mt-5 text-center font-medium text-[#F8CFC8]'> {SubHeading}</p>
    </div>
  )
}
 
