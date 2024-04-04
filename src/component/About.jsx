import React from 'react';
import { Aboutpic } from '../assets/index';


const About = () => {
  return (
    <div className='w-full h-full lg:h-screen bg-about bg-no-repeat bg-cover '>
        
    <div className=" w-full h-full flex flex-col lg:flex-row justify-center py-10 max-w-6xl mx-auto ">
    
        <div className="w-full h-full flex justify-end ">
            <img src={Aboutpic} alt="" className="w-[95%] md:w-full  rounded-lg mx-auto lg:mx-0" />
            

        </div>
        <div className='w-full'>
        <h2 className='text-center text-slate-900 text-6xl lg:text-8xl pt-20 font-loos  lg:-ml-48 animate-fade-left animate-ease-in'>HARRISON </h2>
        <h3 className='text-center text-slate-800 text-5xl font-loos animate-fade-left animate-ease-in '>ORCHESTRA</h3>
        <div className='pl-10 mt-5'>
            <p className='text-slate-600 font-loos animate-fade-left animate-ease-in'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, maxime sed nisi totam veniam aperiam ratione architecto exercitationem obcaecati suscipit, illum a distinctio facilis dolores quam rerum saepe fugit inventore!</p>
            <button  className='p-5 rounded-lg bg-slate-200 mt-5 text-slate-800 font-semibold'>Lorem, ipsum.</button>
        </div>

        </div>
        </div>
    </div>
    
  )
}

export default About