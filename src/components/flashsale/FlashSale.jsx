import React from 'react'
import Container from '../container/Container'
import product from '../../assets/product.png'
import { FaStar } from 'react-icons/fa'
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

const FlashSale = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
    <div className=' '>
      <Container>
        {/* todays__part */}
        <div className="w-[100px] h-[40px] flex items-center group:  pb-[40px]">
          <div className="w-[20px] h-full bg-red-500 rounded hover:w-full hover:bg-red-500 transition-all duration-300 ">
            <p className='font-secondary font-semibold text-[16px] leading-[20px] text-red-500 hover:text-white pl-[26px] py-[10px] transition-all duration-300
            '>Today's</p>
          </div>
        </div>
        {/* Flesh sales__part */}
        <div className="flex gap-[87px] items-center pt-[24px] pb-[40px] ">
          <h1 className='font-primary font-semibold text-[36px] leading-[48px]'>Flash Sales</h1>
          <div className="flex items-center gap-x-[17px] ">
            <div className=" flex flex-col gap-y-[4px] ">
              <h1 className='font-secondary font-medium  text-[12px] leading-[18px]'>Days</h1>
              <p className='font-primary font-bold text-[32px] leading-[30px] '>03</p>

            </div>
            <p className='text-[#E07575] w-[4px] h-[16px] '>:</p>
            <div className=" flex flex-col gap-y-[4px]">
              <h1 className='font-secondary font-medium  text-[12px] leading-[18px]'>Hours</h1>
              <p className='font-primary font-bold text-[32px] leading-[30px] '>23</p>
            </div>
            <p className='text-[#E07575] w-[4px] h-[16px] '>:</p>
            <div className="flex flex-col gap-y-[4px]">
              <h1 className='font-secondary font-medium  text-[12px] leading-[18px]'>Minutes</h1>
              <p className='font-primary font-bold text-[32px] leading-[30px] '>19</p>

            </div>
            <p className='text-[#E07575] w-[4px] h-[16px] '>:</p>
            <div className="flex flex-col gap-y-[4px]">
              <h1 className='font-secondary font-medium  text-[12px] leading-[18px]'>Seconds</h1>
              <p className='font-primary font-bold text-[32px] leading-[30px] '>50</p>

            </div>

          </div>
        </div>
        {/* product_card */}
        {/* <div className="w-[270px] h-[350px] ">
          <img src={product} alt="" />
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


        </div> */}
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <div className="w-[270px] h-[350px] ">
                <img src={product} alt="" />
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
              <div className="w-[270px] h-[350px] ">
                <img src={product} alt="" />
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
              <div className="w-[270px] h-[350px] ">
                <img src={product} alt="" />
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
              <div className="w-[270px] h-[350px] ">
                <img src={product} alt="" />
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
              <div className="w-[270px] h-[350px] ">
                <img src={product} alt="" />
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
              <div className="w-[270px] h-[350px] ">
                <img src={product} alt="" />
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


export default FlashSale
