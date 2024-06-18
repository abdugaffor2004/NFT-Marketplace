import React from 'react'
import { howItWorksCards } from '../constants'

const HowItWorks = () => (
  
    <section className='mt-[5rem] text-white'>
        <div>
            <h3 className='font-workSans font-semibold text-[1.75rem] leading-[2.45rem] xs:text-[2.5rem] sm:text-[1.75rem] lg:text-[2.375rem]'>How it works</h3>
            <p className='mt-2.5 font-workSans font-normal text-base leading[1.4rem] xs:text-[1.2rem] sm:text-base lg:text-[1.375rem]'>Find Out How To Get Started</p>
        </div>

        <div className='sm:flex sm:gap-[1.875rem] lg:justify-center'>

            {howItWorksCards.map( (item) =>(
                <div key={item.title} className='mt-10 bg-backgroundSecond flex p-5 rounded-[1.25rem] xs:items-center sm:flex-col sm:text-center sm:min-w-[13.125rem] sm:min-h-[21.0625rem] md:p-[1.875rem] lg:w-full lg:mt-12'>
                    <img className='min-w-[6.25rem] sm:min-w-[10rem] md:w-[13.75rem] object-contain mr-5 sm:mr-0' src={item.icon} alt="Icon" />
                    <div className='sm:mt-5 '>
                        <h6 className='font-workSans font-semibold text-base xs:text-[1.5rem] sm:text-base md:text-[1.375rem]'>{item.title}</h6>
                        <p className='mt-2.5 font-workSans font-normal text-xs leading-[1.05rem] xs:text-[0.9rem] sm:text-xs md:text-base md:max-w-[16.875rem]'>{item.description}</p>
                    </div>
                </div>
            ) )}
            
        </div>

        
    </section>
  
)

export default HowItWorks