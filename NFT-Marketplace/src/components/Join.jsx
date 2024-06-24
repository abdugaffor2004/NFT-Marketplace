import joinPhoto from '../assets/JoinPhoto_2.png';
import InputGroup from './Input';

const Join = () => {
  return (
    <section className="mt-[5rem] text-white xs_sm:flex xs_sm:flex-col xs_sm:justify-center sm:bg-backgroundSecond sm:flex-row sm:items-center sm:px-[30px] sm:py-[40px] sm:rounded-[20px] sm:mt-[3.75rem] md:p-[60px] lg:mt-[7.5rem]">
      <img
        className="w-[315px] h-[255px] rounded-[20px] xs:w-full sm:w-[300px] sm:h-[280px] sm:mr-[30px] md:w-[425px] md:h-[310px] md:object-cover md:mr-[80px]"
        src={joinPhoto}
        alt="joinPhoto"
      />
      <div className="mt-[30px] sm:w-[300px] md:w-[425px]">
        <h6 className="font-workSans font-semibold text-[1.75rem] leading-[39.2px] md:text-[38px] md:leading-[45.6px]">
          Join Our Weekly Digest
        </h6>
        <p className="font-workSans font-normal text-base mt-2.5 md:text-[22px] md:leading-[35.2px]">
          Get exclusive promotions & updates straight to your inbox.
        </p>

        <InputGroup />
      </div>
    </section>
  );
};

export default Join;
