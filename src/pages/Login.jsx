import React from 'react'
import Tophead from '../components/tophead/Tophead';
import Navbar from '../components/navbar/Navbar';
import Container from '../components/container/Container';
import Footer from '../components/footer/Footer';
import signin from '../assets/signin.png'
import { FcGoogle } from 'react-icons/fc';
const Login = () => {
  return (
   <div className=' '>
      <Tophead/>
      <Navbar/>
      <Container>
       
        <div className="flex justify-between relative">
          <div className="">
            <img className=' absolute top-[60px] left-[-200px] ' src={signin} alt="" />
          </div>
          {/* left part  */}
          <div className="pt-[285px] w-[371px]  pb-[367px] ">
            <h1 className='font-primary  font-medium  text-[36px] leading-[30px] pb-[24px] '>Log in to Exclusive</h1>
            <p className='font-secondary font-normal  text-[16px] leading-[24px]  pb-[48px] text-black'>Enter your details below</p>
            <div className=" flex flex-col gap-y-10">
              <input className='outline-none border-b-2 font-secondary font-normal  text-[16px] leading-[24px] border-gray-200 text-[#363738] ' type="text" placeholder='Email or Phone Number' />
              <input className='outline-none border-b-2 font-secondary font-normal  text-[16px] leading-[24px] border-gray-200 text-[#363738] ' type="text" placeholder='Password' />
              <div className="flex items-center justify-between ">
                <button className='py-[16px] px-[48px] items-center text-center bg-[#DB4444] text-white rounded '>Log In</button>
                <p className='font-secondary font-normal  text-[16px] leading-[24px] text-red-500'>Forget Password?</p>
              </div>
            </div>
      
          </div>

        </div>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default Login
