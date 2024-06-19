import React from 'react'
import eyeIcon from "../assets/EyeOutlined.png"
import Button from './button'
import { NFTs } from '../constants'
import { getImage } from '../helpers'

const DiscoverNft = () => (
  
    <section className='mt-[5rem] text-white lg:mt-[10rem]'>
        <div className='flex justify-between items-end'>
            <div>
                <h3 className='font-workSans font-semibold text-[1.75rem] leading-[2.45rem] xs:text-[2.5rem] sm:text-[1.75rem] lg:text-[2.375rem]'>Discover More NFTs</h3>
                <p className='mt-2.5 font-workSans font-normal text-base leading[1.4rem] xs:text-[1.2rem] sm:text-base sm:max-w-[343px] lg:text-[1.375rem] lg:max-w-full'>Explore New Trending NFTs</p>
            </div>
            <div className=' hidden sm:block'><Button title="See All" icon={eyeIcon} outlined={true} /></div>
        </div>

        <div className='mt-[2.5rem] flex flex-wrap justify-between xs:justify-center sm:justify-between sm:flex-nowrap md:justify-center lg:justify-between lg:mt-[3.75rem]'>
            {NFTs.map((item) =>(
                <div key={item.title} className='mb-5 last:mb-0 sm:mb-0 sm:first:mr-[1.875rem] sm:last:hidden lg:last:block lg:last:ml-[1.875rem]'>
                    <img className='rounded-t-[1.25rem] ss:min-w-[300px] ss:h-auto' src={getImage(item.image, "NFT")} alt="Image" />
                    <div className='bg-backgroundSecond px-5 pt-5 pb-[1.5625rem] rounded-b-[1.25rem]'>
                        <div>
                            <h6 className='font-workSans font-semibold text-[1.375rem]'>{item.title}</h6>
                            <div className='flex mt-1'>
                                <img className='mr-3' src={getImage(item.authorAvatar, "NFT")} alt="Avatar" />
                                <span className='font-spaceMono font-normal'>{item.authorName}</span>
                            </div>
                        </div>

                        <div className='mt-[1.5625rem] flex justify-between font-spaceMono font-normal text-xs'>
                            <div className='flex flex-col'>
                                <span className='text-grey'>Price</span>
                                <span className='mt-2 sm:text-base'>{item.price} ETH</span>
                            </div>
                            <div className='flex flex-col items-end'>
                                <span className='text-grey'>Highest Bid</span>
                                <span className='mt-2 sm:text-base'>{item.highestBid} wETH</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* <div className='mt-[2.5rem] flex flex-wrap justify-between'>
            <div className='min-w-[315px] w-[148px]'>
                <img className='rounded-t-[1.25rem]' src={imageNFT_1} alt="Image" />
                <div className='bg-backgroundSecond px-5 pt-5 pb-[1.5625rem] rounded-b-[1.25rem]'>
                    <div>
                        <h6 className='font-workSans font-semibold text-[1.375rem]'>Distant Galaxy</h6>
                        <div className='flex mt-1'>
                            <img className='mr-3' src={avatarNFT_1} alt="Avatar" />
                            <span className='font-spaceMono font-normal'>MoonDancer</span>
                        </div>
                    </div>

                    <div className='mt-[1.5625rem] flex justify-between font-spaceMono font-normal text-xs'>
                        <div className='flex flex-col'>
                            <span className='text-grey'>Price</span>
                            <span className='mt-2'>1.63 ETH</span>
                        </div>
                        <div className='flex flex-col items-end'>
                            <span className='text-grey'>Highest Bid</span>
                            <span className='mt-2'>0.33 wETH</span>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </section>
  
)

export default DiscoverNft