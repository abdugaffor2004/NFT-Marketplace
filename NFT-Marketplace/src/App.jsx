import React from 'react'
import styles from './style'
import { Auction, Categories, Creators, DiscoverNft, Hero, HowItWorks, Join, Navbar, Trending} from './components'



const App = () => (
  <div className='bg-background w-full overflow-hidden'>
    
    <div className={`${styles.paddingXHeader} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>


    <div className={`bg-primary ${styles.flexStart} ${styles.paddingX} ${styles.paddingY} pb-0`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <Trending />
        <Creators />
        <Categories />
        <DiscoverNft />
        {/* <HowItWorks /> */}
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
        <Auction />
    </div>

    <div className={`bg-primary ${styles.flexStart} ${styles.paddingX} pb-20`}>
      <div className={`${styles.boxWidth}`}>
        <HowItWorks />
        <Join />
      </div>
    </div>
  

  </div>
)

export default App