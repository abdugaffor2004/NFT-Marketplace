import Button from './button';
import envelopeIcon from '../assets/EnvelopeSimple.svg';
import { useWindowSize } from '../hooks/useWindowSize';

const InputGroup = ({ className }) => {
  const [width] = useWindowSize();

  return (
    <div className={`mt-10 lg:flex md:min-h-[62px] ${className}`}>
      <input
        className="w-full px-5 py-3 text-black outline-none placeholder:text-black placeholder:font-workSans rounded-[20px]"
        placeholder={`${width >= 1200 ? 'Enter your email here' : 'Enter Your Email Address'} `}
        type="text"
      />
      <Button
        className="mt-4 h-[46px] sm:w-full md:w-auto lg:mt-0 lg:h-full lg:w-[211px] lg:ml-[-30px]"
        icon={envelopeIcon}
        title="Subscribe"
      />
    </div>
  );
};

export default InputGroup;
