import React, { useEffect } from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import EachProject from './components/eachProject/EachProject'
import Navbar from './components/Navbar/Navbar'
// import LocomotiveScroll from 'locomotive-scroll'
import Footer from './components/footer/footer'
import { useLocation } from 'react-router-dom'


const App = () => {
  const location = useLocation();

  // useEffect(() => {
  //   new LocomotiveScroll({
  //     el: document.querySelector('[data-scroll-container]'),
  //     smooth: true,
  //     inertia: 0.8,
  //   });
  // }, []);

  return (
    <>
      {location.pathname === "/" && <Navbar />}
      <div data-scroll-container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<EachProject />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
