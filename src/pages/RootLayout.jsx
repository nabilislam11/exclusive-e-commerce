import React from 'react'
import Container from '../components/container/Container'
import Navbar from '../components/navbar/Navbar'
import Tophead from '../components/tophead/Tophead'
import { Outlet } from 'react-router'

import Footer from '../components/footer/Footer'

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
      <Footer/>
    </div>
  )
}

export default RootLayout
