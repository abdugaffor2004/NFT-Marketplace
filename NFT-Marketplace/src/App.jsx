import React from 'react'
import styles from './style'
import { Hero, Navbar } from './components'

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
      </div>
    </div>
  

  </div>
)

export default App