import React, { useState } from 'react'

const UseState = () => {
    const [value, setValue] = useState(0);  
    

    const handClicker = () => {
        setValue(value + 1);
    };
    const handDeclicker = () => {
        setValue(value - 1);
    }
  return (
      <div className="bg-white pb-40">
          <h2 className='text-black mb-5 text-center text-[72px] godzillnpma'>Counting</h2>
          <div className="flex border-[5px] max-w-[400px] h-[141px] rounded-[50px] bg-[#1EABF8] border-black  items-center justify-center mx-auto">
              <button
                  onClick={handDeclicker}
                  className=" text-black px-16 font-normal leading-[24px] text-[60px]  py-4 rounded mx-auto block"
              >
               -
              </button>
            
          <p className="text-black text-center  leding-[24px] text-[60px]"> {value}</p>
              <button
                  onClick={handClicker}
                  className=" text-black px-16 font-normal text-[60px] leading-[24px]  py-4 rounded mx-auto block"
              >
            +
              </button>
          </div>

      </div>
  )
}

export default UseState


