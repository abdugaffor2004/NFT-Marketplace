import logo from '../assets/logo.svg';
import { footerLinks, socialMedia } from '../data';
import { getImage } from '../helpers';
import { useWindowSize } from '../hooks/useWindowSize';
import Button from './button';
import envelopeIcon from '../assets/EnvelopeSimple.svg';

const Footer = () => {
  const { width } = useWindowSize();

  return (
    <footer className="text-[#CCCCCC]">
      <div className="pt-[2.5rem] md:flex md:flex-wrap md:justify-between md:gap-[30px]">
        <div className="xl:w-[327px]">
          <img src={logo} alt="logo" />
          <p className="font-workSans font-normal mt-5 lg:w-[238px]">
            NFT marketplace UI created with Anima for Figma.
          </p>
          <div className="mt-5">
            <span>Join our community</span>
            <div className="flex mt-[0.9375rem]">
              {socialMedia.map(item => (
                <img
                  className="mr-2.5 last:mr-0"
                  key={item.title}
                  src={getImage(item.icon, 'footer')}
                  alt={`${item.title}Icon`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[1.875rem] md:mt-0 ">
          <h6 className="font-bold font-spaceMono text-[1.375rem] text-white">Explore</h6>
          <div className="flex flex-col ">
            {footerLinks.map(item => (
              <a key={item.title} className="mt-5" href={item.url}>
                {item.title}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-[1.875rem] md:mt-0 ">
          <h6 className="font-bold font-spaceMono text-[1.375rem] text-white">
            Join Our Weekly Digest
          </h6>
          <p className="font-workSans font-normal mt-5 lg:w-[330px]">
            Get exclusive promotions & updates straight to your inbox.
          </p>

          <div className={`mt-5 xs_sm:flex md:min-h-[62px] xs_sm:w-[420px]`}>
            <input
              className="w-full px-5 py-3 text-black outline-none placeholder:text-black placeholder:font-workSans rounded-[20px]"
              placeholder={`${width >= 834 ? 'Enter your email here' : 'Enter Your Email Address'} `}
              type="text"
            />
            <Button
              className="mt-4 h-[46px] xs_sm:w-auto xs_sm:mt-0 xs_sm:h-full xs_sm:ml-[-35px] "
              icon={envelopeIcon}
              title="Subscribe"
            />
          </div>
        </div>
      </div>

      <div className=" border-t-[1px] border-grey mt-[1.875rem] lg:pt-0">
        <span className="block mt-[20px] text-xs">Ⓒ NFT Market. Use this template freely.</span>
      </div>
    </footer>
  );
};

export default Footer;
