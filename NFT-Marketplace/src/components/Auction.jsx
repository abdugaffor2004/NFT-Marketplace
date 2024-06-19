import React from 'react'
import mushroom from "../assets/Mushroom.png"
import { getImage } from '../helpers'
import Timer from './Timer'
import Button from './button'
import eyeIcon from '../assets/EyeOutlined.png'


const Auction = () => {

  return (
    <section style={{backgroundImage:`url(${mushroom})`}} className={`mt-[3.75rem] w-full min-h-[590px] bg-center bg-cover text-white`}>
        <div style={{ background:'linear-gradient(0deg, rgba(162,89,255,1) 3%, rgba(255,255,255,0) 100%)'}} className='w-full min-h-[590px] flex justify-center items-end'>
            <div className='mb-10 min-w-[315px] h-[430px] sm:flex sm:items-end sm:justify-between sm:mb-[60px] sm:mx-[82px] md:mx-[115px] sm:w-full sm:h-[210px] xl:w-[1400px]'>
                <div className='mr-5'>
                    <div className='py-2.5 px-5 bg-backgroundSecond inline-flex rounded-[1.25rem]'>
                        <img className='w-6 mr-3' src={getImage("ArtistAvatar_7.png", "creators")} alt="Avatar" />
                        <span className='font-workSans font-normal'>Shroomie</span>
                    </div>
                    <h6 className='font-semibold text-[2.375rem] mt-[1.875rem] mb-[1.875rem] leading-[45.6px] lg:text-[51px]'> Magic <br className='sm:hidden'/> Mashrooms </h6>
                      <Button className='font-workSans mt-[1.875rem] bg-white text-black hidden sm:flex' icon={eyeIcon} title="See NFT" />
                </div>

                <div className='w-[315px] sm:w-[295px] h-[154px] p-[1.875rem] bg-backgroundSecond bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 rounded-[1.25rem] font-spaceMono'>
                    <span>Auction ends in:</span>
                    <Timer />
                </div>
                
                <Button className=' font-workSans mt-[1.875rem] bg-white text-black sm:hidden' icon={eyeIcon} title="See NFT" />

            </div>
        
        </div>
    </section>
  )
}

export default Auction