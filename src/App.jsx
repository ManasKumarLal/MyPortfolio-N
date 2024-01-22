import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import EachProject from './components/eachProject/EachProject'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/Footer'
import { useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import TriGif from './assets/tri.gif'
import { Link as ScrollLink } from 'react-scroll'

const App = () => {

  const location = useLocation();
  
  return (
    <>

      <ScrollLink className='mainGif_wrapper' to="project">
        <img className='mainGif' src={TriGif} alt="error loading" />
      </ScrollLink>
      <div className='mainGif_popup'>Click and see my projects</div>

      <ToastContainer theme="dark" className="select-none" />

      {location.pathname === "/" && <Navbar/>}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<EachProject />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
