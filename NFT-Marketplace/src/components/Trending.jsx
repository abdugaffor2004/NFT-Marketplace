import React from 'react'
import primaryImage_1 from "../assets/PrimaryPhotoPlaceholder_1.png"
import secondImage_1 from "../assets/SecondaryPhotoPlaceholder_1.png"
import thirdImage_1 from "../assets/ThirdPhotoPlaceholder_1.png"
import authorAvatar_1 from "../assets/AvatarPlaceholder_1.svg"

import primaryImage_2 from "../assets/PrimaryPhotoPlaceholder_2.png"
import secondImage_2 from "../assets/SecondaryPhotoPlaceholder_2.png"
import thirdImage_2 from "../assets/ThirdPhotoPlaceholder_2.png"
import authorAvatar_2 from "../assets/AvatarPlaceholder_2.svg"

import primaryImage_3 from "../assets/PrimaryPhotoPlaceholder_3.png"
import secondImage_3 from "../assets/SecondaryPhotoPlaceholder_3.png"
import thirdImage_3 from "../assets/ThirdPhotoPlaceholder_3.png"
import authorAvatar_3 from "../assets/AvatarPlaceholder_3.svg"


const Trending = () => (
  
    <section className='mt-[5rem]'>
        <div className='text-white lg:ml-[60px]'>
            <h3 className='font-workSans font-semibold text-[1.75rem] leading-[2.45rem] xs:text-[2.5rem] sm:text-[1.75rem] lg:text-[2.375rem]'>Trending Collection</h3>
            <p className='mt-2.5 font-workSans font-normal text-base leading[1.4rem] xs:text-[1.2rem] sm:text-base lg:text-[1.375rem]'>Checkout our weekly updated trending collection</p>
        </div>

        <div className='mt-10 text-white sm:flex lg:justify-evenly'>

            <div className='sm:max-w-[360px] sm:mr-[1.875rem]'>
                <div>
                    <img className='w-full' src={primaryImage_1} alt="PrimaryImage" />
                </div>

                <div className='flex justify-between mt-[0.9375rem] xs:hidden sm:flex gap-4'>
                    <img className='w-[30%]' src={secondImage_1} alt="SecondImage" />
                    <img className='w-[30%]' src={thirdImage_1} alt="ThirdImage" />
                    <div className='font-spaceMono  font-bold text-base flex justify-center items-center w-[30%] bg-purple rounded-[1.25rem]'> <span className='text-[1rem]'>1025+</span> </div>
                </div>

                <div>
                    <h3 className='mt-[0.9375rem] font-workSans font-semibold text-[1.375rem] xs:text[1.7rem]'>DSGN Animals</h3>
                    <div className='mt-2.5 flex items-center'>
                        <img className='mr-3 xs:w-[2.5rem] sm:w-[1.5rem]' src={authorAvatar_1} alt="Avatar" />
                        <span className='font-workSans font-normal text-base xs:text-[1.2rem] sm:text-base'>MrFox</span>
                    </div>
                </div>
            </div>


            <div className='sm:max-w-[330px] hidden sm:block md:mr-[1.875rem]'>
                <div>
                    <img className='w-full' src={primaryImage_2} alt="PrimaryImage" />
                </div>

                <div className='flex justify-between mt-[0.9375rem] xs:hidden sm:flex gap-4'>
                    <img className='w-[30%]' src={secondImage_2} alt="SecondImage" />
                    <img className='w-[30%]' src={thirdImage_2} alt="ThirdImage" />
                    <div className='font-spaceMono  font-bold text-base flex justify-center items-center w-[30%] bg-purple rounded-[1.25rem]'> <span className='text-[1rem]'>1025+</span> </div>
                </div>

                <div>
                    <h3 className='mt-[0.9375rem] font-workSans font-semibold text-[1.375rem] xs:text[1.7rem]'>Magic Mushrooms</h3>
                    <div className='mt-2.5 flex items-center'>
                        <img className='mr-3 xs:w-[2.5rem] sm:w-[1.5rem]' src={authorAvatar_2} alt="Avatar" />
                        <span className='font-workSans font-normal text-base xs:text-[1.2rem] sm:text-base'>Shroomie</span>
                    </div>
                </div>
            </div>

             <div className='sm:max-w-[330px] hidden md:block'>
                <div>
                    <img className='w-full' src={primaryImage_3} alt="PrimaryImage" />
                </div>

                <div className='flex justify-between mt-[0.9375rem] xs:hidden sm:flex gap-4'>
                    <img className='w-[30%]' src={secondImage_3} alt="SecondImage" />
                    <img className='w-[30%]' src={thirdImage_3} alt="ThirdImage" />
                    <div className='font-spaceMono  font-bold text-base flex justify-center items-center w-[30%] bg-purple rounded-[1.25rem]'> <span className='text-[1rem]'>1025+</span> </div>
                </div>

                <div>
                    <h3 className='mt-[0.9375rem] font-workSans font-semibold text-[1.375rem] xs:text[1.7rem]'>Disco Machines</h3>
                    <div className='mt-2.5 flex items-center'>
                        <img className='mr-3 xs:w-[2.5rem] sm:w-[1.5rem]' src={authorAvatar_3} alt="Avatar" />
                        <span className='font-workSans font-normal text-base xs:text-[1.2rem] sm:text-base'>BeKind2Robots</span>
                    </div>
                </div>
            </div>

        </div>
    </section>
  
)

export default Trending