import React from 'react'
import Container from '../container/Container'
import { VscSend } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className='bg-black pt-[80px] pb-[60px]  '>
      <Container>
        <div className="flex justify-between items-center ">
          {/* left part */}
          <div className="">
       <div className="flex flex-col gap-y-24px pb-[16px] ">
             <h1 className='font-primary   font-bold text-[24px] leading-[24px]   text-white'>Exclusive</h1>
            <h2 className='font-secondary    font-medium  text-[20px] leading-[28px]   text-white'>Subscribe</h2>
            <p className='font-secondary    font-normal   text-[16px] leading-[30px]   text-white'>Get 10% off your first order</p>
       </div>
            <div className=" border-1 border-white flex gap-x-8 py-[12px]  px-[16px] rounded ">
              <input className='text-white outline-none   ' type="text" placeholder='Enter your email' />
              <button className=' text-white  '><VscSend size={25}  /></button>
            </div>
          </div>
          <div className=""></div>
          <div className=""></div>
        </div>

      </Container>
    </div>
  )
}

export default Footer
