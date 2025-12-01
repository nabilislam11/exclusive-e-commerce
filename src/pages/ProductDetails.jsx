import React, { useEffect, useRef, useState } from 'react'
import Container from '../components/container/Container'
import todays1 from '../assets/todays1.png'

import { FiMinus, FiPlus, FiRefreshCcw, FiRefreshCw } from 'react-icons/fi'
import { CiDeliveryTruck, CiHeart } from 'react-icons/ci'
import axios from 'axios'
import { useParams } from 'react-router'
import { RatingStars } from '../components/local/ProductCard'
import { useDispatch } from 'react-redux'
import { cartDetails } from '../slice/cartSlice'


const ProductDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [product, setProduct] = useState([]);
    const fetchProduct = async () => {
        try {
            const { data } = await axios.get
                (`http://localhost:3000/api/v1/product/get-singleproduct/${id}`);
            setProduct(data.data)




        } catch (error) {
            console.log(error);
            console.log(error.message);



        }
    }
    const handleBuy = () => {
        console.log("buying", product)
        dispatch(cartDetails(product))


    }
    useEffect(() => {
        fetchProduct()

    }, [])
    console.log(product);


    return (
        <div>
            <Container>
                <div className=' '>
                    {/* top part */}
                    <div className="py-[80px] flex gap-x-[12px]">
                        <a className='font-secondary  font-normal text-[14px] leading-[21px]' href="">Home</a>
                        <p>/</p>
                        <a className='font-secondary  font-normal text-[14px] leading-[21px]' href="">Type</a>
                        <p>/</p>
                        <a className='font-secondary  font-normal text-[14px] leading-[21px]' href="">{product.name}</a>

                    </div>
                    {/* img part */}
                    <div className="flex justify-around gap-x-[30px] ">

                        <div className="w-[50%] flex justify-between items-start ">


                            {/* side img */}
                            <div className=" flex flex-col gap-y-4">
                                <img className='w-[170px]  h-[138px] object-cover rounded-4  ' src={product.image} alt="" />
                                <img className='w-[170px]  h-[138px] object-cover rounded-4  ' src={product.image} alt="" />
                                <img className='w-[170px]  h-[138px] object-cover rounded-4  ' src={product.image} alt="" />
                                <img className='w-[170px]  h-[138px] object-cover rounded-4  ' src={product.image} alt="" />
                            </div>
                            {/* main img */}

                            <img className='w-[500px]  ' src={product.image} alt="" />

                        </div>
                        {/* details part */}
                        <div className="w-[30%]">
                            <div className="flex flex-col gap-y-4">
                                <h2 className='font-semibold font-primary text-[24px] leading-6  tracking-[3%]   '>{product.name}</h2>
                                <RatingStars rating={product.rating} />
                            </div>
                            <div className=" flex flex-col gap-y-6">
                                <p className='text-[#7D8184] font-secondary font-medium  text-[16px] leading-[24px'>${product.price}</p>
                                <p className='font-normal  font-secondary  text-[14px] leading-[21px]'>
                                    {product.description}
                                </p>
                                <div className="w-[400px] h-[1px] bg-black "></div>
                                <div className=" flex gap-x-6 ">
                                    <p className='font-normal  font-secondary  text-[20px] leading-[20px] tracking-[3%]'>Colours:</p>
                                    <div className="flex gap-x-2">
                                        <button className='w-[20px] h-[20px] rounded-full bg-red-500' ></button>
                                        <button className='w-[20px] h-[20px] rounded-full bg-blue-500' ></button>
                                    </div>
                                </div>
                                <div className=" flex gap-x-4 items-center ">
                                    <p className='font-normal font-primary text-[20px] leading-[20px] tracking-[3%] pr-[8px]'>Size:</p>
                                    <a className=' py-[6px] px-[9px] border  rounded-[4px]' href="">S</a>
                                    <a className=' py-[6px] px-[9px] border  rounded-[4px]' href="">M</a>
                                    <a className=' py-[6px] px-[9px] border  rounded-[4px]' href="">L</a>
                                    <a className=' py-[6px] px-[9px] border  rounded-[4px]' href="">XL</a>
                                </div>
                                {/* quantity */}
                                <div className="flex justify-between gap-x-4 items-center ">
                                    <div className=" flex border border-gray-400 rounded-[4px] justify-between items-center">
                                        <a className='py-2 px-[7px] ' href=""><FiMinus size={21} /></a>
                                        <div className="h-[44px] w-[1px] bg-gray-400 "></div>
                                        <p className='px-[34px] py-[8px] font-medium font-secondary text-[20px] leading-7  '>2</p>
                                        <a className='bg-red-500 text-white py-[10px] px-[9px] ' href=""><FiPlus size={24} /></a>
                                    </div>
                                    <button onClick={handleBuy} className='py-[10px] px-[48px] bg-red-500 rounded-[4px]'>Buy Now</button>
                                    <div className=" border py-[11px] px-[10px]  rounded-[4px] ">
                                        <a href="">  <CiHeart size={25} /></a>
                                    </div>
                                </div>
                                {/* delevary pupose */}
                                <div className="">
                                    <div className="flex items-center gap-x-[16px]">
                                        <a href=""><CiDeliveryTruck size={35} /></a>
                                        <div className="flex flex-col gap-y-2">
                                            <p className='font-medium   font-secondary  text-[16px] leading-[24px]'>Free Delivery</p>
                                            <p className='font-medium   font-secondary  text-[12px] leading-[18px]'>Enter your postal code for Delivery Availability</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center  gap-x-[16px]">
                                        <a href=""><FiRefreshCcw size={35} /></a>
                                        <div className="flex flex-col gap-y-2">
                                            <p className='font-medium   font-secondary  text-[16px] leading-[24px]'>Return Delivery</p>
                                            <p className='font-medium   font-secondary  text-[12px] leading-[18px]'>Free 30 Days Delivery Returns. Details</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProductDetails

// import React, { useRef, useState } from 'react'
// import Container from '../components/container/Container'
// import todays1 from '../assets/todays1.png'

// const ProductDetails = () => {
//     const imgRef = useRef(null);
//     const zoomRef = useRef(null);

//     const [showLens, setShowLens] = useState(false);
//     const [lensPos, setLensPos] = useState({ x: 0, y: 0 });

//     const lensSize = 180;

//     const handleMove = (e) => {
//         const bounds = imgRef.current.getBoundingClientRect();

//         let x = e.clientX - bounds.left - lensSize / 2;
//         let y = e.clientY - bounds.top - lensSize / 2;

//         x = Math.max(0, Math.min(x, bounds.width - lensSize));
//         y = Math.max(0, Math.min(y, bounds.height - lensSize));

//         setLensPos({ x, y });

//         zoomRef.current.style.transform = `
//             translate(${-x}px, ${-y}px)
//             scale(2.2)
//         `;

//         setShowLens(true);
//     };

//     const handleLeave = () => {
//         setShowLens(false);
//     };

//     return (
//         <div>
//             <Container>
//                 {/* top part */}
//                 <div className="py-[80px] flex gap-x-[12px]">
//                     <a className='font-secondary font-normal text-[14px] leading-[21px]' href="">Home</a>
//                     <p>/</p>
//                     <a className='font-secondary font-normal text-[14px] leading-[21px]' href="">Type</a>
//                     <p>/</p>
//                     <a className='font-secondary font-normal text-[14px] leading-[21px]' href="">product name</a>
//                 </div>

//                 {/* img part */}
//                 <div className="flex justify-around gap-x-[30px]">

//                     <div className="w-[50%] flex justify-between items-start">

//                         {/* left side small images */}
//                         <div className="flex flex-col gap-y-4">
//                             <img className='w-[170px] h-[138px] object-cover rounded-4' src={todays1} alt="" />
//                             <img className='w-[170px] h-[138px] object-cover rounded-4' src={todays1} alt="" />
//                             <img className='w-[170px] h-[138px] object-cover rounded-4' src={todays1} alt="" />
//                             <img className='w-[170px] h-[138px] object-cover rounded-4' src={todays1} alt="" />
//                         </div>

//                         {/* main image + lens */}
//                         <div
//                             className="relative w-[420px] h-[420px] border rounded overflow-hidden"
//                             onMouseMove={handleMove}
//                             onMouseLeave={handleLeave}
//                         >
//                             <img
//                                 ref={imgRef}
//                                 src={todays1}
//                                 className="w-full h-full object-cover"
//                                 alt="zoom"
//                             />

//                             {showLens && (
//                                 <div
//                                     className="absolute bg-blue-300/30 border border-blue-500 rounded"
//                                     style={{
//                                         width: lensSize,
//                                         height: lensSize,
//                                         top: lensPos.y,
//                                         left: lensPos.x,
//                                     }}
//                                 ></div>
//                             )}
//                         </div>

//                         {/* zoomed image right side */}
//                         <div className="w-[420px] h-[420px] border rounded overflow-hidden ml-5">
//                             <img
//                                 ref={zoomRef}
//                                 src={todays1}
//                                 className="w-full h-full object-cover"
//                                 alt="zoomed"
//                                 style={{
//                                     transformOrigin: "top left",
//                                 }}
//                             />
//                         </div>

//                     </div>

//                     {/* details part */}
//                     <div className="w-[30%]">
//                         <div className="flex flex-col gap-y-4">
//                             <h2 className='font-semibold font-primary text-[24px] leading-6 tracking-[3%]'>
//                                 Havic HV G-92 Gamepad
//                             </h2>
//                             <a href="">rating</a>
//                         </div>

//                         <div className="flex flex-col gap-y-6">
//                             <p className='text-[#7D8184] font-secondary font-medium text-[16px] leading-[24px]'>{`$192`}</p>
//                             <p className='font-normal font-secondary text-[14px] leading-[21px]'>
//                                 PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install.
//                             </p>

//                             <div className="flex gap-x-6">
//                                 <p className='font-normal font-secondary text-[20px] tracking-[3%]'>Colours:</p>
//                                 <button className='w-[20px] h-[20px] rounded-full bg-red-500'></button>
//                             </div>

//                             <div className="flex items-center gap-x-4">
//                                 <p className='font-normal font-primary text-[20px] tracking-[3%] pl-[8px]'>Size:</p>
//                                 <a className='py-[6px] px-[7px] border rounded-[4px]' href="">S</a>
//                                 <a className='py-[6px] px-[7px] border rounded-[4px]' href="">M</a>
//                                 <a className='py-[6px] px-[7px] border rounded-[4px]' href="">L</a>
//                                 <a className='py-[6px] px-[7px] border rounded-[4px]' href="">XL</a>
//                             </div>

//                         </div>
//                     </div>

//                 </div>

//             </Container>
//         </div>
//     )
// }

// export default ProductDetails



