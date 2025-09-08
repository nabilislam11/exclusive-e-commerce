import React from 'react'
import Container from '../components/container/Container'
import Navbar from '../components/navbar/Navbar'
import Tophead from '../components/tophead/Tophead'
import { Outlet } from 'react-router'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const RootLayout = () => {
  return (
    <div>
        <Tophead/>
       <Container>
        <Navbar/>


        <div className="min-h-[80vh]">
            <Outlet/>
            </div>            

       </Container>
      
    </div>
  )
}

export default RootLayout
