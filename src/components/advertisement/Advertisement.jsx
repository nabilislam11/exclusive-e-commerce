import React from 'react'
import Container from '../container/Container'
import advertisement from '../../assets/advertisement.png'
const Advertisement = () => {
    return (
        <div className=' pb-[70px]' >
            <Container>
                <div className="px-[50px] flex justify-between bg-black ">
                    <div className="pt-[69px] ">
                        <p className='font-secondary text-[#00FF66]  font-semibold   text-[16px] leading-[20px] '>Categories</p>
                        <h1 className='w-[443px] py-[32px] font-primary  font-semibold text-white text-[48px] leading-[60px] '>Enhance Your Music Experience</h1>
                        <div className="flex gap-x-[24px] pb-[40px]  ">
                            <div className="w-[62px] h-[62px] bg-[#FFFFFF] rounded-full flex flex-col items-center justify-center  ">
                                <h3 className='font-secondary font-semibold   text-[16px] leading-[20px] '>23</h3>
                                <p className='font-secondary font-normal text-[11px] leading-[18px] '>Hours</p>
                            </div>
                            <div className="w-[62px] h-[62px] bg-[#FFFFFF] rounded-full flex flex-col items-center justify-center  ">
                                <h3 className='font-secondary font-semibold   text-[16px] leading-[20px] '>23</h3>
                                <p className='font-secondary font-normal text-[11px] leading-[18px] '>Hours</p>
                            </div>
                            <div className="w-[62px] h-[62px] bg-[#FFFFFF] rounded-full flex flex-col items-center justify-center  ">
                                <h3 className='font-secondary font-semibold   text-[16px] leading-[20px] '>23</h3>
                                <p className='font-secondary font-normal text-[11px] leading-[18px] '>Hours</p>
                            </div>
                            <div className="w-[62px] h-[62px] bg-[#FFFFFF] rounded-full flex flex-col items-center justify-center  ">
                                <h3 className='font-secondary font-semibold   text-[16px] leading-[20px] '>23</h3>
                                <p className='font-secondary font-normal text-[11px] leading-[18px] '>Hours</p>
                            </div>
                        </div>
                        <button className='py-[16px] px-[48px] bg-[#00FF66] text-white '>Buy Now!</button>
                    </div>
                    <div className="pt-[37px] pb-[43px] ">
                        <img src={advertisement} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Advertisement
