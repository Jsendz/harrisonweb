import React from 'react'
import { video2 } from '../assets/index'

 const Home = () => {
  return (
    <div className="w-full h-full lg:h-screen  ">
    
        
        
      
        <video src={video2} autoPlay loop muted className=' w-[100vw] h-[100vh] object-cover' />
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white'>
          <span className="text-2xl font-loos italic">"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, laboriosam!"</span>
        </div>
    </div>
  )
}

export default Home