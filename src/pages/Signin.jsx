import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Tophead from '../components/tophead/Tophead';
import Navbar from '../components/navbar/Navbar';
import Container from '../components/container/Container';
import Footer from '../components/footer/Footer';
import signin from '../assets/signin.png'
import { FcGoogle } from 'react-icons/fc';
const Signin = () => {
  return (
    <div className=' '>
      <Tophead></Tophead>
      <Container>
        <Navbar></Navbar>
        <div className="flex justify-between relative">
          <div className="">
            <img className=' absolute top-[60px] left-[-200px] ' src={signin} alt="" />
          </div>
          {/* left part  */}
          <div className="pt-[185px] w-[371px]  pb-[256px] ">
            <h1 className='font-primary  font-medium  text-[36px] leading-[30px] pb-[24px] '>Create an account</h1>
            <p className='font-secondary font-normal  text-[16px] leading-[24px]  pb-[48px] text-black'>Enter your details below</p>
            <div className=" flex flex-col gap-y-10">
              <input className='outline-none border-b-2 font-secondary font-normal  text-[16px] leading-[24px] border-gray-200 text-[#363738] ' type="text" placeholder='Name' />
              <input className='outline-none border-b-2 font-secondary font-normal  text-[16px] leading-[24px] border-gray-200 text-[#363738] ' type="text" placeholder='Email or Phone Number' />
              <input className='outline-none border-b-2 font-secondary font-normal  text-[16px] leading-[24px] border-gray-200 text-[#363738] ' type="text" placeholder='Password' />
              <button className='py-[16px] items-center text-center bg-[#DB4444] text-white rounded '>Create Account</button>
            </div>
            <div className="">
              <div className="flex items-center justify-center  gap-x-[16px] border-2 border-gray-200 rounded mt-[16px] ">
                <FcGoogle size={25} />
                <button className='py-[16px] items-center text-center '>Sign up with Google</button>

              </div>
              <div className="pt-[32px] flex gap-x-4  justify-center ">
                <a  className='font-secondary font-normal  text-[16px] leading-[24px]' href="">Already have account?</a>
                <a className='font-primary  font-medium    text-[16px] leading-[24px]' href="">Log in</a>
              </div>
            </div>
          </div>

        </div>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default Signin
