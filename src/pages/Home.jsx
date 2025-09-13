import React from 'react'
import Banner from '../components/banner/Banner'
import FlashSale from '../components/flashsale/flashSale'
import Categoris from '../components/categories/Categoris'
import Thismonth from '../components/thismonth/Thismonth'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FlashSale></FlashSale>
      <Categoris></Categoris>
      <Thismonth></Thismonth>
    </div>
  )
}

export default Home
