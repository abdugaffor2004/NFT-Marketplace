import Button from './button';
import rocketLaunch from '../assets/RocketLaunch.svg';
import imagePlaceholder from '../assets/ImagePlaceholder.svg';
import avatar from '../assets/Avatar.svg';
import { statistics } from '../data';

const Hero = () => (
  <section className="text-white flex flex-col sm:flex-row sm:justify-between md:justify-center md:text-center md_lg:justify-normal md_lg:text-start lg:justify-between">
    <div className="sm:w-[330px] md:w-[510px] sm:mr-[1.875rem] ">
      <h1 className="text-[1.75rem] sm:text-[2.375rem] sm:leading-[2.85rem] md:text-[4.1875rem] md:leading-[4.6063rem] font-workSans font-semibold">
        Discover Digital Art & Collect NFTs
      </h1>

      <p className="mt-2.5 mb-[2.5rem] font-workSans font-normal sm:text-base sm:leading-[1.4rem] sm:mt-5 sm:mb-5 md:text-[1.375rem] md:leading-[2.2rem] md:mb-[1.875rem]">
        NFT Marketplace UI Created with Anima for Figma. Collect, Buy and Sell Art From More Than
        20k NFT Artists.
      </p>

      <div className="sm:hidden sm:w-[330px] sm:h-[259.38px] md:w-[330px] md:h-[260px] lg:w-[480px] lg:h-[377.28px]  mb-[2.5rem]">
        <div>
          <img src={imagePlaceholder} alt="image" className="w-full rounded-t-[1.25rem]" />
        </div>
        <div className="bg-backgroundSecond px-5 py-[1.375rem]  rounded-b-[1.25rem]">
          <h3 className="font-semibold text-[1.375rem]">Space Walking</h3>
          <div className="mt-2.5 flex">
            <img src={avatar} alt="AvatarIcon" />
            <span className="ml-3">Animakid</span>
          </div>
        </div>
      </div>

      <div className="mt-10 md:flex md:flex-col md:justify-center md_lg:block">
        <Button icon={rocketLaunch} title={'Get Started'} size={'large'} />
        <div className="flex mt-[1.875rem] sm:mt-5 justify-center sm:justify-normal">
          {statistics.map(item => (
            <div
              key={item.title}
              className="flex flex-col items-start mr-10 last:mr-0 md:w-[150px] md:mr-[1.875rem]"
            >
              <span className="font-bold font-spaceMono text-[1.375rem] md:text-[1.75rem]">
                {item.count}
              </span>
              <span className="font-normal font-workSans sm:text-base md:text-2xl">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="hidden sm:block md:hidden md_lg:block sm:w-[300px] md:w-[510px] md:h-[401px] lg:w-[560px] mb-[2.5rem]">
      <div>
        <img className="rounded-t-[1.25rem] lg:w-[600px]" src={imagePlaceholder} alt="image" />
      </div>
      <div className="bg-backgroundSecond px-5 py-[1.375rem] rounded-b-[1.25rem]">
        <h3 className="font-semibold text-[1.375rem]">Space Walking</h3>
        <div className="mt-2.5 flex">
          <img src={avatar} alt="AvatarIcon" />
          <span className="ml-3">Animakid</span>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
