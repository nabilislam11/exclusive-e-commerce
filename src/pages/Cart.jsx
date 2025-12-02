import React, { useState } from 'react'
import Container from '../components/container/Container'
import { CgArrowsScrollV } from 'react-icons/cg'
import todays1 from '../assets/todays2.png'
import { useSelector } from 'react-redux';
import { AiOutlineMinus } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { useDispatch } from 'react-redux'
import { cartQuantity } from '../slice/cartSlice';

const Cart = () => {
    const dispatch = useDispatch()
    const [couponText, setCouponText] = useState();
    const [discount, setDiscount] = useState(0);
    const product = useSelector((state) => state.cartInfo.value)
    console.log(product);
    const grandTotal = product.reduce((prev, current) => prev + (current.price * current.cartQun), 0)
    const total = grandTotal - discount

    const handleCoupon = () => {
        console.log(couponText);
        if (couponText == "nabil10") {
            setDiscount(grandTotal * 0.1)

        } else if (couponText == "hamja50") {
            setDiscount(grandTotal * 0.50)
        }

    }
    const handleIncrement = (item) => {
        dispatch(cartQuantity({ ...item, type: "increment" }))
    }
    const handleDecrement = (item) => {


        dispatch(cartQuantity({ ...item, type: "decrement" }))
    }
    return (
        <>
            <Container>
                <div className='py-[80px] '>
                    <div className=" pb-[80px] flex gap-x-[12px]">
                        <a className='font-secondary  font-normal text-[14px] leading-[21px]' href="">Home</a>
                        <p>/</p>
                        <a className='font-secondary  font-normal text-[14px] leading-[21px]' href="">Cart</a>
                    </div>
                    <div className="flex justify-between  px-[40px] py-[24px] shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] rounded-[4px] ">
                        <p className='font-secondary  font-normal text-[14px] leading-[21px]'>Product</p>
                        <p className='font-secondary  font-normal text-[14px] leading-[21px]'>Price</p>
                        <p className='font-secondary  font-normal text-[14px] leading-[21px]'>Quantity</p>
                        <p className='font-secondary  font-normal text-[14px] leading-[21px]'>Subtotal</p>
                    </div>

                    {
                        product.map((item) => (
                            <div className="">

                                <div className="flex justify-between items-center px-[40px] py-[24px] shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] rounded-[4px] my-[40px] ">
                                    <div className="flex gap-x-[20px] items-center ">
                                        <img src={item.image} alt="" className="w-20 h-20 rounded-md object-cover" />
                                        {/* <p className='font-secondary  font-normal text-[16px] leading-[24px]'>${item.price}</p> */}
                                        <p className='font-secondary  font-normal text-[14px] leading-[21px]'>{item.name}</p>
                                    </div>
                                    <p className='font-secondary  font-normal text-[16px] leading-[24px]'>${item.price}</p>


                                    <div className="flex gap-x-[16px] items-center border-2  rounded">

                                        <button onClick={() => handleDecrement(item)} className="py-[7px] px-[7px]" > <AiOutlineMinus size={15} /></button>
                                        <p className='font-secondary  font-normal text-[14px] leading-[21px]'>{item?.cartQun}</p>
                                        <button onClick={() => handleIncrement(item)} className="bg-red-500 py-[7px] px-[7px] "><FiPlus /></button>
                                    </div>
                                    <p className='font-secondary  font-normal text-[16px] leading-[24px]'>${item?.price * item?.cartQun}</p>
                                </div>

                            </div>
                        ))
                    }
                    <div className="flex justify-between items-center ">

                        <div className="w-[50%] flex">
                            <input onChange={(e) => setCouponText(e.target.value)} className=" py-[5px] px-[10px] rounded font-medium  mr-2 " type="text" placeholder='Enter Coupon' />
                            <button onClick={handleCoupon} className=' bg-black font-medium  text-white font-primary py-[5px] px-[10px] rounded  '>Apply Coupon</button>
                        </div>
                        <div className="w-[50%] text-end px-[40px] py-[24px] rounded-[4px] my-[40px] ">
                            GrandTotal : {grandTotal}
                        </div>

                    </div>
                    <div className=" items-end  text-end px-[40px] py-[24px] rounded-[4px] my-[40px] ">
                        Discount : {discount}
                    </div>
                    <div className=" text-end px-[40px] py-[24px] rounded-[4px] my-[40px] ">
                        Total : {total}
                    </div>
                    <div className=" w-[50%] ms-auto flex  justify-center items-center  text-white bg-black py-[10px] px-[15px] rounded-[10px] font-medium  font-primary  ">Ceack out</div>


                </div>

            </Container >
        </>
    )
}

export default Cart
