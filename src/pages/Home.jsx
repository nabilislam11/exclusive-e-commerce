import React from 'react'
import Banner from '../components/banner/Banner'
import FlashSale from '../components/flashsale/flashSale'
import Categoris from '../components/categories/Categoris'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FlashSale></FlashSale>
      <Categoris></Categoris>
    </div>
  )
}

export default Home
