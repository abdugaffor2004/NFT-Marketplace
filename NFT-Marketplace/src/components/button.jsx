import React from 'react'

const Button = ({icon, title, size, width, outlined=false}) => (
  
    <button className= {
        `flex w-full sm:w-auto items-center justify-center bg-purple rounded-[1.25rem]  
        ${size === 'small' ? "px-[1.875rem] py-[1.1875rem]" : "px-[3.125rem] py-[1.1875rem]"}
        ${outlined && " bg-transparent border-purple border-[2px]"}  
    `}>
        <img src={icon} className={`size-5 mr-3 `} alt={icon} />
        <span className='text-white font-semibold'>{title}</span>
    </button>
)

export default Button