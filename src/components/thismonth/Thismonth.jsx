import React from 'react'
import Container from '../container/Container'
import product from '../../assets/product.png'
import { FaStar } from 'react-icons/fa'
import bestsell from '../../assets/bestsell.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { CiHeart } from 'react-icons/ci';
import { LuEye } from 'react-icons/lu';


const Thismonth = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,

        autoplay: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3, slidesToScroll: 1 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            }
        ]
    };
    return (
        <div className='border-b-1 border-gray-400 pt-[70px] pb-[140px] '>
            <Container>
                {/* This__Month */}
                <div class="relative inline-block group h-[30px]  overflow-hidden rounded-md">

                    <div class="absolute top-0 left-0 h-full w-3 bg-red-500 transition-all duration-500 group-hover:w-full"></div>


                    <span class="relative z-10 px-4 py-2 font-semibold text-red-500 transition-colors duration-500 group-hover:text-white">
                        This Month
                    </span>
                </div>
                {/* Best_Selling_Products*/}
                <div className=" flex justify-between items-center pt-[24px] pb-[40px] ">
                    <h1 className='font-primary font-semibold text-[36px] leading-[48px]'>Best Selling Products</h1>
                    <div className="flex items-center justify-center pt-[51px] pb-[60px]  ">
                        <button className='text-white  py-[16px] px-[48px] bg-red-500 text-whitefont-secondary font-medium  text-[16px] leading-[24px] rounded '>View All</button>
                    </div>

                </div>
                {/* product_card */}

                <div className="slider-container 
        ">
                    <Slider {...settings}>
                        <div>
                            <div className="w-[270px] h-[350px] relative">
                                <img src={bestsell} alt="" />
                                <div className="flex flex-col gap-y-[8px] absolute top-[12px] right-[12px] ">
                                    <div className="flex items-center justify-center p-[5px] bg-white  rounded-full ">
                                        <CiHeart />
                                    </div>
                                    <div className="flex items-center justify-center p-[5px] bg-white rounded-full  ">
                                        <LuEye />
                                    </div>
                                </div>
                                <h3 className='pt-[16px] pb-[8px] font-secondary font-medium  text-[16px] leading-[24px]'>The north coat</h3>
                                <div className="flex items-center gap-x-[12px] pb-[8px] ">
                                    <p className='text-red-500  font-secondary font-medium  text-[16px] leading-[24px]'>$120</p>
                                    <p className='text-[#7D8184] font-secondary font-medium  text-[16px] leading-[24px] '>$160</p>
                                </div>
                                <div className="flex items-center gap-x-[8px]">
                                    <div className="flex items-center">
                                        <FaStar className=' text-yellow-500 size-5  ' />
                                        <FaStar className=' text-yellow-500 size-5  ' />
                                        <FaStar className=' text-yellow-500 size-5  ' />
                                        <FaStar className=' text-yellow-500 size-5  ' />
                                        <FaStar className=' text-yellow-500 size-5  ' />


                                    </div>
                                    <p className='text-[#7D8184] font-secondary font-semibold text-[14px] leading-[21px] '>(88)</p>
                                </div>


                            </div>
                        </div>
                        <div>
                            <div className="w-[270px] h-[350px] relative">
                                <img src={product} alt="" />
                                <div className="flex flex-col gap-y-[8px] absolute top-[12px] right-[12px] ">
                                    <div className="flex items-center justify-center p-[5px] bg-white  rounded-full ">
                                        <CiHeart />
                                    </div>
                                    <div className="flex items-center justify-center p-[5px] bg-white rounded-full  ">
                                        <LuEye />
                                    </div>
                                </div>
                                <h3 className='pt-[16px] pb-[8px] font-secondary font-medium  text-[16px] leading-[24px]'>HAVIT HV-G92 Gamepad</h3>
                                <div className="flex items-center gap-x-[12px] pb-[8px] ">
                                    <p className='text-red-500  font-secondary font-medium  text-[16px] leading-[24px]'>$120</p>
                                    <p className='text-[#7D8184] font-secondary font-medium  text-[16px] leading-[24px] '>$160</p>
                                </div>
                                <div className="flex items-center gap-x-[8px]">
                                    <div className="flex items-center">
                                        <FaStar className=' text-yellow-500 size-5  ' />
                                        <FaStar className=' text-yellow-500 size-5  ' />
                                        <FaStar className=' text-yellow-500 size-5  ' />
                                        <FaStar className=' text-yellow-500 size-5  ' />
                                        <FaStar className=' text-yellow-500 size-5  ' />


                                    </div>
                                    <p className='text-[#7D8184] font-secondary font-semibold text-[14px] leading-[21px] '>(88)</p>
                                </div>


                            </div>
                        </div>
                        <div>
                            <div className="w-[270px] h-[350px] relative">
                                <img src={product} alt="" />
                                <div className="flex flex-col gap-y-[8px] absolute top-[12px] right-[12px] ">
                                    <div className="flex items-center justify-center p-[5px] bg-white  rounded-full ">
                                        <CiHeart />
                                    </div>
                                    <div className="flex items-center justify-center p-[5px] bg-white rounded-full  ">
                                        <LuEye />
                                    </div>
                                </div>
                                <h3 className='pt-[16px] pb-[8px] font-secondary font-medium  text-[16px] leading-[24px]'>HAVIT HV-G92 Gamepad</h3>
                                <div className="flex items-center gap-x-[12px] pb-[8px] ">
                                    <p className='text-red-500  font-secondary font-medium  text-[16px] leading-[24px]'>$120</p>
                                    <p className='text-[#7D8184] font-secondary font-medium  text-[16px] leading-[24px] '>$160</p>
                                </div>
                                <div className="flex items-center gap-x-[8px]">
                                    <div className="flex items-center">
                                        <FaStar className=' text-yellow-500 size-5  ' />
                                        <FaStar className=' text-yellow-500 size-5  ' />
                                        <FaStar className=' text-yellow-500 size-5  ' />
                                        <FaStar className=' text-yellow-500 size-5  ' />
                                        <FaStar className=' text-yellow-500 size-5  ' />


                                    </div>
                                    <p className='text-[#7D8184] font-secondary font-semibold text-[14px] leading-[21px] '>(88)</p>
                                </div>


                            </div>
                        </div>
                        <div>
                            <div className="w-[270px] h-[350px] relative ">
                                <img src={product} alt="" />
                                <div className="flex flex-col gap-y-[8px] absolute top-[12px] right-[12px] ">
                                    <div className="flex items-center justify-center p-[5px] bg-white  rounded-full ">
                                        <CiHeart />
                                    </div>
                                    <div className="flex items-center justify-center p-[5px] bg-white rounded-full  ">
                                        <LuEye />
                                    </div>
                                </div>
                                <h3 className='pt-[16px] pb-[8px] font-secondary font-medium  text-[16px] leading-[24px]'>HAVIT HV-G92 Gamepad</h3>
                                <div className="flex items-center gap-x-[12px] pb-[8px] ">
                                    <p className='text-red-500  font-secondary font-medium  text-[16px] leading-[24px]'>$120</p>
                                    <p className='text-[#7D8184] font-secondary font-medium  text-[16px] leading-[24px] '>$160</p>
                                </div>
                                <div className="flex items-center gap-x-[8px]">
                                    <div className="flex items-center">
                                        <FaStar className=' text-yellow-500 size-5  ' />
                                        <FaStar className=' text-yellow-500 size-5  ' />
                                        <FaStar className=' text-yellow-500 size-5  ' />
                                        <FaStar className=' text-yellow-500 size-5  ' />
                                        <FaStar className=' text-yellow-500 size-5  ' />


                                    </div>
                                    <p className='text-[#7D8184] font-secondary font-semibold text-[14px] leading-[21px] '>(88)</p>
                                </div>


                            </div>
                        </div>
                        <div>
                            <div className="w-[270px] h-[350px] relative ">
                                <img src={product} alt="" />
                                <div className="flex flex-col gap-y-[8px] absolute top-[12px] right-[12px] ">
                                    <div className="flex items-center justify-center p-[5px] bg-white  rounded-full ">
                                        <CiHeart />
                                    </div>
                                    <div className="flex items-center justify-center p-[5px] bg-white rounded-full  ">
                                        <LuEye />
                                    </div>
                                </div>
                                <h3 className='pt-[16px] pb-[8px] font-secondary font-medium  text-[16px] leading-[24px]'>HAVIT HV-G92 Gamepad</h3>
                                <div className="flex items-center gap-x-[12px] pb-[8px] ">
                                    <p className='text-red-500  font-secondary font-medium  text-[16px] leading-[24px]'>$120</p>
                                    <p className='text-[#7D8184] font-secondary font-medium  text-[16px] leading-[24px] '>$160</p>
                                </div>
                                <div className="flex items-center gap-x-[8px]">
                                    <div className="flex items-center">
                                        <FaStar className=' text-yellow-500 size-5  ' />
                                        <FaStar className=' text-yellow-500 size-5  ' />
                                        <FaStar className=' text-yellow-500 size-5  ' />
                                        <FaStar className=' text-yellow-500 size-5  ' />
                                        <FaStar className=' text-yellow-500 size-5  ' />


                                    </div>
                                    <p className='text-[#7D8184] font-secondary font-semibold text-[14px] leading-[21px] '>(88)</p>
                                </div>


                            </div>
                        </div>
                        <div>
                            <div className="w-[270px] h-[350px] relative ">
                                <img src={product} alt="" />
                                <div className="flex flex-col gap-y-[8px] absolute top-[12px] right-[12px] ">
                                    <div className="flex items-center justify-center p-[5px] bg-white  rounded-full ">
                                        <CiHeart />
                                    </div>
                                    <div className="flex items-center justify-center p-[5px] bg-white rounded-full  ">
                                        <LuEye />
                                    </div>
                                </div>
                                <h3 className='pt-[16px] pb-[8px] font-secondary font-medium  text-[16px] leading-[24px]'>HAVIT HV-G92 Gamepad</h3>
                                <div className="flex items-center gap-x-[12px] pb-[8px] ">
                                    <p className='text-red-500  font-secondary font-medium  text-[16px] leading-[24px]'>$120</p>
                                    <p className='text-[#7D8184] font-secondary font-medium  text-[16px] leading-[24px] '>$160</p>
                                </div>
                                <div className="flex items-center gap-x-[8px]">
                                    <div className="flex items-center">
                                        <FaStar className=' text-yellow-500 size-5  ' />
                                        <FaStar className=' text-yellow-500 size-5  ' />
                                        <FaStar className=' text-yellow-500 size-5  ' />
                                        <FaStar className=' text-yellow-500 size-5  ' />
                                        <FaStar className=' text-yellow-500 size-5  ' />


                                    </div>
                                    <p className='text-[#7D8184] font-secondary font-semibold text-[14px] leading-[21px] '>(88)</p>
                                </div>


                            </div>
                        </div>

                    </Slider>

                </div>


            </Container>
        </div>
    )

}

export default Thismonth
