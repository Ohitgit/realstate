import React from 'react'
import Navbar from './navbar'
const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover flex items-center w-full overflow-hidden' style={{backgroundImage:"url('/header_img.png')"}} id='Header'>
      <Navbar/>
      <div className='container text-center mx-auto py-4 px-6  md:px-20 lg:px-32 text-white' >
        <h1 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Exploer Your Home To Fit Your Dream </h1>
        <div className='space-x-6 mt-16'>
            <a href="" className='border border-white px-8 py-3 rounded'>Projects</a>
            <a href="" className='bg-blue-500 border-white px-8 py-3 rounded'>Contact Us</a>
      
        </div>
      </div>
    </div>
  )
}

export default Header
