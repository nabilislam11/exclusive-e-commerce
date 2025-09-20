import React from 'react'
import { CiHeart } from 'react-icons/ci';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { LuEye } from 'react-icons/lu';




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
const ProductCard = ({ items }) => {
    return (

        <div className=" px-2 pt-[60px] ">
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
    )
}

export default ProductCard
