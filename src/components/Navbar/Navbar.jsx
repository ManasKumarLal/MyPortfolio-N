import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import NavRoutes from '../../jsons/nav'
import mklLogo from './mkl.jpg'
import Button from '../button/Button'
import { Link as ScrollLink } from 'react-scroll';
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import AppDownload from './AppDownload'

const Navbar = () => {
  const navbarRef = useRef(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [menuToggle, setMenuToggle] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const navbar = navbarRef.current;
      if (currentScrollPos > prevScrollPos) {
        navbar.style.left = "-100vw"
      } else {
        navbar.style.left = "0px"
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
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

        <div className={`routes ${menuToggle ? "" : "routes_none"} `}>
          {
            NavRoutes.map((item, index) => {
              return <ScrollLink
                className='route cursor-pointer'
                key={index}
                to={item.path}
                smooth={true}
                duration={0}>
                <span className='hello'>{item.name}</span>
              </ScrollLink>

            })
          }
        </div>

        <div className="contact">
          <Button route="contact" text="Contact" h="40px" w="120px" />
        </div>

        {/* mobile menu */}
        <div className='flex items-center gap-3'>
          <AppDownload />
          {
            menuToggle
              ?
              <div className="mobileMenu">
                <MdOutlineCloseFullscreen className='.mobileMenu' onClick={() => setMenuToggle(false)} />
              </div>
              :
              <div className="mobileMenu">
                <CiMenuFries className='.mobileMenu' onClick={() => setMenuToggle(true)} />
              </div>
          }
        </div>

      </div>

      <img className={`nav_dustbin ${menuToggle === false && 'nav_dustbin_zoom'}`} src="https://purepng.com/public/uploads/large/purepng.com-trash-cantrash-cansteelplasticdustbinrecyclebiniconclipart-1421526646079jpohr.png" alt="" />
      <img className={`nav_blast ${menuToggle === true && 'nav_blast_zoom'}`} src="https://www.freepnglogos.com/uploads/explosion/explosion-clipart-file-explosion-icon-6.png" alt="" />
    </>
  )
}

export default Navbar
