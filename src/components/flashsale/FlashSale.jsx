import React from 'react'
import Container from '../container/Container'

const FlashSale = () => {
  return (
    <div className=' '>
      <Container>


        <div className="w-[100px] h-[40px] flex items-center group ">
          <div className="w-[20px] h-full bg-red-500 rounded hover:w-full hover:bg-red-500 transition-all duration-300 ">
            <p className='font-secondary font-semibold text-[16px] leading-[20px] text-red-500 hover:text-white pl-[26px] py-[10px] transition-all duration-300
            '>Today's</p>
          </div>
        </div>
        <div className="flex gap-[87px] items-center pt-[24px] ">
          <h1 className='font-primary font-semibold text-[36px] leading-[48px]'>Flash Sales</h1>
          <div className="flex items-center gap-x-[17px] ">
            <div className=" flex flex-col gap-y-[4px] ">
              <h1 className='font-secondary font-medium  text-[12px] leading-[18px]'>Days</h1>
              <p className='font-primary font-bold text-[32px] leading-[30px] '>03</p>

            </div>
            <p className='text-[#E07575] w-[4px] h-[16px] '>:</p>
            <div className=" flex flex-col gap-y-[4px]">
              <h1 className='font-secondary font-medium  text-[12px] leading-[18px]'>Hours</h1>
              <p className='font-primary font-bold text-[32px] leading-[30px] '>23</p>
            </div>
            <p className='text-[#E07575] w-[4px] h-[16px] '>:</p>
            <div className="flex flex-col gap-y-[4px]">
              <h1 className='font-secondary font-medium  text-[12px] leading-[18px]'>Minutes</h1>
              <p className='font-primary font-bold text-[32px] leading-[30px] '>19</p>

            </div>
            <p className='text-[#E07575] w-[4px] h-[16px] '>:</p>
            <div className="flex flex-col gap-y-[4px]">
              <h1 className='font-secondary font-medium  text-[12px] leading-[18px]'>Seconds</h1>
              <p className='font-primary font-bold text-[32px] leading-[30px] '>50</p>

            </div>

          </div>
        </div>

      </Container>
    </div>
  )
}


export default FlashSale
