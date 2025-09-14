import React from 'react'
import Banner from '../components/banner/Banner'
import FlashSale from '../components/flashsale/flashSale'
import Categoris from '../components/categories/Categoris'
import Thismonth from '../components/thismonth/Thismonth'
import Advertisement from '../components/advertisement/Advertisement'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FlashSale></FlashSale>
      <Categoris></Categoris>
      <Thismonth></Thismonth>
      <Advertisement></Advertisement>
    </div>
  )
}

export default Home
