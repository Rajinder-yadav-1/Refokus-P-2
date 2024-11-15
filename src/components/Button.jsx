import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title = "Get Started"}) {
  return (
    <div className='min-w-40 px-4  py-2   bg-white rounded-full text-black flex items-center justify-between'>
        <span className='  font-semibold'>{title}</span>
        <IoIosReturnRight/>
    </div>
  )
}

export default Button