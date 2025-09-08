import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Container from '../container/Container';

const Tophead = () => {
  return (
    <div className='bg-black'>
        <Container>

        <div className="flex justify-end ">

                   <div className=" py-[15px] flex   items-center  text-center  gap-x-[231px] ">
          <div className="flex items-center gap-x-2">
              <p className='font-secondary  font-normal text-[14px] text-white   '>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </p>
            <p className='font-secondary font-semibold text-[14px] leading-[24px]  border-b-2   text-white'> <a href="">ShopNow</a></p>
          </div>
          <div className="flex items-center gap-x-1.5 ">
            <p className='font-secondary font-semibold text-[14px] leading-[24px]   text-white'>English</p>
            <a href="">
                <MdOutlineKeyboardArrowDown size={25} color='white' />
            </a>
          </div>
        </div>
        </div>
        </Container>
    </div>
  )
}

export default Tophead
