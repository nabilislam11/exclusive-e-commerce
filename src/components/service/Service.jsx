import React from 'react'

import Services1 from '../../assets/Services1.png'
import Services2 from '../../assets/Services2.png'
import Services3 from '../../assets/Services3.png'
import Container from '../container/Container'
const Service = () => {
    return (
        <>
            <Container>
                <div className=' flex justify-around items-center pb-[140px] '>
                    <div className="items-center ">
                        <img className=' pb-[24px] mx-auto ' src={Services1} alt="" />
                        <div className="flex flex-col gap-y-2 ">
                            <h4 className='font-secondary  font-semibold text-[20px] leading-[28px]'>FREE AND FAST DELIVERY</h4>
                            <p className='font-secondary  font-normal text-[14px] leading-[21px]'>Free delivery for all orders over $140</p>
                        </div>
                    </div>
                    <div className=" items-center  ">
                        <img className=' pb-[24px] mx-auto ' src={Services2} alt="" />
                        <div className="flex flex-col gap-y-2 ">
                            <h4 className='font-secondary  font-semibold text-[20px] leading-[28px]'>FREE AND FAST DELIVERY</h4>
                            <p className='font-secondary  font-normal text-[14px] leading-[21px]'>Free delivery for all orders over $140</p>
                        </div>
                    </div>
                    <div className=" items-center  ">
                        <img className=' pb-[24px]  mx-auto' src={Services3} alt="" />
                        <div className="flex flex-col gap-y-2 ">
                            <h4 className='font-secondary  font-semibold text-[20px] leading-[28px]'>FREE AND FAST DELIVERY</h4>
                            <p className='font-secondary  font-normal text-[14px] leading-[21px]'>Free delivery for all orders over $140</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Service
