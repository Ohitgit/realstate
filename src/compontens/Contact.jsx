import React from 'react'

const Contact = () => {
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center '>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With Us </span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Take Move up ? Lets Build Up Future Together..</p>
      <form action="">
        <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
            Your Name
            <input className='w-full border border-gray-300 rounded py-3 px-4  mt-2' placeholder='Your Name' type="text" required></input>

            </div>

            <div className='w-full md:w-1/2 text-left md:pl-4'>
            Your Email
            <input className='w-full border border-gray-300 rounded py-3 px-4  mt-2' placeholder='Your Email' type="email" required></input>

            </div>
        </div>
      </form>
    </div>
  )
}

export default Contact
