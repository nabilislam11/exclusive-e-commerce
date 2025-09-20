import React from 'react'
import Container from '../container/Container'
import featured1 from '../../assets/featured1.png'
import featured2 from '../../assets/featured2.png'
import featured3 from '../../assets/featured3.png'
import featured4 from '../../assets/featured4.png'

const Featured = () => {
    return (
        <div className='py-[140px] '>
            <Container>
                <div class="relative inline-block group h-[30px]  overflow-hidden rounded-md">

                    <div class="absolute top-0 left-0 h-full w-3 bg-red-500 transition-all duration-500 group-hover:w-full"></div>


                    <span class="relative z-10 px-4 py-2 font-semibold text-red-500 items-center transition-colors duration-500 group-hover:text-white">
                        Featured
                    </span>
                </div>
                <div className="flex gap-[87px] items-center pt-[24px]  ">
                    <h1 className='font-primary font-semibold text-[36px] leading-[48px]'>New Arrival</h1>

                </div>
                <div className="flex  gap-x-[30px] justify-center  pt-[60px]">
                    <div className=" relative">
                        <img src={featured1} alt="" />
                        <div className=" absolute bottom-[32px] left-[29px]  flex flex-col gap-y-[16px] w-[242px] ">
                            <h1 className=' font-primary font-semibold text-[24px] leading-[24px] text-white'>PlayStation 5</h1>
                            <p className='font-secondary  font-normal text-[14px] leading-[21px] text-white' >Black and White version of the PS5 coming out on sale.</p>
                            <a className='font-secondary  font-medium  text-[16px] leading-[21px] text-white' href="">Shop Now</a>

                        </div>
                    </div>
                    <div className="   flex flex-col gap-y-[30px] ">
                        <div className="relative ">
                            <img src={featured2} alt="" />
                            <div className=" absolute bottom-[32px] left-[29px]  flex flex-col gap-y-[16px] w-[252px] ">
                                <h1 className=' font-primary font-semibold text-[24px] leading-[24px] text-white'>PlayStation 5</h1>
                                <p className='font-secondary  font-normal text-[14px] leading-[21px] text-white' >Black and White version of the PS5 coming out on sale.</p>
                                <a className='font-secondary  font-medium  text-[16px] leading-[21px] text-white' href="">Shop Now</a>

                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="relative ">
                                <img src={featured3} alt="" />
                                <div className=" absolute bottom-[32px] left-[29px]  flex flex-col gap-y-[8px] w-[192px] ">
                                    <h1 className=' font-primary font-semibold text-[24px] leading-[24px] text-white'>PlayStation 5</h1>
                                    <p className='font-secondary  font-normal text-[14px] leading-[21px] text-white' >Black and White version of the PS5 coming out on sale.</p>
                                    <a className='font-secondary  font-medium  text-[16px] leading-[21px] text-white' href="">Shop Now</a>

                                </div>
                            </div>
                            <div className=" relative">
                                <img src={featured4} alt="" />
                                <div className=" absolute bottom-[32px] left-[29px]  flex flex-col gap-y-[8px] w-[192px] ">
                                    <h1 className=' font-primary font-semibold text-[24px] leading-[24px] text-white'>PlayStation 5</h1>
                                    <p className='font-secondary  font-normal text-[14px] leading-[21px] text-white' >Black and White version of the PS5 coming out on sale.</p>
                                    <a className='font-secondary  font-medium  text-[16px] leading-[21px] text-white' href="">Shop Now</a>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Featured
