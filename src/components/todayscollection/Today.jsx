import React from 'react'
import Container from '../container/Container'
import todays1 from '../../assets/todays1.png'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import todays2 from '../../assets/todays2.png'
import todays3 from '../../assets/todays3.png'
import todays4 from '../../assets/todays4.png'
import ProductCard from '../local/ProductCard';
import { Link } from 'react-router';


const RatingStars = ({ rating }) => {
    return (
        <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => {
                const full = i + 1 <= Math.floor(rating);   // full star
                const half = i < rating && i + 1 > rating;  // half star

                return (
                    <span key={i}>
                        {full ? (
                            <FaStar className="text-yellow-500" size={14} />
                        ) : half ? (
                            <FaStarHalfAlt className="text-yellow-500" size={14} />
                        ) : (
                            <FaRegStar className="text-gray-300" size={14} />
                        )}
                    </span>
                );
            })}
        </div>
    );
};


const flashSell = [
    {
        id: 1,
        image: todays1,
        tittle: "HAVIT HV- G92 Gamepad",
        oldPrice: ` $190`,
        newPrice: `$120`,
        discount: "-40%",

    },
    {
        id: 2,
        image: todays2,
        tittle: "AK-900 Wired Keyboard",
        oldPrice: `$960`,
        newPrice: `$1160`,
        discount: "-40%",

    },
    {
        id: 3,
        image: todays3,
        tittle: "IPS LCD Gaming Monitor",
        oldPrice: `$370`,
        newPrice: `$400`,
        discount: "-40%",

    },
    {
        id: 4,
        image: todays4,
        tittle: "S-Series Comfort Chair ",
        oldPrice: `$375`,
        newPrice: `$400`,
        discount: "-40%",

    },
    {
        id: 5,
        image: todays3,
        tittle: "HAVIT HV- G92 Gamepad",
        oldPrice: 190,
        newPrice: 120,
        discount: "-40%",

    },
    {
        id: 1,
        image: todays3,
        tittle: "HAVIT HV- G92 Gamepad",
        oldPrice: 190,
        newPrice: 120,
        discount: "-40%",

    },
    {
        id: 4,
        image: todays4,
        tittle: "S-Series Comfort Chair ",
        oldPrice: `$375`,
        newPrice: `$400`,
        discount: "-40%",

    }
]

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

const Today = () => {
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
        <div className='border-b-1 border-gray-400  '>
            <Container>
                {/* todays__part */}
                <div class="relative inline-block group h-[30px]  overflow-hidden rounded-md">

                    <div class="absolute top-0 left-0 h-full w-3 bg-red-500 transition-all duration-500 group-hover:w-full"></div>


                    <span class="relative z-10 px-4 py-2 font-semibold text-red-500 transition-colors duration-500 group-hover:text-white">
                        Today’s
                    </span>
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

                <div className="slider-container 
        ">
                    <Slider {...settings}>
                        {
                            flashSell.map((items) => (
                                <ProductCard items={items}></ProductCard>
                            ))
                        }




                    </Slider>
                    <div className="flex items-center justify-center pt-[51px] pb-[60px]  ">
                        <Link to={"/allproduct"} className=' py-[16px] px-[48px] bg-red-500 text-white font-secondary font-medium  text-[16px] leading-[24px] rounded '>View All Products</Link>
                    </div>
                </div>


            </Container>
        </div>
    )
}


export default Today
