import React from 'react'
import Banner from '../components/banner/Banner'

import Categoris from '../components/categories/Categoris'
import Thismonth from '../components/thismonth/Thismonth'
import Advertisement from '../components/advertisement/Advertisement'
import LocalProduct from '../components/localproduct/LocalProduct'
import Featured from '../components/featured/Featured'
import Today from '../components/todayscollection/Today'
import Service from '../components/service/Service'


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Today></Today>
      <Categoris></Categoris>
      <Thismonth></Thismonth>
      <Advertisement></Advertisement>
      <LocalProduct></LocalProduct>
      <Featured></Featured>
      <Service></Service>
    </div>
  )
}

export default Home
