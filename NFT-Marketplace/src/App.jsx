import styles from './style';
import {
  Auction,
  Categories,
  Creators,
  DiscoverNft,
  Footer,
  Hero,
  HowItWorks,
  Join,
  Navbar,
  Trending,
} from './components';
import { useWindowSize } from './hooks/useWindowSize';

const App = () => {
  const [windowWidth] = useWindowSize();

  return (
    <div className="bg-background w-full overflow-hidden">
      <div className={`${styles.paddingXHeader} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX} ${styles.paddingY} pb-0`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Trending width={windowWidth} />
          <Creators width={windowWidth} />
          <Categories />
          <DiscoverNft />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <Auction />
      </div>

      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <HowItWorks />
          <Join />
        </div>
      </div>

      <div
        className={`bg-backgroundSecond ${styles.flexStart} ${styles.paddingX} pb-10 mt-[2.5rem] sm:mt-[5rem]`}
      >
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
