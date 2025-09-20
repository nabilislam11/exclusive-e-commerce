import React from 'react'
import Container from '../container/Container'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { CiHeart } from 'react-icons/ci';
import { LuEye } from 'react-icons/lu';
import ourProducts1 from '../../assets/ourProducts1.png'
import ourProducts2 from '../../assets/ourProducts2.png'
import ourProducts3 from '../../assets/ourProducts3.png'
import ourProducts4 from '../../assets/ourProducts4.png'
import ourProducts5 from '../../assets/ourProducts5.png'
import ourProducts6 from '../../assets/ourProducts6.png'
import ourProducts7 from '../../assets/ourProducts7.png'


const NextArrow = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="absolute right-[-60px] top-[-55px] transform -translate-y-1/2 bg-gray-200  text-black py-[10px] px-[10px] rounded-full shadow-md hover:bg-gray-300  "
        >
            <MdArrowForwardIos size={20} />
        </button>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="absolute right-[0px] top-[-55px] transform -translate-y-1/2 bg-gray-200  text-black py-[10px] px-[10px] rounded-full shadow-md hover:bg-gray-300 "
        >
            <MdArrowBackIos size={20} />
        </button>
    );
};


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
const ProductCard = [
    {
        id: 1,
        img: ourProducts1,
        tittle: "HAVIT HV- G92 Gamepad",
        oldPrice: ` $190`,
        newPrice: `$120`,
        discount: "-40%",
        ratingStar: 2.5,
        rating: 88,
    },
    {
        id: 2,
        img: ourProducts2,
        tittle: "AK-900 Wired Keyboard",
        oldPrice: `$960`,
        newPrice: `$1160`,
        discount: "-40%",
        ratingStar: 5,
        rating: 75,
    },
    {
        id: 3,
        img: ourProducts2,
        tittle: "IPS LCD Gaming Monitor",
        oldPrice: `$370`,
        newPrice: `$400`,
        discount: "-40%",
        ratingStar: 3,
        rating: 99,
    },
    {
        id: 4,
        img: ourProducts4,
        tittle: "S-Series Comfort Chair ",
        oldPrice: `$375`,
        newPrice: `$400`,
        discount: "-40%",
        ratingStar: 4,
        rating: 98,
    },
    {
        id: 5,
        img: ourProducts5,
        tittle: "HAVIT HV- G92 Gamepad",
        oldPrice: 190,
        newPrice: 120,
        discount: "-40%",
        ratingStar: 5,
        rating: 88,
    },
    {
        id: 6,
        img: ourProducts6,
        tittle: "HAVIT HV- G92 Gamepad",
        oldPrice: 190,
        newPrice: 120,
        discount: "-40%",
        ratingStar: 4.5,
        rating: 88,
    },
    {
        id: 7,
        img: ourProducts7,
        tittle: "HAVIT HV- G92 Gamepad",
        oldPrice: 190,
        newPrice: 120,
        discount: "-40%",
        ratingStar: 4.5,
        rating: 88,
    },
    {
        id: 8,
        img: ourProducts2,
        tittle: "HAVIT HV- G92 Gamepad",
        oldPrice: 190,
        newPrice: 120,
        discount: "-40%",
        ratingStar: 4.5,
        rating: 88,
    },
]


const LocalProduct = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        slidesPerRow: 1,
        rows: 2,
        gap: 50,
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
        <div>
            <Container>
                {/* categoris__part*/}
                <div class="relative inline-block group h-[30px]  overflow-hidden rounded-md">

                    <div class="absolute top-0 left-0 h-full w-3 bg-red-500 transition-all duration-500 group-hover:w-full"></div>


                    <span class="relative z-10 px-4 py-2 font-semibold text-red-500 transition-colors duration-500 group-hover:text-white">
                        Categories
                    </span>
                </div>
                {/* Browser__by */}
                <div className="flex gap-[87px] items-center pt-[24px]  ">
                    <h1 className='font-primary font-semibold text-[36px] leading-[48px]'>Browse By Category</h1>

                </div>
                {/* slice__part */}
                <div className="slider-container ">
                    <Slider className=' ' {...settings}>
                        {
                            ProductCard.map((items) => (
                                <div key={items.id} className=" px-2  pt-[60px] ">
                                    <div className="w-[270px] h-[355px] relative group  overflow-hidden  ">
                                        <div className="relative group overflow-hidden bg-[#f5f5f5] ">
                                            <img className='w-full ' src={items.img} alt="" />
                                            <button className="absolute left-0 bottom-[-40px] bg-black/85 py-2 w-full text-white font-bold group-hover:bottom-0 transition-all duration-300">
                                                Add To Cart
                                            </button>
                                            <div className="flex flex-col gap-y-[8px] absolute top-[12px] right-[12px] ">
                                                <div className="flex items-center justify-center p-[5px] bg-white  rounded-full ">
                                                    <CiHeart size={20} />
                                                </div>
                                                <div className="flex items-center justify-center p-[5px] bg-white rounded-full  ">
                                                    <LuEye />
                                                </div>
                                            </div>
                                        </div>
                                        <p className='absolute top-[12px] left-[12px]  py-[4px] px-[12px] bg-red-500 text-white rounded  '>{items.discount}</p>
                                        <h3 className='pt-[16px] pb-[8px] font-secondary font-medium  text-[16px] leading-[24px]'>{items.tittle}</h3>
                                        <div className="flex items-center gap-x-[12px] pb-[8px] ">
                                            <p className='text-red-500  font-secondary font-medium  text-[16px] leading-[24px]'>{items.newPrice}</p>
                                            <p className='text-[#7D8184] font-secondary font-medium  text-[16px] leading-[24px] '>{items.oldPrice}</p>
                                        </div>
                                        <div className="flex items-center ">
                                            <RatingStars rating={items.ratingStar} />
                                            <span className="ml-2 text-gray-600">({items.rating})</span>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }




                    </Slider>
                    <div className="flex items-center justify-center pt-[51px] pb-[60px]  ">
                        <button className=' py-[16px] px-[48px] bg-red-500 text-white font-secondary font-medium  text-[16px] leading-[24px] rounded '>View All Products</button>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default LocalProduct
