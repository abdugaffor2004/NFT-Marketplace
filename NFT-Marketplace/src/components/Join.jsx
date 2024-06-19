import React from 'react'
import { getImage } from '../helpers'
import Button from './button'
import joinPhoto from "../assets/JoinPhoto_2.png"
import envelopeIcon from "../assets/EnvelopeSimple.svg"
import { useWindowSize } from '../hooks/useWindowSize'



const Join = () => {

  const [width, height] = useWindowSize();

  return (
    <section className='mt-[5rem] text-white xs_sm:flex xs_sm:flex-col xs_sm:justify-center sm:bg-backgroundSecond sm:flex-row sm:items-center sm:px-[30px] sm:py-[40px] sm:rounded-[20px] md:p-[60px]'>
        <img className='w-[315px] h-[255px] rounded-[20px] xs:w-full sm:w-[300px] sm:h-[280px] sm:mr-[30px] md:w-[425px] md:h-[310px] md:object-cover md:mr-[80px]' src={joinPhoto} alt="joinPhoto" />
        <div className='mt-[30px] sm:w-[300px] md:w-[425px]'>
            <h6 className='font-workSans font-semibold text-[1.75rem] leading-[39.2px] md:text-[38px] md:leading-[45.6px]'>Join Our Weekly Digest</h6>
            <p className='font-workSans font-normal text-base mt-2.5 md:text-[22px] md:leading-[35.2px]'>Get exclusive promotions & updates straight to your inbox.</p>

            <div className='mt-10 lg:flex md:min-h-[62px]'>
          <input className='w-full px-5 py-3 text-black outline-none placeholder:text-black placeholder:font-workSans rounded-[20px]' placeholder={`${width >= 1200 ? "Enter your email here" : "Enter Your Email Address"} `} type="text" />
              <Button className='mt-4 h-[46px] sm:w-full md:w-auto lg:mt-0 lg:h-full lg:w-[211px] lg:ml-[-30px]' icon={envelopeIcon} title="Subscribe"/>
            </div>
        </div>
    </section>
  )
}

export default Join

    // < div className = 'mt-10 xs_sm:flex' >
    //             <input className='xs_sm:relative xs_sm:h-[46px] w-full px-5 py-3 text-black outline-none placeholder:text-black placeholder:font-workSans rounded-[20px]' placeholder='Enter Your Email Address' type="text" />
    //             <Button className='xs_sm:absolute xs_sm:right-[30px] xs_sm:mt-0 xs_sm:px-[40px] mt-4 h-[46px] xs_sm:w-auto' icon={envelopeIcon} title="Subscribe"/>
    //         </ >