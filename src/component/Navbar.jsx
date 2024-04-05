import React from 'react'
import { logo } from '../assets/index.js'

 const Navbar = () => {
  return (
    <div className="w-full h-24 lg:h-32 flex flex-row absolute justify-around items-center z-50">

      
      <div className=" w-full flex ml-3 font-bold text-white font-loos">
                <button className="px-4 border-r-2 border-white" >EN</button>
                <button className="px-4 border-r-2 border-white" >ES</button>
                <button className="px-4 border-r-2 border-white" >FR</button>
                
        </div>
      
      
        <div className="h-full w-full flex justify-center items-center">
            <img src={logo} alt="" className="w-32" />
        </div>
        <div className="w-full hidden lg:block">
            <ul className="flex flex-row justify-evenly text-slate-100 text-xl font-loos">
               <li>Services</li>
               
            </ul>
        </div>
        <div className='block lg:hidden'>

        </div>
        
    </div>
  )
}

export default Navbar