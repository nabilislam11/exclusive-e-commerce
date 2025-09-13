import React from 'react'

const Container = ({children}) => {
  return (
    <div className='container lg:w-[1400px] mx-auto'>
        {children}
      
    </div>
  )
}

export default Container
