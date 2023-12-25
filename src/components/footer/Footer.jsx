import React from 'react'
import './Footer.css'
import { MdCall, MdEmail, MdLocationPin } from "react-icons/md";
import { BsLinkedin, BsYoutube, BsGithub, BsWhatsapp } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import MKLlogo from '../../components/Navbar/mkl.jpg'
import { Link as ScrollLink } from 'react-scroll'

const Footer = () => {
    return (
        <>
            <footer>

                {/* footer top */}
                <div className='footer_top'>

                    {/* contact section */}
                    <div className='footer_top_details'>

                        {/* location */}
                        <h2 className='location'>
                            <MdLocationPin className='icon' />
                            <div>
                                <span>Find us</span>
                                <p>1010 Avenue, sw 54321, chandigarh</p>
                            </div>
                        </h2>
                        {/* call */}
                        <h2 className='call'>
                            <MdCall className='icon' />
                            <div>
                                <span>Call Me</span>
                                <p>7261876702</p>
                            </div>
                        </h2>
                        {/* mail */}
                        <h2 className='mail'>
                            <MdEmail className='icon' />
                            <div>
                                <span>Mail us</span>
                                <p>skillszone100@gmail.com</p>
                            </div>
                        </h2>

                    </div>

                    {/* link section */}
                    <div className='footer_links'>
                        <div className="wrapper1">
                            {/* logo */}
                            <h2 className='about'>
                                <img src={MKLlogo} className='logo' alt="Error loading logo" />
                                <p className='p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consequatur natus asperiores minima possimus pariatur qui.</p>
                                <p className='p2'>Follow me on:</p>
                                <p className='p3'>
                                    <a href="https://www.linkedin.com/in/manas-kumar-lal-758280298" target='_blank'><BsLinkedin className='text-[#1469C7]' /></a>
                                    <a href="https://www.youtube.com/@mklskillszone" target='_blank'><BsYoutube className='text-[#FF0808]' /></a>
                                    <a href="https://github.com/ManasKumarLal" target='_blank'><BsGithub className='' /></a>
                                    <a href="https://wa.me/7261876702" target='_blank'><BsWhatsapp className='text-[#4AEB67]' /></a>
                                </p>
                            </h2>
                            {/* latest project */}
                            <h2 className='projects'>
                                <div className='div1 pseudoLine'>Latest Projects</div>
                                <div className='img_div'>
                                    <img src="https://assets.justinmind.com/wp-content/uploads/2021/11/split-screen-web-design-portfolio-template.png" alt="Error loading image" />
                                    <div>
                                        <p className='font-semibold'>E-commerce site uses full MERN Stack</p>
                                        <figure className='text-sm text-[lightseagreen] translate-y-2'>Aug 17, 2019</figure>
                                    </div>
                                </div>
                                <div className='img_div'>
                                    <img src="https://assets.justinmind.com/wp-content/uploads/2021/11/split-screen-web-design-portfolio-template.png" alt="" />
                                    <div>
                                        <p className='font-semibold'>E-commerce site uses full MERN Stack</p>
                                        <figure className='text-sm text-[lightseagreen] translate-y-2'>Aug 17, 2019</figure>
                                    </div>
                                </div>
                            </h2>
                        </div>
                        <div className="wrapper2">
                            {/* quick link */}
                            <h2 className='links'>
                                <p className='pseudoLine'>Quick Links</p>
                                <ScrollLink className='hover:text-[lightseagreen] cursor-pointer' to="landingpage" smooth={true} duration={0}>Home</ScrollLink>
                                <ScrollLink className='hover:text-[lightseagreen] cursor-pointer' to="about" smooth={true} duration={0}>About</ScrollLink>
                                <ScrollLink className='hover:text-[lightseagreen] cursor-pointer' to="contact" smooth={true} duration={0}>Contact</ScrollLink>
                                <ScrollLink className='hover:text-[lightseagreen] cursor-pointer' to="project" smooth={true} duration={0}>Project</ScrollLink>
                            </h2>
                            {/* subscribe */}
                            <h2 className='subscribe'>
                                <div className='div1 pseudoLine'>Subscribe</div>
                                <p className='text-sm'>Don’t miss to subscribe to my new feeds, kindly fill the form below.</p>
                                <div className='div2'>
                                    <input
                                        type="email"
                                        placeholder='email'
                                    />
                                    <FaTelegramPlane className='icon' />
                                </div>
                            </h2>
                        </div>
                    </div>

                </div>

                {/* footer bottom */}
                <div className='footer_bottom'>
                    <div>Copyright © 2023, All Right Reserved <span className='text-[lightseagreen]'>MKL</span></div>
                    <div className='div2'>
                        <p>Design</p>
                        <p>Logic</p>
                        <p>Testing</p>
                        <p>Responsive</p>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer
