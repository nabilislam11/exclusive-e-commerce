import React from 'react'
import Banner from '../components/banner/Banner'
import FlashSale from '../components/flashsale/flashSale'
import Categoris from '../components/categories/Categoris'
import Thismonth from '../components/thismonth/Thismonth'
import Advertisement from '../components/advertisement/Advertisement'
import LocalProduct from '../components/localproduct/LocalProduct'
import Featured from '../components/featured/Featured'
import Flashsale from '../components/flashsale/flashSale'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Flashsale></Flashsale>
      <Categoris></Categoris>
      <Thismonth></Thismonth>
      <Advertisement></Advertisement>
      <LocalProduct></LocalProduct>
      <Featured></Featured>
    </div>
  )
}

export default Home
