import { categoriesCard } from '../constants';
import { getImage } from '../helpers';

const Categories = () => (
  <section className="text-white mt-[5rem] lg:mt-[10rem]">
    <div className="flex justify-between items-end">
      <h3 className="font-workSans font-semibold text-[1.75rem] leading-[2.45rem] xs:text-[2.5rem] sm:text-[1.75rem] lg:text-[2.375rem]">
        Browse Categories
      </h3>
    </div>

    <div className="mt-[2.5rem] flex flex-wrap justify-between xs:justify-around sm:justify-between lg:mt-[3.75rem]">
      {categoriesCard.map(item => (
        <div key={item.title} className="min-w-[148px] w-[148px] mb-5 md:w-[240px] md:h-[316px]">
          <img
            className="rounded-t-[1.25rem]"
            src={getImage(item.image, 'categories')}
            alt="Image"
          />
          <div className="bg-backgroundSecond px-5 pt-5 pb-[1.5625rem] rounded-b-[1.25rem] font-semibold font-workSans">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Categories;
