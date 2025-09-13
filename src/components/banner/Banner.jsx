import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Carousel } from 'flowbite-react'
import banner from '../../assets/banner.png'
import banner2 from '../../assets/banner2.webp'
import banner3 from '../../assets/banner3.webp'
import banner4 from '../../assets/banner4.webp'
import Container from '../container/Container'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
    return (


        <>
            <section className=''>
                <Container >
                    <div className="pt-[40px] pb-[140px] flex justify-between gap-x-[50px] items-center">
                        {/* left_part */}
                        <div className="w-[20%] border-r-2 border-gray-300 ">
                            <ul className='flex flex-col gap-y-4 pr-[16px] '>
                                <li className='flex justify-between  items-center font-secondary font-normal  text-[16px] leading-[24px]'>
                                    Woman’s Fashion
                                    <MdKeyboardArrowRight className='size-6  ' /> </li>
                                <li className='flex justify-between  items-center font-secondary font-normal  text-[16px] leading-[24px]'>
                                    Men’s Fashion
                                    <MdKeyboardArrowRight className='size-6  ' /> </li>
                                <li className='font-secondary font-normal  text-[16px] leading-[24px]'><a href="">Electronics</a></li>
                                <li className='font-secondary font-normal  text-[16px] leading-[24px]'><a href="">Home & Lifestyle</a></li>
                                <li className='font-secondary font-normal  text-[16px] leading-[24px]'><a href="">Medicine</a></li>
                                <li className='font-secondary font-normal  text-[16px] leading-[24px]'><a href="">Sports & Outdoor</a></li>
                                <li className='font-secondary font-normal  text-[16px] leading-[24px]'><a href="">Baby’s & Toys</a></li>
                                <li className='font-secondary font-normal  text-[16px] leading-[24px]'><a href="">Groceries & Pets</a></li>
                                <li className='font-secondary font-normal  text-[16px] leading-[24px]'><a href="">Health & Beauty</a></li>

                            </ul>

                        </div>
                        <div className=" w-[80%]  ">

                            <div className="">
                                <Swiper
                                spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000, // 3 sec
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper w-full h-[400px] rounded-xl overflow-hidden shadow-lg"
                  
                                >
                                    <SwiperSlide> <img className='w-[100%] h-[500px]' src={banner} alt="" /></SwiperSlide>
                                    <SwiperSlide> <img className='w-[100%] h-[500px]' src={banner2} alt="" /></SwiperSlide>
                                    <SwiperSlide><img className='w-[100%] h-[500px]' src={banner3} alt="" /></SwiperSlide>
                                    <SwiperSlide><img className='w-[100%] h-[500px]' src={banner4} alt="" /></SwiperSlide>
                                    ...
                                </Swiper>
                                {/* 
                                <Carousel slide={false}   >
                                    <img className='w-[80%] h-[500px]' src={banner} alt="" />
                                    <img className='w-[80%] h-[500px]' src={banner2} alt="" />
                                    <img className='w-[80%] h-[500px]' src={banner3} alt="" />
                                    <img className='w-[80%] h-[500px]' src={banner4} alt="" />
                                    <img className='w-[80%] h-[500px]' src={banner} alt="" />
                                </Carousel> */}
                            </div>

                        </div>
                    </div>
                </Container>
            </section>
        </>


    )
}

export default Banner
