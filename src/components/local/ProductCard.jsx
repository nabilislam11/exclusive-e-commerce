import React from 'react'
import { CiHeart } from 'react-icons/ci';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { LuEye } from 'react-icons/lu';
import { CiStar } from "react-icons/ci"




const RatingStars = ({ rating }) => {
    const fullRating = Math.floor(rating) || 0
    const halfRating = (rating % 1 >= 0.5)
    const emptyRating = 5 - fullRating - (halfRating ? 1 : 0)
    console.log(fullRating, halfRating, emptyRating);
    console.log(rating);



    return (
        <div className="flex items-center">
            {
                [...Array(fullRating)].map(() => (
                    <FaStar className='text-amber-500' />
                ))
            }
            {
                halfRating && <FaStarHalfAlt className='text-amber-500' />
            }
            {
                [...Array(emptyRating)].map(() => (
                    <CiStar className='' />
                ))
            }
            {/* ({rating}) */}

            {/* {Array.from({ length: 5 }).map((_, i) => {
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
            })}{rating} */}
        </div>
    );
};
const ProductCard = ({ items }) => {
    console.log(items);

    return (

        <div className=" w-[270px] px-2 pt-[60px] mx-auto  ">
            <div className="w-full h-[355px] relative group  ">
                <div className="relative group overflow-hidden bg-[#f5f5f5] group hover flex justify-center text-transparent  ">
                    <img className='w-full h-[250px] py-[30px] px-[40px] object-cover transition-all duration-250 object-center group-hover:scale-120  ' src={items.image} alt="" />
                    <button className="absolute left-0 bottom-[-40px] bg-black/85 py-2 w-full text-white font-bold group-hover:bottom-0 transition-all duration-300">
                        Add To Cart
                    </button>
                </div>
                <div className="flex flex-col gap-y-[8px] absolute top-[12px] right-[12px]">
                    <div className="flex items-center justify-center p-[5px] bg-white  rounded-full ">
                        <CiHeart size={20} />
                    </div>
                    <div className="flex items-center justify-center p-[5px] bg-white rounded-full  ">
                        <LuEye />
                    </div>
                </div>
                <p className='absolute top-[12px] left-[12px]  py-[4px] px-[12px] bg-red-500 text-white rounded  '>{items?.discount ? `${items.discount}%` : ""}</p>
                <h3 className='pt-[16px] pb-[8px] font-secondary font-medium  text-[16px] leading-[24px]'>{items.name}</h3>
                <div className="flex items-center gap-x-[12px] pb-[8px] ">
                    <p className='text-red-500  font-secondary font-medium  text-[16px] leading-[24px]'>{items.newPrice}</p>
                    <p className='text-[#7D8184] font-secondary font-medium  text-[16px] leading-[24px] '>{items.price}</p>
                </div>
                <div className="flex items-center mt-1">
                    <RatingStars rating={items.rating} />
                    <span className="ml-2 text-gray-600">({items.rating})</span>
                </div>

            </div>
        </div>
    )
}

export default ProductCard
