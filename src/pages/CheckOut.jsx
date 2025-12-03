import React, { useState } from 'react'
import Container from '../components/container/Container'

const CheckOut = () => {
    const handleChange = (e) => {
        setCheckoutDetails({
            ...checkoutDetails, [e.target.name]: e.target.value
        })
    }
    const [checkoutDetails, setCheckoutDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        city: "",
        postCode: "",
    })
    const handlesubmit = () => {
        console.log(checkoutDetails);

    }
    return (
        <>
            <Container>


                <div className='w-[50%] py-[80px] '>
                    <div className=" pb-[80px] flex gap-x-[12px]">
                        <a className='font-secondary  font-normal text-[14px] leading-[21px]' href="">Account</a>
                        <p>/</p>
                        <a className='font-secondary  font-normal text-[14px] leading-[21px]' href="">Product</a>
                        <p>/</p>
                        <a className='font-secondary  font-normal text-[14px] leading-[21px]' href="">View Cart</a>
                        <p>/</p>
                        <a className='font-secondary  font-normal text-[14px] leading-[21px]' href="">CheckOut</a>
                    </div>
                    {/* <div className="flex justify-between  px-[40px] py-[24px] shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] rounded-[4px] ">
                        <p className='font-secondary  font-normal text-[14px] leading-[21px]'>Product</p>
                        <p className='font-secondary  font-normal text-[14px] leading-[21px]'>Price</p>
                        <p className='font-secondary  font-normal text-[14px] leading-[21px]'>Quantity</p>
                        <p className='font-secondary  font-normal text-[14px] leading-[21px]'>Subtotal</p>
                    </div> */}
                    <div className="">Billing Details</div>
                    <div className="">
                        <label>First Name*</label> <br></br>
                        <input
                            name='firstName'
                            value={setCheckoutDetails.firstName}
                            onChange={handleChange}
                            type="text" className='py-[10px]  px-[10px]  rounded bg-gray-100 border-1  border-gray-300  ' />
                    </div>
                    <div className="">
                        <label>Last Name*</label> <br></br>
                        <input
                            name='lastName'
                            value={setCheckoutDetails.lastName}
                            onChange={handleChange}
                            type="text" className='py-[10px]  px-[10px]  rounded bg-gray-100 border-1  border-gray-300  ' />
                    </div>
                    <div className="">
                        <label>Email*</label> <br></br>
                        <input
                            name='email'
                            value={setCheckoutDetails.email}
                            onChange={handleChange}
                            type="text" className='py-[10px]  px-[10px]  rounded bg-gray-100 border-1  border-gray-300  ' />
                    </div>
                    <div className="">
                        <label>Phone Number*</label> <br></br>
                        <input
                            name='phoneNumber'
                            value={setCheckoutDetails.phoneNumber}
                            onChange={handleChange}
                            type="text" className='py-[10px]  px-[10px]  rounded bg-gray-100 border-1  border-gray-300  ' />
                    </div>
                    <div className="">
                        <label>address*</label> <br></br>
                        <input
                            name='address'
                            value={setCheckoutDetails.lastName}
                            onChange={handleChange}
                            type="text" className='py-[10px]  px-[10px]  rounded bg-gray-100 border-1  border-gray-300  ' />
                    </div>
                    <div className="">
                        <label>city*</label> <br></br>
                        <input
                            name='city'
                            value={setCheckoutDetails.city}
                            onChange={handleChange}
                            type="text" className='py-[10px]  px-[10px]  rounded bg-gray-100 border-1  border-gray-300  ' />
                    </div>
                    <div className="">
                        <label>postCode*</label> <br></br>
                        <input
                            name='postCode'
                            value={setCheckoutDetails.postCode}
                            onChange={handleChange}
                            type="text" className='py-[10px]  px-[10px]  rounded bg-gray-100 border-1  border-gray-300  ' />
                    </div>
                    <div onClick={handlesubmit} className=" text-center ms-auto text-white bg-black py-[10px] px-[15px] rounded-[10px] font-medium  font-primary  ">Check out</div>


                </div>
            </Container>
        </>
    )
}

export default CheckOut
