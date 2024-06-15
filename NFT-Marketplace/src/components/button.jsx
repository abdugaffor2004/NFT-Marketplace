import React from 'react'

const Button = ({icon, title, size, width}) => (
  
    <button className={`flex w-full sm:w-auto items-center justify-center bg-purple  ${size === 'small' ? "px-[1.875rem] py-[1.1875rem]" : "px-[3.125rem] py-[1.1875rem]"}  rounded-[1.25rem]`}>
        <img src={icon} className='size-5 mr-3' alt={icon} />
        <span className='text-white font-semibold'>{title}</span>
    </button>
)

export default Button