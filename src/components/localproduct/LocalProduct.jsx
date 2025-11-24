import React, { useEffect, useState } from 'react'
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
import Local from '../local/ProductCard';
import ProductCard from '../local/ProductCard';
import axios from 'axios';

const LocalProduct = () => {
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

    const localProduct = [
        {
            id: 12,
            image: ourProducts1,
            tittle: "HAVIT HV- G92 Gamepad",
            oldPrice: ` $190`,
            newPrice: `$120`,
            discount: "-40%",
            rating: 4.2,
        },
        {
            id: 21,
            image: ourProducts2,
            tittle: "AK-900 Wired Keyboard",
            oldPrice: `$960`,
            newPrice: `$1160`,
            discount: "-40%",
            rating: 3.2,
        },
        {
            id: 31,
            image: ourProducts2,
            tittle: "IPS LCD Gaming Monitor",
            oldPrice: `$370`,
            newPrice: `$400`,
            discount: "-40%",
            rating: 5,
        },
        {
            id: 41,
            image: ourProducts4,
            tittle: "S-Series Comfort Chair ",
            oldPrice: `$375`,
            newPrice: `$400`,
            discount: "-40%",
            rating: 3.5,
        },

        {
            id: 51,
            image: ourProducts2,
            tittle: "IPS LCD Gaming Monitor",
            oldPrice: `$370`,
            newPrice: `$400`,
            discount: "-40%",
            rating: 5,
        },
    ]


    // const LocalProduct = () => {
    //     const [localProduct, setLocalProduct] = useState([])
    //     const fetchProduct = async () => {
    //         try {
    //             //("http://localhost:3000/api/v1/product/get-allproduct")
    //             const data = await axios.get
    //                 (`http://localhost:3000/api/v1/product/get-allproduct`);
    //             setLocalProduct(data.data.data);

    //         } catch (error) {
    //             console.log(error);


    //         }
    //     }
    //     useEffect(() => {
    //         fetchProduct()

    //     }, [])
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
                            localProduct.map((items) =>
                            (
                                <ProductCard items={items} />
                            )
                            )
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
