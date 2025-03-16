import React from 'react'
// import {assets , projectsData} from '../assets/assets'
const Projects = () => {
     const projectsData = [
        {
          title: "Skyline Haven",
          price: "$2,50,000",
          location: "California",
          image: "project_img_1.png"
        },
        {
          title: "Vista Verde",
          price: "$2,50,000",
          location: "San Francisco",
          image: './project_img_2.png'
        },
        {
          title: "Serenity Suites",
          price: "$2,50,000",
          location: "Chicago",
          image:'./project_img_3.png'
        },
        {
          title: "Central Square",
          price: "$2,50,000",
          location: "Los Angeles",
          image:'./project_img_4.png'
        },
        {
          title: "Vista Verde",
          price: "$2,50,000",
          location: "San Francisco",
          image: '/project_img_5.png'
        },
        {
          title: "Serenity Suites",
          price: "$2,50,000",
          location: "Chicago",
          image: './project_img_6.png'
        },
        
      ];
    
      return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32  my-20 w-full overflow-hidden'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'> Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Compelted</span></h1>
    <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto mt-3'>Lorem ipsum is a dummy or placeholder text commonly used in graphic design,</p>
     {/* slider image */}

     <div className='flex justify-end items-center mb-8'>
        <button className='p-3 bg-gray-200 rounded mr-2' aria-label='Pervious Projects'><img src="./left_arrow.svg" alt="" srcset="" /></button>
     
        <button className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Projects'><img src="./right_arrow.svg" alt="" srcset="" /></button>
     </div>
     {/* project slider container */}
     <div class="overflow-hidden">
      <div className='flex gap-8 transition-transform duration-500 ease-in-out'>
     {projectsData.map((project, index) => {
  console.log(project); // Debugging
  return (
    <div key={index} className='relative flex-shrink-0 w-full sw:w-1/4'>
    <img src="./project_img_1.jpg" alt="" srcset="" />

    <div className='absolute left-0 right-0 bottom-5 flex justify-center width:5'>
  <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
    <h2 className='text-xl font-semibold '>{project.title}</h2>
    <p className='text-gray-500 text-sm'>{project.price}</p>
  </div>
  </div>
    </div>
  );
})}
      </div>
     </div>
    </div>
  )
}

export default Projects
