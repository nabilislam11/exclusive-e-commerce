import React from 'react'
import Container from '../container/Container'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
const NextArrow = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="absolute right-[350px] top-[-55px] transform -translate-y-1/2 bg-gray-200  text-black py-[10px] px-[10px] rounded-full shadow-md hover:bg-gray-300  "
        >
            <MdArrowForwardIos size={20} />
        </button>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="absolute right-[410px] top-[-55px] transform -translate-y-1/2 bg-gray-200  text-black py-[10px] px-[10px] rounded-full shadow-md hover:bg-gray-300 "
        >
            <MdArrowBackIos size={20} />
        </button>
    );
};

const Categoris = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        nextArrow: <NextArrow />,   // custom next
        prevArrow: <PrevArrow />,   // custom prev
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
        <div className='border-b-1 border-gray-400 pt-[80px] '>
            <Container>

                {/* categoris__part*/}
                <div class="relative inline-block group h-[30px]  overflow-hidden rounded-md">

                    <div class="absolute top-0 left-0 h-full w-3 bg-red-500 transition-all duration-500 group-hover:w-full"></div>


                    <span class="relative z-10 px-4 py-2 font-semibold text-red-500 transition-colors duration-500 group-hover:text-white">
                        Categories
                    </span>
                </div>
                {/* Browser__by */}
                <div className="flex gap-[87px] items-center pt-[24px] pb-[40px] ">
                    <h1 className='font-primary font-semibold text-[36px] leading-[48px]'>Browse By Category</h1>

                </div>
                {/* slider_catagoris */}

                <div className="slider-container pb-[40px] ">
                    <Slider {...settings}>
                        <div>
                            <div className="group w-[170px] h-[145px] bg-white flex flex-col items-center rounded justify-center gap-y-[16px] hover:bg-[#DB4444] transition-all duration-300 ">
                                <IoPhonePortraitOutline className='text-black group-hover:text-white size-14 transition-all duration-300' />
                                <p className='font-secondary font-normal text-[16px] leading-[24px] text-black group-hover:text-white transition-all duration-300'>Phones</p>
                            </div>
                        </div>
                        <div>
                            <div className="group w-[170px] h-[145px] bg-white flex flex-col items-center rounded justify-center gap-y-[16px] hover:bg-[#DB4444] transition-all duration-300 ">
                                <IoPhonePortraitOutline className='text-black group-hover:text-white size-14 transition-all duration-300' />
                                <p className='font-secondary font-normal text-[16px] leading-[24px] text-black group-hover:text-white transition-all duration-300'>Phones</p>
                            </div>
                        </div>
                        <div>
                            <div className="group w-[170px] h-[145px] bg-white flex flex-col items-center rounded justify-center gap-y-[16px] hover:bg-[#DB4444] transition-all duration-300 ">
                                <IoPhonePortraitOutline className='text-black group-hover:text-white size-14 transition-all duration-300' />
                                <p className='font-secondary font-normal text-[16px] leading-[24px] text-black group-hover:text-white transition-all duration-300'>Phones</p>
                            </div>
                        </div>
                        <div>
                            <div className="group w-[170px] h-[145px] bg-white flex flex-col items-center rounded justify-center gap-y-[16px] hover:bg-[#DB4444] transition-all duration-300 ">
                                <IoPhonePortraitOutline className='text-black group-hover:text-white size-14 transition-all duration-300' />
                                <p className='font-secondary font-normal text-[16px] leading-[24px] text-black group-hover:text-white transition-all duration-300'>Phones</p>
                            </div>
                        </div>
                        <div>
                            <div className="group w-[170px] h-[145px] bg-white flex flex-col items-center rounded justify-center gap-y-[16px] hover:bg-[#DB4444] transition-all duration-300 ">
                                <IoPhonePortraitOutline className='text-black group-hover:text-white size-14 transition-all duration-300' />
                                <p className='font-secondary font-normal text-[16px] leading-[24px] text-black group-hover:text-white transition-all duration-300'>Phones</p>
                            </div>
                        </div>
                        <div>
                            <div className="group w-[170px] h-[145px] bg-white flex flex-col items-center rounded justify-center gap-y-[16px] hover:bg-[#DB4444] transition-all duration-300 ">
                                <IoPhonePortraitOutline className='text-black group-hover:text-white size-14 transition-all duration-300' />
                                <p className='font-secondary font-normal text-[16px] leading-[24px] text-black group-hover:text-white transition-all duration-300'>Phones</p>
                            </div>
                        </div>
                        <div>
                            <div className="group w-[170px] h-[145px] bg-white flex flex-col items-center rounded justify-center gap-y-[16px] hover:bg-[#DB4444] transition-all duration-300 ">
                                <IoPhonePortraitOutline className='text-black group-hover:text-white size-14 transition-all duration-300' />
                                <p className='font-secondary font-normal text-[16px] leading-[24px] text-black group-hover:text-white transition-all duration-300'>Phones</p>
                            </div>
                        </div>
                        <div>
                            <div className="group w-[170px] h-[145px] bg-white flex flex-col items-center rounded justify-center gap-y-[16px] hover:bg-[#DB4444] transition-all duration-300 ">
                                <IoPhonePortraitOutline className='text-black group-hover:text-white size-14 transition-all duration-300' />
                                <p className='font-secondary font-normal text-[16px] leading-[24px] text-black group-hover:text-white transition-all duration-300'>Phones</p>
                            </div>
                        </div>
                    </Slider>
                </div>

            </Container>
        </div>
    )
}

export default Categoris

