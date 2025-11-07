import React from 'react'
import Container from '../container/Container'
import { CgArrowsScrollV } from 'react-icons/cg'
import todays1 from '../../assets/todays1.png'
import todays2 from '../../assets/todays2.png'

const Cart = () => {
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

                    <div className="flex justify-between items-center px-[40px] py-[24px] shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] rounded-[4px] my-[40px] ">
                        <div className="flex gap-x-[20px] items-center ">
                            <img src={todays1} alt="" className="w-20 h-20 rounded-md object-cover" />
                            <p className='font-secondary  font-normal text-[16px] leading-[24px]'>$650</p>
                            <p className='font-secondary  font-normal text-[14px] leading-[21px]'>LCD Monitor</p>
                        </div>
                        <p className='font-secondary  font-normal text-[16px] leading-[24px]'>$650</p>
                        <p >$650</p>
                        <p className='font-secondary  font-normal text-[16px] leading-[24px]'>$650</p>
                        <div className="flex gap-x-[16px] py-[6px] items-center border-2 px-[12px] rounded">
                            <p className='font-secondary  font-normal text-[14px] leading-[21px]'>01</p>
                            <CgArrowsScrollV size={20} />
                        </div>
                        <p className='font-secondary  font-normal text-[16px] leading-[24px]'>$650</p>
                    </div>
                    <div className="flex justify-between items-center px-[40px] py-[24px] shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] rounded-[4px] my-[40px] ">
                        <div className="flex gap-x-[20px] items-center ">
                            <img src={todays2} alt="" className="w-20 h-20 rounded-md object-cover" />
                            <p className='font-secondary  font-normal text-[16px] leading-[24px]'>$650</p>
                            <p className='font-secondary  font-normal text-[14px] leading-[21px]'>LCD Monitor</p>
                        </div>
                        <p className='font-secondary  font-normal text-[16px] leading-[24px]'>$650</p>
                        <p >$650</p>
                        <p className='font-secondary  font-normal text-[16px] leading-[24px]'>$650</p>
                        <div className="flex gap-x-[16px] py-[6px] items-center border-2 px-[12px] rounded">
                            <p className='font-secondary  font-normal text-[14px] leading-[21px]'>01</p>
                            <CgArrowsScrollV size={20} />
                        </div>
                        <p className='font-secondary  font-normal text-[16px] leading-[24px]'>$650</p>
                    </div>

                </div>

            </Container>
        </>
    )
}

export default Cart
