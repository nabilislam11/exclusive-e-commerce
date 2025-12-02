import React from 'react'
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Container from '../container/Container';
import { Link } from 'react-router';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const data = useSelector((state) => state.cartInfo.value)
  console.log(data);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Contact" },
    { name: "About", },
    { name: "Sign Up", },

  ];
  return (
    <>

      <div className=' border-b-1 border-gray-400 '>
        <Container>
          <div className="pt-[38px] pb-[16px] ">
            <div className="flex justify-between items-center">
              <div className="py-[7px] ">
                <h1 className='font-primary  font-bold text-[24px] leading-[24px] '>Exclusive</h1>
              </div>
              <div className="py-[7px] flex items-center gap-x-12  ">
                {navItems.map((nav, i) => (

                  <Link key={i} className='font-secondary font-normal  text-[16px] leading-[24px]   text-black' to={nav.path}>

                    {nav.name}</Link>
                ))}

                {/* <ul className=' '>

                  <li className='font-secondary font-normal  text-[16px] leading-[24px]   text-black' ><a href="">Home</a></li>
                  <li className='font-secondary font-normal  text-[16px] leading-[24px]   text-black'><a href="">Contact</a></li>
                  <li className='font-secondary font-normal  text-[16px] leading-[24px]   text-black'><a href="">About</a></li>
                  <li className='font-secondary font-normal  text-[16px] leading-[24px]   text-black'><a href="">Sign Up</a></li>
                </ul> */}
              </div>
              <div className="bg-gray-100  flex items-center gap-x-8 rounded ">
                <input className='text-[#363738] py-[10px] pl-[20px] ' type="text" placeholder='What are you looking for?' />
                <CiSearch className=' pr-3 text-black size-10 ' />
              </div>
              <div className="flex items-center gap-x-[16px] ">
                <div><CiHeart size={32} /></div>

                <Link to={"/cart"} className=' relative'>
                  <CiShoppingCart size={32} />
                  {
                    data.length > 0 &&
                    <p className='absolute top-[0] left-[25px] font-medium text-white py-[1px] px-[10px] bg-red-500 rounded-full animate-bounce   '>{data.length}</p>
                  }
                </Link>
                <div><CiUser size={32} /></div>
              </div>

            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Navbar
