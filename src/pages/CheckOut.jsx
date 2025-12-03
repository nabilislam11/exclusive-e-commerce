

import React, { useState } from 'react'
import Container from '../components/container/Container'
import { useSelector } from 'react-redux';

const CheckOut = () => {
    const product = useSelector((state) => state.cartInfo.value)
    console.log(product);

    const [checkoutDetails, setCheckoutDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        city: "",
        postCode: "",
    })

    const handleChange = (e) => {
        setCheckoutDetails({
            ...checkoutDetails, [e.target.name]: e.target.value
        });
    }

    const handleSubmit = () => {
        console.log(checkoutDetails)
    }
    const [error, setError] = useState("");
    return (
        <>
            <Container>
                <div className="w-full flex py-[80px] gap-10">

                    {/* LEFT SIDE - FORM */}
                    <div className="w-[60%] bg-white p-8 rounded-lg shadow-md border">
                        <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>

                        {/* FORM GRID */}
                        <div className="grid grid-cols-2 gap-5">

                            <div>
                                <label className="font-medium">First Name*</label>
                                <input
                                    name='firstName'
                                    value={checkoutDetails.firstName}
                                    onChange={handleChange}
                                    type="text"
                                    className='w-full py-2 px-3 rounded bg-gray-100 border'
                                />
                            </div>

                            <div>
                                <label className="font-medium">Last Name*</label>
                                <input
                                    name='lastName'
                                    value={checkoutDetails.lastName}
                                    onChange={handleChange}
                                    type="text"
                                    className='w-full py-2 px-3 rounded bg-gray-100 border'
                                />
                            </div>

                            <div>
                                <label className="font-medium">Email*</label>
                                <input
                                    name='email'
                                    value={checkoutDetails.email}
                                    onChange={handleChange}
                                    type="text"
                                    className='w-full py-2 px-3 rounded bg-gray-100 border'
                                />
                            </div>

                            <div>
                                <label className="font-medium">Phone Number*</label>
                                <input
                                    name='phoneNumber'
                                    value={checkoutDetails.phoneNumber}
                                    onChange={handleChange}
                                    type="text"
                                    className='w-full py-2 px-3 rounded bg-gray-100 border'
                                />
                            </div>

                            <div className="col-span-2">
                                <label className="font-medium">Address*</label>
                                <input
                                    name='address'
                                    value={checkoutDetails.address}
                                    onChange={handleChange}
                                    type="text"
                                    className='w-full py-2 px-3 rounded bg-gray-100 border'
                                />
                            </div>

                            <div>
                                <label className="font-medium">City*</label>
                                <input
                                    name='city'
                                    value={checkoutDetails.city}
                                    onChange={handleChange}
                                    type="text"
                                    className='w-full py-2 px-3 rounded bg-gray-100 border'
                                />
                            </div>

                            <div>
                                <label className="font-medium">Post Code*</label>
                                <input
                                    name='postCode'
                                    value={checkoutDetails.postCode}
                                    onChange={handleChange}
                                    type="text"
                                    className='w-full py-2 px-3 rounded bg-gray-100 border'
                                />
                            </div>

                        </div>

                        <button
                            onClick={handleSubmit}
                            className="mt-6 w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 duration-200"
                        >
                            Confirm Checkout
                        </button>
                    </div>

                    {/* RIGHT SIDE - PRODUCT SUMMARY */}
                    <div className="w-[40%] bg-white p-6 rounded-lg shadow-md border">
                        <h2 className="text-xl font-semibold mb-5">Order Summary</h2>

                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b bg-gray-100">
                                    <th className="p-2 text-left">Image</th>
                                    <th className="p-2 text-left">Name</th>
                                    <th className="p-2 text-left">Price</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    product.map((item, index) => (
                                        <tr key={index} className="border-b">
                                            <td className="p-2">
                                                <img src={item.image} className="w-14 h-14 object-cover rounded" />
                                            </td>
                                            <td className="p-2">{item.name}</td>
                                            <td className="p-2 font-semibold">${item.price}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                    </div>

                </div>
            </Container>
        </>
    )
}

export default CheckOut



// import React, { useState } from 'react'
// import Container from '../components/container/Container'
// import { useSelector } from 'react-redux';

// const CheckOut = () => {
//     const product = useSelector((state) => state.cartInfo.value)
//     console.log(product);

//     const handleChange = (e) => {
//         setCheckoutDetails({
//             ...checkoutDetails, [e.target.name]: e.target.value
//         })
//     }
//     const [checkoutDetails, setCheckoutDetails] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phoneNumber: "",
//         address: "",
//         city: "",
//         postCode: "",
//     })
//     const handlesubmit = () => {
//         console.log(checkoutDetails);

//     }
//     return (
//         <>
//             <Container>


//                 <div className='w-[50%] py-[80px] '>
//                     <div className=" pb-[80px] flex gap-x-[12px]">
//                         <a className='font-secondary  font-normal text-[14px] leading-[21px]' href="">Account</a>
//                         <p>/</p>
//                         <a className='font-secondary  font-normal text-[14px] leading-[21px]' href="">Product</a>
//                         <p>/</p>
//                         <a className='font-secondary  font-normal text-[14px] leading-[21px]' href="">View Cart</a>
//                         <p>/</p>
//                         <a className='font-secondary  font-normal text-[14px] leading-[21px]' href="">CheckOut</a>
//                     </div>
//                     {/* <div className="flex justify-between  px-[40px] py-[24px] shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] rounded-[4px] ">
//                         <p className='font-secondary  font-normal text-[14px] leading-[21px]'>Product</p>
//                         <p className='font-secondary  font-normal text-[14px] leading-[21px]'>Price</p>
//                         <p className='font-secondary  font-normal text-[14px] leading-[21px]'>Quantity</p>
//                         <p className='font-secondary  font-normal text-[14px] leading-[21px]'>Subtotal</p>
//                     </div> */}
//                     <div className="flex gap-x-5">
//                         <div className="">
//                             <div className="">Billing Details</div>
//                             <div className="">
//                                 <label>First Name*</label> <br></br>
//                                 <input
//                                     name='firstName'
//                                     value={setCheckoutDetails.firstName}
//                                     onChange={handleChange}
//                                     type="text" className='py-[10px]  px-[10px]  rounded bg-gray-100 border-1  border-gray-300  ' />
//                             </div>
//                             <div className="">
//                                 <label>Last Name*</label> <br></br>
//                                 <input
//                                     name='lastName'
//                                     value={setCheckoutDetails.lastName}
//                                     onChange={handleChange}
//                                     type="text" className='py-[10px]  px-[10px]  rounded bg-gray-100 border-1  border-gray-300  ' />
//                             </div>
//                             <div className="">
//                                 <label>Email*</label> <br></br>
//                                 <input
//                                     name='email'
//                                     value={setCheckoutDetails.email}
//                                     onChange={handleChange}
//                                     type="text" className='py-[10px]  px-[10px]  rounded bg-gray-100 border-1  border-gray-300  ' />
//                             </div>
//                             <div className="">
//                                 <label>Phone Number*</label> <br></br>
//                                 <input
//                                     name='phoneNumber'
//                                     value={setCheckoutDetails.phoneNumber}
//                                     onChange={handleChange}
//                                     type="text" className='py-[10px]  px-[10px]  rounded bg-gray-100 border-1  border-gray-300  ' />
//                             </div>
//                             <div className="">
//                                 <label>address*</label> <br></br>
//                                 <input
//                                     name='address'
//                                     value={setCheckoutDetails.lastName}
//                                     onChange={handleChange}
//                                     type="text" className='py-[10px]  px-[10px]  rounded bg-gray-100 border-1  border-gray-300  ' />
//                             </div>
//                             <div className="">
//                                 <label>city*</label> <br></br>
//                                 <input
//                                     name='city'
//                                     value={setCheckoutDetails.city}
//                                     onChange={handleChange}
//                                     type="text" className='py-[10px]  px-[10px]  rounded bg-gray-100 border-1  border-gray-300  ' />
//                             </div>
//                             <div className="">
//                                 <label>postCode*</label> <br></br>
//                                 <input
//                                     name='postCode'
//                                     value={setCheckoutDetails.postCode}
//                                     onChange={handleChange}
//                                     type="text" className='py-[10px]  px-[10px]  rounded bg-gray-100 border-1  border-gray-300  ' />
//                             </div>
//                             <div onClick={handlesubmit} className=" text-center ms-auto text-white bg-black py-[10px] px-[15px] rounded-[10px] font-medium  font-primary  ">Check out</div>

//                         </div>
//                         <div className="">
//                             {
//                                 product.map((item) => (
//                                     <div className="">

//                                         <img src={item.image} alt="" />
//                                         <p>{item.name}</p>
//                                     </div>
//                                 ))
//                             }
//                         </div>
//                     </div>

//                 </div>
//             </Container>
//         </>
//     )
// }

// export default CheckOut
