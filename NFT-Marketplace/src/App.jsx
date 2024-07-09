import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Trending } from './components/Trending';
import { HowItWorks } from './components/HowItWorks';
import { Creators } from './components/Creators';
import { Categories } from './components/Categories';
import { DiscoverNft } from './components/DiscoverNft';
import { Auction } from './components/Auction';
import { Join } from './components/Join';
import { Footer } from './components/Footer';

export const App = () => (
  <div className="bg-background w-full overflow-hidden">
    <div className="sm:px-[3.125rem] px-[1.875rem] flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full">
        <Navbar />
      </div>
    </div>

    <div className="bg-primary flex justify-center items-start sm:px-[4.5rem] md:px-[7.1875rem] px-[1.875rem] sm:py-20 py-[2.5rem] pb-0">
      <div className="xl:max-w-[1280px] w-full">
        <Hero />
        <Trending />
        <Creators />
        <Categories />
        <DiscoverNft />
      </div>
    </div>

    <div className={`bg-primary flex justify-center items-start`}>
      <Auction />
    </div>

    <div className="bg-primary flex justify-center items-start sm:px-[4.5rem] md:px-[7.1875rem] px-[1.875rem]">
      <div className="xl:max-w-[1280px] w-full">
        <HowItWorks />
        <Join />
      </div>
    </div>

    <div className="bg-backgroundSecond flex justify-center items-start sm:px-[4.5rem] md:px-[7.1875rem] px-[1.875rem] pb-10 mt-[2.5rem] sm:mt-[5rem]">
      <div className="xl:max-w-[1280px] w-full">
        <Footer />
      </div>
    </div>
  </div>
);
