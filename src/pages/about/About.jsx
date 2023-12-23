import React from 'react'
import './About.css'
import Design from './components/Design'
import Services from './components/Services'
import Swiper from './components/Swiper'

const about = () => {
  return (
    <div id='about' className='about-container'>
      <Design />
      <Services/>
      <Swiper/>
    </div>
  )
}

export default about
