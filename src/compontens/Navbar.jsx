import React, { useEffect, useState } from 'react'
// import assets from '../assets/assets'

const navbar = () => {
  const [showMobileMenu,SetMobileMenu]=useState(false)
  useEffect(()=>{
    if(showMobileMenu)
    {
      document.body.style.overflow= 'hidden'
    }
    else{
      document.body.style.overflow= 'auto'
    }
    return ()=>{
      document.body.style.overflow= 'auto'
    }
    
  },[showMobileMenu])

  return ( <div className='absolute top-0 left-0 min-w-full z-10'>

    <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
      {/* <img src={asset.logo} alt="" srcset="" /> */}
      <ul className='hidden md:flex gap-7 text-white '>
          <a href='#' className='cursor-pointer hover:text-gray-400'>Home</a>
          <a href='#' className='cursor-pointer hover:text-gray-400'>About</a>
          <a href='#' className='cursor-pointer hover:text-gray-400'>Project</a>
          <a href='#' className='cursor-pointer hover:text-gray-400'>Testimoinal</a>
      </ul>
      <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Signup</button>
      <img onClick={()=>  SetMobileMenu(true)} src="/menu_icon.svg" alt="" srcset=""  className='md:hidden w-7'/>
    </div>
    {/* mobile menu */}
    <div className={`md:hidden ${showMobileMenu ? 'fixed w-full ' :'h-0 w-0 '} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
      <div className='flex justify-end p-6'>
        <img   onClick={()=>  SetMobileMenu(false)} src="/cross_icon.svg" alt="" srcset="" className='w-6 cursor-pointer' />
      </div>
      
      <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
        <a href='#' className='px-4 py2 rounded-full inline-block'>Home</a>
        
          <a href='#' className='px-4 py2 rounded-full inline-block'>About</a>
          <a href='#' className='px-4 py2 rounded-full inline-block'>Project</a>
          <a href='#' className='px-4 py2 rounded-full inline-block'>Testimoinal</a>
      </ul>
    </div>
  </div>
  )
}

export default navbar
