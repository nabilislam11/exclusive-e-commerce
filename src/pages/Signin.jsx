import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Tophead from '../components/tophead/Tophead';
import Navbar from '../components/navbar/Navbar';
import Container from '../components/container/Container';
import Footer from '../components/footer/Footer';
const Signin = () => {
  return (
    <div>
        <Tophead></Tophead> 
        <Container>
        <Navbar></Navbar>


        </Container>
        <Footer></Footer>
    </div>
  )
}

export default Signin
