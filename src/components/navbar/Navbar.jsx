import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Container from '../container/Container';

const Navbar = () => {
  return (
    <div className=' border-b-1 border-gray-400 '>
        <Container>
          <div className="pt-[38px] pb-[16px] ">
            <div className="flex justify-between items-center">
                <div className="py-[7px] ">
                    <h1 className='font-primary  font-bold text-[24px] leading-[24px] '>Exclusive</h1>
                </div>
                <div className="py-[7px] ">
             <ul className='flex items-center gap-x-12  '>
                <li className='font-secondary font-normal  text-[16px] leading-[24px]   text-black' ><a href="">Home</a></li>
                <li className='font-secondary font-normal  text-[16px] leading-[24px]   text-black'><a href="">Contact</a></li>
                <li className='font-secondary font-normal  text-[16px] leading-[24px]   text-black'><a href="">About</a></li>
                <li className='font-secondary font-normal  text-[16px] leading-[24px]   text-black'><a href="">Sign Up</a></li>
             </ul>
                </div>
                <div className="bg-gray-100  flex items-center gap-x-8 rounded ">
                 <input className='text-[#363738] py-[10px] pl-[20px] '  type="text" placeholder='What are you looking for?' />
                 <CiSearch className=' pr-3 text-black size-10 ' />
                </div>

            </div>
        </div>
        </Container>
    </div>
  )
}

export default Navbar
