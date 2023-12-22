import React, { useEffect } from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import EachProject from './components/eachProject/EachProject'
import Navbar from './components/Navbar/Navbar'
// import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
  // useEffect(() => {
  //   new LocomotiveScroll({
  //     el: document.querySelector('[data-scroll-container]'),
  //     smooth: false,
  //     inertia: 0.8,
  //   });
  // }, [])

  return (
    <>
      <Navbar />
      <div data-scroll-container>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Routes>
        <Route path='/:id' element={<EachProject />} />
      </Routes>
    </>
  )
}

export default App
