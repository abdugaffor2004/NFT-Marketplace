import React from 'react'
import { navLinks } from '../constants'

import user from '../assets/User.svg'
import logo from "../assets/logo.svg"
import navMenu from "../assets/navMenu.svg"

const Navbar = () => {
  return (
    <nav className='w-full py-5 flex justify-between items-center'>
        <div className='flex items-center'>
            <img src={logo} alt="storeLogo" />
        </div>

        <ul className='md:flex list-none hidden justify-end items-center flex-1'>
            {navLinks.map( (item) =>(
                <li key={item.id} className='font-workSans font-semibold text-base cursor-pointer text-white mr-[3.125rem] last:mr-0'>
                    <a href="#">{item.title}</a>
                </li>
            ))}

              <button className='flex items-center bg-purple px-[1.875rem] py-[1.1875rem] rounded-[1.25rem]'>
                <img src={user} className='size-5 mr-3' alt="UserPhoto" />
                <span className='text-white font-semibold'>Sign up</span> 
            </button>
        </ul>

        <div className='md:hidden'>
            <img src={navMenu} alt="burgerMenuIcon" />
        </div>
    </nav>
  )
}

export default Navbar