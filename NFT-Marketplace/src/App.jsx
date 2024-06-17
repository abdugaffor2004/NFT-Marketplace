import React from 'react'
import styles from './style'
import { Hero, Navbar } from './components'
import Trending from './components/Trending'

const App = () => (
  <div className='bg-background w-full overflow-hidden'>
    
    <div className={`${styles.paddingXHeader} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>


    <div className={`bg-primary ${styles.flexStart} ${styles.paddingX} ${styles.paddingY}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <Trending />
      </div>
    </div>
  

  </div>
)

export default App