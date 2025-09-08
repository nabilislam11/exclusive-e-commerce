import React from 'react'
import Container from '../container/Container'
import { VscSend } from "react-icons/vsc";
import qrcode from '../../assets/qrcode.png'
import googleplay from '../../assets/googleplay.png'
import appstore from '../../assets/googleplay.png'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";

import { MdCopyright } from 'react-icons/md';
const Footer = () => {
  return (
    <div className='bg-black pt-[80px]  '>
      <Container>
        <div className="flex justify-between pb-[60px] ">
          {/* left part */}
          <div className="w-[20%] ">
            <div className="flex flex-col gap-y-24px pb-[16px] ">
              <h1 className='font-primary   font-bold text-[24px] leading-[24px]   text-white'>Exclusive</h1>
              <h2 className='font-secondary    font-medium  text-[20px] leading-[28px]   text-white'>Subscribe</h2>
              <p className='font-secondary    font-normal   text-[16px] leading-[30px]   text-white'>Get 10% off your first order</p>
            </div>
            <div className=" border-1 border-white flex gap-x-8 py-[12px]  px-[16px] rounded ">
              <input className='text-white outline-none   ' type="text" placeholder='Enter your email' />
              <button className=' text-white  '><VscSend size={25} /></button>
            </div>
          </div>
          {/* middle part */}
          <div className="flex justify-around  w-[60%] ">
            <div className="w-[35%] ">
              <h1 className='font-secondary    font-medium  text-[20px] leading-[28px]   text-white pb-[24px'>Support</h1>
       <div className=" flex flex-col gap-4">
               <p className='font-secondary font-normal text-[16px] leading-[24px]   text-white'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
              <a className='font-secondary font-normal text-[16px] leading-[24px]   text-white' href="">+88015-88888-9999</a>
       </div>

            </div>
            <div className="w-[30%] ">
              <h1 className='font-secondary    font-medium  text-[20px] leading-[28px]   text-white'>Account</h1>
              <ul>
                <li className='font-secondary font-normal text-[16px] leading-[24px]   text-white'><a href="">My Account</a></li>
                <li className='font-secondary font-normal text-[16px] leading-[24px]   text-white'><a href="">Login / Register</a></li>
                <li className='font-secondary font-normal text-[16px] leading-[24px]   text-white'><a href="">Cart</a></li>
                <li className='font-secondary font-normal text-[16px] leading-[24px]   text-white'><a href="">Wishlist</a></li>
                <li className='font-secondary font-normal text-[16px] leading-[24px]   text-white'><a href="">Shop</a></li>
              </ul>
            </div>
            <div className=" w-[30%] ">
              <h1 className='font-secondary    font-medium  text-[20px] leading-[28px]   text-white'>Quick Link</h1>
              <p className='font-secondary font-normal text-[16px] leading-[24px]   text-white'>Privacy Policy</p>
              <p className='font-secondary font-normal text-[16px] leading-[24px]   text-white'>Terms Of Use</p>
              <p className='font-secondary font-normal text-[16px] leading-[24px]   text-white'>FAQ</p>
              <p className='font-secondary font-normal text-[16px] leading-[24px]   text-white'>Contact</p>
            </div>
          </div>
          {/* right part */}
          <div className="w-[15%] ">
            <h1 className='font-secondary font-normal text-[20px] leading-[28px]   text-white pb-[24px] '>Download App</h1>
            <p className='font-secondary font-medium text-[12px] leading-[18px] text-[#FAFAFA] pb-[8px] '>Save $3 with App New User Only</p>
            <div className="flex items-center gap-x-2 pb-[48px] ">
              <img src={qrcode} alt="" />
              <div className="">
                <img src={googleplay} alt="" />
                <img src={appstore} alt="" />
              </div>

            </div>
              <div className="flex items-center gap-x-6 ">
                <a href=""><FaFacebookF  size={25} color='white' /></a>
                <a href=""><CiTwitter  size={25} color='white'/></a>
                <a href=""><FaInstagram  size={25} color='white'/></a>
                <a href=""><FaLinkedinIn  size={25} color='white' /></a>
              </div>
          </div>
        </div>
        <div className="flex items-center text-center justify-center gap-x-1.5 pt-[16px] pb-[24px] border-t border-gray-800   ">
         <a href=""><MdCopyright size={25} color='#363738' /></a>
          <p  className='font-primary  font-medium  text-[16px]   text-[#363738] '>Copyright Nabil 2022. All right reserved</p>
        </div>

      </Container>
    </div>
  )
}

export default Footer
