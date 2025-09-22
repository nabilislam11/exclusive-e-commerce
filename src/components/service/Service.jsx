import React from 'react'
import services1 from '../../assets/services1.png'
import services2 from '../../assets/services2.png'
import services3 from '../../assets/services3.png'
import Container from '../container/Container'
const Service = () => {
    return (
        <>

            <Container>

                <div className=' flex justify-around items-center pb-[140px] '>
                    <div className="items-center ">
                        <img className=' pb-[24px] mx-auto ' src={services1} alt="" />
                        <div className="flex flex-col gap-y-2 ">
                            <h4 className='font-secondary  font-semibold text-[20px] leading-[28px]'>FREE AND FAST DELIVERY</h4>
                            <p className='font-secondary  font-normal text-[14px] leading-[21px]'>Free delivery for all orders over $140</p>
                        </div>

                    </div>
                    <div className=" items-center  ">
                        <img className=' pb-[24px] mx-auto ' src={services2} alt="" />
                        <div className="flex flex-col gap-y-2 ">
                            <h4 className='font-secondary  font-semibold text-[20px] leading-[28px]'>FREE AND FAST DELIVERY</h4>
                            <p className='font-secondary  font-normal text-[14px] leading-[21px]'>Free delivery for all orders over $140</p>
                        </div>

                    </div>
                    <div className=" items-center  ">
                        <img className=' pb-[24px]  mx-auto' src={services3} alt="" />
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
