import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import NavRoutes from '../../jsons/nav'
import mklLogo from './mkl.jpg'
import Button from '../button/Button'
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const navbarRef = useRef(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const navbar = navbarRef.current;
      if (currentScrollPos > prevScrollPos) {
        navbar.style.top = "-5rem"
      } else {
        navbar.style.top = "0px"
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.539)"
      }
      setPrevScrollPos(currentScrollPos);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [prevScrollPos])

  return (
    <>
      <div className="nav_container" ref={navbarRef}>
        <div className="brand">
          <img src={mklLogo} alt="error loading image" />
        </div>
        <div className="routes">
          {
            NavRoutes.map((item, index) => {
              return <ScrollLink
                key={index}
                className='cursor-pointer'
                to={item.path}
                smooth={true}
                duration={0}>
                {item.name}
              </ScrollLink>
            })
          }
        </div>
        <div className="contact">
          <Button route="contact" text="Contact" h="40px" w="120px" />
        </div>
      </div>
    </>
  )
}

export default Navbar
