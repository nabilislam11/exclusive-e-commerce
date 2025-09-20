import React from 'react'
import Container from '../container/Container'

const Featured = () => {
    return (
        <div>
            <Container>
                <div class="relative inline-block group h-[30px]  overflow-hidden rounded-md">

                    <div class="absolute top-0 left-0 h-full w-3 bg-red-500 transition-all duration-500 group-hover:w-full"></div>


                    <span class="relative z-10 px-4 py-2 font-semibold text-red-500 items-center transition-colors duration-500 group-hover:text-white">
                        Featured
                    </span>
                </div>
                <div className="flex gap-[87px] items-center pt-[24px]  ">
                    <h1 className='font-primary font-semibold text-[36px] leading-[48px]'>Browse By Category</h1>

                </div>
            </Container>
        </div>
    )
}

export default Featured
