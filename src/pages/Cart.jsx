import React, { useState } from 'react'
import Container from '../components/container/Container'
import { CgArrowsScrollV } from 'react-icons/cg'
import todays1 from '../assets/todays2.png'
import { useSelector } from 'react-redux';
import { AiOutlineMinus } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { useDispatch } from 'react-redux'
import { cartQuantity } from '../slice/cartSlice';
import { Link } from 'react-router';
import CheackOut from './CheckOut';
import "../cartscroll.css"
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
                <div className="py-20">
                    {/* Breadcrumb */}
                    <div className="pb-10 flex gap-2 text-sm text-gray-600">
                        <Link className="hover:text-black">Home</Link>
                        <span>/</span>
                        <span className="text-black">Cart</span>
                    </div>

                    {/* Header Row */}
                    <div className="grid grid-cols-4 font-medium text-gray-700 px-6 py-4 border-b">
                        <p>Product</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </div>

                    {/* Product List */}
                    <div className="mt-4 space-y-6 border-0 shadow-[0px_1px_13px_0px_rgba(0,0,0,0.08)] rounded-[5px] overflow-y-scroll  h-[500px] p-5 cart-scroll ">
                        {product.map((item) => (
                            <div
                                key={item.id}
                                className="grid grid-cols-4 items-center px-6 py-4 border rounded-xl shadow-sm hover:shadow-md transition"
                            >
                                {/* Product */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.image}
                                        className="w-20 h-20 rounded-lg object-cover"
                                    />
                                    <p className="text-gray-800 text-sm font-medium">
                                        {item.name}
                                    </p>
                                </div>

                                {/* Price */}
                                <p className="text-gray-700 font-semibold">
                                    ${item.price}
                                </p>

                                {/* Quantity */}
                                <div className="flex items-center border rounded-lg w-fit mx-auto">
                                    <button
                                        onClick={() => handleDecrement(item)}
                                        className="px-3 py-2 hover:bg-gray-100 rounded-l-lg"
                                    >
                                        <AiOutlineMinus size={14} />
                                    </button>
                                    <p className="px-4">{item.cartQun}</p>
                                    <button
                                        onClick={() => handleIncrement(item)}
                                        className="px-3 py-2 bg-black text-white hover:bg-gray-800 rounded-r-lg"
                                    >
                                        <FiPlus size={14} />
                                    </button>
                                </div>

                                {/* Subtotal */}
                                <p className="text-gray-800 font-semibold">
                                    ${item.price * item.cartQun}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Coupon + Summary */}
                    <div className="mt-12 grid grid-cols-2 gap-10">
                        {/* Coupon */}
                        <div className="">
                            <p className="font-medium text-gray-800 mb-2">Have a coupon?</p>
                            <div className="flex gap-3">
                                <input
                                    onChange={(e) => setCouponText(e.target.value)}
                                    className="border rounded-lg px-4 py-2 w-2/3"
                                    type="text"
                                    placeholder="Enter Coupon"
                                />
                                <button
                                    onClick={handleCoupon}
                                    className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800"
                                >
                                    Apply
                                </button>
                            </div>
                        </div>

                        {/* Summary */}
                        <div className="p-6 border rounded-xl shadow-md bg-white space-y-3">
                            <div className="flex justify-between text-gray-700">
                                <p>Grand Total</p>
                                <p className="font-semibold">${grandTotal}</p>
                            </div>
                            <div className="flex justify-between text-gray-700">
                                <p>Discount</p>
                                <p className="font-semibold">-${discount}</p>
                            </div>
                            <hr />
                            <div className="flex justify-between text-xl font-bold text-gray-900">
                                <p>Total</p>
                                <p>${total}</p>
                            </div>

                            <Link
                                to="/checkout"
                                className="mt-4 block text-center bg-black text-white py-3 rounded-xl hover:bg-gray-800 font-medium"
                            >
                                Proceed to Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>


        </>
        // <>
        //     <Container>
        //         <div className='py-[80px] '>
        //             <div className=" pb-[80px] flex gap-x-[12px]">
        //                 <a className='font-secondary  font-normal text-[14px] leading-[21px]' href="">Home</a>
        //                 <p>/</p>
        //                 <a className='font-secondary  font-normal text-[14px] leading-[21px]' href="">Cart</a>
        //             </div>
        //             <div className="flex justify-between  px-[40px] py-[24px] shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] rounded-[4px] ">
        //                 <p className='font-secondary  font-normal text-[14px] leading-[21px]'>Product</p>
        //                 <p className='font-secondary  font-normal text-[14px] leading-[21px]'>Price</p>
        //                 <p className='font-secondary  font-normal text-[14px] leading-[21px]'>Quantity</p>
        //                 <p className='font-secondary  font-normal text-[14px] leading-[21px]'>Subtotal</p>
        //             </div>

        //             {
        //                 product.map((item) => (
        //                     <div className="">

        //                         <div className="flex justify-between items-center px-[40px] py-[24px] shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] rounded-[4px] my-[40px] ">
        //                             <div className="flex gap-x-[20px] items-center ">
        //                                 <img src={item.image} alt="" className="w-20 h-20 rounded-md object-cover" />
        //                                 {/* <p className='font-secondary  font-normal text-[16px] leading-[24px]'>${item.price}</p> */}
        //                                 <p className='font-secondary  font-normal text-[14px] leading-[21px]'>{item.name}</p>
        //                             </div>
        //                             <p className='font-secondary  font-normal text-[16px] leading-[24px]'>${item.price}</p>


        //                             <div className="flex gap-x-[16px] items-center border-2  rounded">

        //                                 <button onClick={() => handleDecrement(item)} className="py-[7px] px-[7px]" > <AiOutlineMinus size={15} /></button>
        //                                 <p className='font-secondary  font-normal text-[14px] leading-[21px]'>{item?.cartQun}</p>
        //                                 <button onClick={() => handleIncrement(item)} className="bg-red-500 py-[7px] px-[7px] "><FiPlus /></button>
        //                             </div>
        //                             <p className='font-secondary  font-normal text-[16px] leading-[24px]'>${item?.price * item?.cartQun}</p>
        //                         </div>

        //                     </div>
        //                 ))
        //             }
        //             <div className="flex justify-between items-center ">

        //                 <div className="w-[50%] flex">
        //                     <input onChange={(e) => setCouponText(e.target.value)} className=" py-[5px] px-[10px] rounded font-medium  mr-2 " type="text" placeholder='Enter Coupon' />
        //                     <button onClick={handleCoupon} className=' bg-black font-medium  text-white font-primary py-[5px] px-[10px] rounded  '>Apply Coupon</button>
        //                 </div>
        //                 <div className="w-[50%] text-end px-[40px] py-[24px] rounded-[4px] my-[40px] ">
        //                     GrandTotal : {grandTotal}
        //                 </div>

        //             </div>
        //             <div className=" items-end  text-end px-[40px] py-[24px] rounded-[4px] my-[40px] ">
        //                 Discount : {discount}
        //             </div>
        //             <div className=" text-end px-[40px] py-[24px] rounded-[4px] my-[40px] ">
        //                 Total : {total}
        //             </div>
        //             <Link to={"/checkout"} className=" w-[50%] ms-auto flex  justify-center items-center  text-white bg-black py-[10px] px-[15px] rounded-[10px] font-medium  font-primary  ">Check out</Link>


        //         </div>

        //     </Container >
        // </>
    )
}

export default Cart
