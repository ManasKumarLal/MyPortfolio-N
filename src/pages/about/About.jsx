import React from 'react'
import './About.css'
import Design from './components/Design'
import Services from './components/Services'

const about = () => {
  return (
    <div id='about' className='about-container'>
      <Design />
      <Services/>
    </div>
  )
}

export default about
