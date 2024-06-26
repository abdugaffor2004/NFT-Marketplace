import { breakPoints, creatorsCard } from '../data';
import Button from './button';
import buttonIcon from '../assets/RocketLaunchOutlined.svg';
import { chopArray, getImage } from '../helpers';
import { useWindowSize } from '../hooks/useWindowSize';

const Creators = () => {
  const { width } = useWindowSize();
  let cardsArray = [];

  if (width >= breakPoints.start) {
    cardsArray = chopArray(creatorsCard, 5);
  }
  if (width >= breakPoints.preMiddle) {
    cardsArray = chopArray(creatorsCard, 6);
  }
  if (width >= breakPoints.large) {
    cardsArray = creatorsCard;
  }

  return (
    <section className="mt-[5rem] lg:mt-[10rem] text-white">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="font-workSans font-semibold text-[1.75rem] leading-[2.45rem] xs:text-[2.5rem] sm:text-[1.75rem] lg:text-[2.375rem]">
            Top Creators
          </h3>
          <p className="mt-2.5 font-workSans font-normal text-base leading[1.4rem] xs:text-[1.2rem] sm:text-base sm:max-w-[343px] lg:text-[1.375rem] lg:max-w-full">
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>
        <div className=" hidden sm:block">
          <Button title="View Rankings" icon={buttonIcon} outlined={true} />
        </div>
      </div>
      <div className="mt-10 sm:flex sm:flex-wrap sm:justify-around lg:mt-[3.75rem] lg:justify-between">
        {cardsArray.map(item => (
          <div
            key={item.grade}
            className="bg-backgroundSecond flex items-center p-5 rounded-[1.25rem] mb-5 last:mb-0 sm:last:mb-5 md:flex-col md:items-center md:text-center md:mb-[1.875rem]"
          >
            <div className="sticky min-w-[60px] w-[22%] mr-5 xs:ml-5 sm:w-[60px] md:w-[120px]">
              <img src={getImage(item.avatar, 'creators')} alt="avatarIcon" />
              <div className="absolute top-[-10%] left-[-20%] md:left-[-30%] md:top-[0] flex items-center justify-center w-[1.875rem] h-[1.875rem] bg-background text-grey font-spaceMono rounded-[50%]">
                {item.grade}
              </div>
            </div>
            <div className="md:mt-5">
              <h6 className="font-workSans font-semibold text-[1.375rem]">{item.title}</h6>
              <div className="hidden ss:block md:mt-[5px]">
                <span className=" font-workSans font-normal text-base text-grey mr-1.5">
                  Total Sales:{' '}
                </span>
                <span className="font-spaceMono font-normal text-base">{item.sales} ETH</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center sm:hidden mt-10">
        <Button title="View Rankings" icon={buttonIcon} outlined={true} />
      </div>
    </section>
  );
};

export default Creators;
