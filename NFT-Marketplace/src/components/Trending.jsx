import { TRENDING_COLLECTIONS } from '../data/Trending';
import { BREAKPOINTS } from '../data/Breakpoints';
import { useWindowSize } from '../hooks/useWindowSize';

export const Trending = () => {
  const { width } = useWindowSize();
  let newCollection;

  if (width >= BREAKPOINTS.start) {
    newCollection = TRENDING_COLLECTIONS.slice(0, 1);
  }
  if (width >= BREAKPOINTS.small) {
    newCollection = TRENDING_COLLECTIONS.slice(0, 2);
  }
  if (width >= BREAKPOINTS.middle) {
    newCollection = TRENDING_COLLECTIONS;
  }

  return (
    <section className="mt-[5rem] xs:mt-[7.5rem] lg:mt-[10rem]">
      <div className="text-white ">
        <h3 className="font-workSans font-semibold text-[1.75rem] leading-[2.45rem] xs:text-[2.5rem] sm:text-[1.75rem] lg:text-[2.375rem]">
          Trending Collection
        </h3>
        <p className="mt-2.5 font-workSans font-normal text-base leading[1.4rem] xs:text-[1.2rem] sm:text-base lg:text-[1.375rem]">
          Checkout our weekly updated trending collection
        </p>
      </div>

      <div className="mt-10 text-white sm:flex lg:justify-between">
        {Array.from(newCollection).map(item => (
          <div
            key={item.title}
            className="sm:max-w-[330px] sm:mr-[1.875rem] lg:min-w-[360px] last:mr-0"
          >
            <div>
              <img className="w-full" src={item.fImage} alt="PrimaryImage" />
            </div>

            <div className="flex justify-between mt-[0.9375rem] xs:hidden sm:flex gap-4">
              <img className="w-[30%]" src={item.sImage} alt="SecondImage" />
              <img className="w-[30%]" src={item.tImage} alt="ThirdImage" />
              <div className="font-spaceMono  font-bold text-base flex justify-center items-center w-[30%] bg-purple rounded-[1.25rem]">
                <span className="text-[1rem]">{item.trendingAmount}</span>
              </div>
            </div>

            <div>
              <h3 className="mt-[0.9375rem] font-workSans font-semibold text-[1.375rem] xs:text[1.7rem]">
                {item.title}
              </h3>
              <div className="mt-2.5 flex items-center">
                <img
                  className="mr-3 xs:w-[2.5rem] sm:w-[1.5rem]"
                  src={item.authorAvatar}
                  alt="Avatar"
                />
                <span className="font-workSans font-normal text-base xs:text-[1.2rem] sm:text-base">
                  {item.authorName}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
