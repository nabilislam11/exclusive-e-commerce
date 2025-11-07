import React from 'react'
import Container from '../container/Container'
import { Link } from 'react-router'
import ProductCard from '../local/ProductCard'
import todays1 from '../../assets/todays1.png'
import todays2 from '../../assets/todays2.png'
import todays3 from '../../assets/todays3.png'
import todays4 from '../../assets/todays4.png'

const AllProduct = () => {
    const flashSell = [
        {
            id: 1,
            img: todays1,
            tittle: "HAVIT HV- G92 Gamepad",
            oldPrice: ` $190`,
            newPrice: `$120`,
            discount: "-40%",
            ratingStar: 2.5,
            rating: 88,
        },
        {
            id: 2,
            img: todays2,
            tittle: "AK-900 Wired Keyboard",
            oldPrice: `$960`,
            newPrice: `$1160`,
            discount: "-40%",
            ratingStar: 5,
            rating: 75,
        },
        {
            id: 3,
            img: todays3,
            tittle: "IPS LCD Gaming Monitor",
            oldPrice: `$370`,
            newPrice: `$400`,
            discount: "-40%",
            ratingStar: 3,
            rating: 99,
        },
        {
            id: 4,
            img: todays4,
            tittle: "S-Series Comfort Chair ",
            oldPrice: `$375`,
            newPrice: `$400`,
            discount: "-40%",
            ratingStar: 4,
            rating: 98,
        },
        {
            id: 5,
            img: todays3,
            tittle: "HAVIT HV- G92 Gamepad",
            oldPrice: 190,
            newPrice: 120,
            discount: "-40%",
            ratingStar: 5,
            rating: 88,
        },
        {
            id: 5,
            img: todays3,
            tittle: "HAVIT HV- G92 Gamepad",
            oldPrice: 190,
            newPrice: 120,
            discount: "-40%",
            ratingStar: 5,
            rating: 88,
        },
        {
            id: 5,
            img: todays3,
            tittle: "HAVIT HV- G92 Gamepad",
            oldPrice: 190,
            newPrice: 120,
            discount: "-40%",
            ratingStar: 5,
            rating: 88,
        },
        {
            id: 1,
            img: todays3,
            tittle: "HAVIT HV- G92 Gamepad",
            oldPrice: 190,
            newPrice: 120,
            discount: "-40%",
            ratingStar: 4.5,
            rating: 88,
        },
        {
            id: 4,
            img: todays4,
            tittle: "S-Series Comfort Chair ",
            oldPrice: `$375`,
            newPrice: `$400`,
            discount: "-40%",
            ratingStar: 4,
            rating: 98,
        }
    ]
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
                        <div className="w-4/5">
                            <div className="flex flex-wrap justify-between  ">
                                {
                                    flashSell.map((items) => (
                                        <ProductCard items={items}></ProductCard>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default AllProduct
