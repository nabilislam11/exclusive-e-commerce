import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import axios from 'axios';
import Container from '../components/container/Container';
import ProductCard from '../components/local/ProductCard';


const AllProduct = () => {
    const [product, setProduct] = useState([]);
    const [totalData, setTotalData] = useState(0)
    const [currentpage, setCurrentPage] = useState(1) || 1
    const [productPerPage, setProductPerPage] = useState(2)
    const fetchProduct = async () => {
        try {
            //("http://localhost:3000/api/v1/product/get-allproduct")
            const data = await axios.get
                (`http://localhost:3000/api/v1/product/get-allproduct?page=${currentpage}&size=${productPerPage}`);
            setTotalData(data.data.total);
            console.log("Backend data:", data);
            setProduct(data.data.data);



        } catch (error) {
            console.log(error);


        }
    }
    useEffect(() => {
        fetchProduct()

    }, [currentpage, productPerPage])

    const pageArr = [...Array(Math.ceil(totalData / productPerPage)).keys()].map((item) => item + 1)

    const productCategory = [
        { name: "Woman's Fashion" },
        { name: "Men's Fashion" },
        { name: "Electronics" },
        { name: "Home & Lifestyle" },
        { name: "Medicine" },
        { name: "Sports & Outdoor" },
        { name: "Baby's & Toys" },
        { name: "Groceries & Pets" },
        { name: "Health & Beauty" },

    ]
    const productColor = [
        { name: "color1" },
        {
            name: "color2"
        },
        { name: "color3" },

    ]
    return (
        <>
            <Container>

                <div className="pt-2.5 pb-20 ">
                    <h3 className=' pb-2.5'>Home/Shop</h3>
                    <div className="flex justify-between ">
                        {/* sidebar Category */}
                        <div className="w-1/5 ">
                            <div className="">
                                <h1 className=' flex justify-between  items-center font-primary  font-semibold   text-[25px]'> Shop by Category</h1>
                                <div className=" flex flex-col gap-y-4 pr-[16px] mt-[15px]">

                                    {
                                        productCategory.map((cat) => (
                                            <Link className='font-secondary font-normal  text-[16px] leading-[24px]' to={cat.path}>
                                                {cat.name}
                                                {cat.color1}
                                            </Link>
                                        ))
                                    }
                                </div>

                            </div>
                            <div className="">
                                <h1 className=' flex justify-between  items-center font-primary  font-semibold   text-[25px]'> Shop by Color</h1>
                                <div className=" flex flex-col gap-y-4 pr-[16px] mt-[15px]">

                                    {
                                        productColor.map((cat) => (
                                            <Link className='font-secondary font-normal  text-[16px] leading-[24px]' to={cat.path}>
                                                {cat.name}

                                            </Link>
                                        ))
                                    }
                                </div>

                            </div>
                        </div>
                        {/* All product */}
                        <div className="w-4/5">
                            <div className="flex flex-wrap justify-between  ">
                                {
                                    product.map((items) => (
                                        <Link to={`/productdetails/${items._id}`} className="">
                                            <ProductCard key={items._id} items={items}></ProductCard>


                                        </Link>
                                    ))
                                }
                            </div>
                            <div className="flex gap-x-2 text-center justify-center">
                                <button className='font-secondary py-[4px] px-2 bg-blue-500 text-white d-500 rounded' disabled={currentpage == 1} onClick={() => setCurrentPage(currentpage - 1)} >Prev</button>
                                {pageArr.map((item) => (
                                    <p onClick={() => setCurrentPage(item)} className={`py-[3px] px-2.5  rounded text-white  ${currentpage === item ? "bg-gray-700" : "bg-gray-500"}`}>{item}</p>
                                ))}
                                <button className=' font-secondary text-white py-[4px] px-2 bg-red-600 rounded' disabled={currentpage === pageArr.length} onClick={() => setCurrentPage(currentpage + 1)}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default AllProduct
