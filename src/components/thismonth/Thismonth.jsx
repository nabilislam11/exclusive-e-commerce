import React from 'react'
import Container from '../container/Container'
import Slider from "react-slick";
import { FaRegStar, FaStar, FaStarHalfAlt, } from 'react-icons/fa'
import "slick-carousel/slick/slick.css";
import { CiHeart } from 'react-icons/ci';
import { LuEye } from 'react-icons/lu';
import thisMonth1 from '../../assets/thisMonth1.png'
import thisMonth2 from '../../assets/thisMonth2.png'
import thisMonth3 from '../../assets/thisMonth3.png'
import thisMonth4 from '../../assets/thisMonth4.png'


const Thismonth = () => {

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
            img: thisMonth1,
            tittle: "The north coat",
            oldPrice: ` $260`,
            newPrice: `$360`,
            discount: "-40%",
            ratingStar: 2.5,
            rating: 65,
        },
        {
            id: 2,
            img: thisMonth2,
            tittle: "Gucci duffle bag",
            oldPrice: `$960`,
            newPrice: `$1160`,
            discount: "-40%",
            ratingStar: 5,
            rating: 75,
        },
        {
            id: 3,
            img: thisMonth3,
            tittle: "RGB liquid CPU Cooler",
            oldPrice: `$160`,
            newPrice: `$170`,
            discount: "-40%",
            ratingStar: 3,
            rating: 99,
        },
        {
            id: 4,
            img: thisMonth4,
            tittle: "Small BookSelf ",
            oldPrice: `$375`,
            newPrice: `$400`,
            discount: "-40%",
            ratingStar: 4,
            rating: 98,
        },
        {
            id: 5,
            img: thisMonth2,
            tittle: "HAVIT HV- G92 Gamepad",
            oldPrice: 190,
            newPrice: 120,
            discount: "-40%",
            ratingStar: 5,
            rating: 88,
        },
        {
            id: 6,
            img: thisMonth3,
            tittle: "HAVIT HV- G92 Gamepad",
            oldPrice: 190,
            newPrice: 120,
            discount: "-40%",
            ratingStar: 4.5,
            rating: 88,
        },
    ]
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
        <div className=' pt-[70px] pb-[140px] '>
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
                        {
                            ProductCard.map((items) => (
                                <div key={items.id} className=" px-2 ">
                                    <div className="w-[270px] h-[355px] relative group  overflow-hidden  ">
                                        <div className="relative group overflow-hidden bg-[#f5f5f5] ">
                                            <img className='w-full py-[30px] px-[40px] ' src={items.img} alt="" />
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
                                        <div className="flex items-center mt-1">
                                            <RatingStars rating={items.ratingStar} />
                                            <span className="ml-2 text-gray-600">({items.rating})</span>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }




                    </Slider>

                </div>


            </Container>
        </div>
    )

}

export default Thismonth
