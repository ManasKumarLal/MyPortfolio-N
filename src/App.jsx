import React, { useEffect } from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import EachProject from './components/eachProject/EachProject'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/Footer'
import { useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';


const App = () => {
  const location = useLocation();

  return (
    <>
      <ToastContainer theme="dark" className="select-none" />
      {location.pathname === "/" && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<EachProject />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
