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
            <footer className='w-full h-[60vh] bg-black'>

                {/* footer top */}
                <div className='w-full h-[88%] px-[15rem]'>

                    {/* contact section */}
                    <div
                        className='w-full h-[28%] flex items-center justify-start gap-[10rem]'
                        style={{ borderBottom: "1px solid rgba(128, 128, 128, 0.417)" }}
                    >
                        {/* location */}
                        <h2 className='flex items-center gap-[12px]'>
                            <MdLocationPin className='text-4xl -translate-y-[20%]' />
                            <div>
                                <span className='text-[25px]'>Find us</span>
                                <p className='font-light'>1010 Avenue, sw 54321, chandigarh</p>
                            </div>
                        </h2>
                        {/* call */}
                        <h2 className='flex items-center gap-[12px] mr-10'>
                            <MdCall className='text-4xl -translate-y-[20%]' />
                            <div>
                                <span className='text-[25px]'>Call Me</span>
                                <p className='font-light'>7261876702</p>
                            </div>
                        </h2>
                        {/* mail */}
                        <h2 className='flex items-center gap-[12px]'>
                            <MdEmail className='text-4xl -translate-y-[20%]' />
                            <div>
                                <span className='text-[25px]'>Mail us</span>
                                <p className='font-light'>skillszone100@gmail.com</p>
                            </div>
                        </h2>

                    </div>

                    {/* link section */}
                    <div className='w-full h-[72%] flex justify-between pt-[50px]'>

                        {/* logo */}
                        <h2 className='flex flex-col gap-3 pr-16 w-[30%] h-full'>
                            <img src={MKLlogo} className='h-[25%] w-[50%]' alt="Error loading logo" />
                            <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consequatur natus asperiores minima possimus pariatur qui.</p>
                            <p className='text-xl font-semibold'>Follow me on:</p>
                            <p className='flex gap-4 text-3xl'>
                                <a href="https://www.linkedin.com/in/manas-kumar-lal-758280298" target='_blank'><BsLinkedin className='text-[#1469C7]' /></a>
                                <a href="https://www.youtube.com/@mklskillszone" target='_blank'><BsYoutube className='text-[#FF0808]' /></a>
                                <a href="https://github.com/ManasKumarLal" target='_blank'><BsGithub className='' /></a>
                                <a href="https://wa.me/7261876702" target='_blank'><BsWhatsapp className='text-[#4AEB67]' /></a>
                            </p>
                        </h2>
                        {/* latest project */}
                        <h2 className='flex flex-col gap-6 pr-6 w-[30%] h-full'>
                            <div className='text-xl font-semibold relative w-fit mb-5 pseudoLine'>Latest Projects</div>
                            <div className='flex gap-4'>
                                <img className='w-[30%] rounded-md' src="https://assets.justinmind.com/wp-content/uploads/2021/11/split-screen-web-design-portfolio-template.png" alt="" />
                                <div>
                                    <p className='font-semibold'>E-commerce site uses full MERN Stack</p>
                                    <figure className='text-sm text-[lightseagreen] translate-y-2'>Aug 17, 2019</figure>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <img className='w-[30%] rounded-md' src="https://assets.justinmind.com/wp-content/uploads/2021/11/split-screen-web-design-portfolio-template.png" alt="" />
                                <div>
                                    <p className='font-semibold'>E-commerce site uses full MERN Stack</p>
                                    <figure className='text-sm text-[lightseagreen] translate-y-2'>Aug 17, 2019</figure>
                                </div>
                            </div>
                        </h2>
                        {/* quick link */}
                        <h2 className='flex flex-col gap-5 pl-2 w-[10%] h-full'>
                            <p className='text-xl font-semibold relative w-fit mb-5 pseudoLine'>Quick Links</p>
                            <ScrollLink className='hover:text-[lightseagreen] cursor-pointer' to="landingpage" smooth={true} duration={0}>Home</ScrollLink>
                            <ScrollLink className='hover:text-[lightseagreen] cursor-pointer' to="about" smooth={true} duration={0}>About</ScrollLink>
                            <ScrollLink className='hover:text-[lightseagreen] cursor-pointer' to="contact" smooth={true} duration={0}>Contact</ScrollLink>
                            <ScrollLink className='hover:text-[lightseagreen] cursor-pointer' to="project" smooth={true} duration={0}>Project</ScrollLink>
                        </h2>
                        {/* subscribe */}
                        <h2 className='flex flex-col gap-5 pl-4 w-[30%] h-full'>
                            <div className='text-xl font-semibold relative w-fit mb-5 pseudoLine'>Subscribe</div>
                            <p className='text-sm'>Don’t miss to subscribe to my new feeds, kindly fill the form below.</p>
                            <div className='w-full relative'>
                                <input
                                    className='px-4 py-3 w-[90%] bg-[#2E2E2E] rounded-sm outline-none'
                                    type="email"
                                    placeholder='email'
                                />
                                <FaTelegramPlane className='text-2xl absolute top-[50%] translate-y-[-50%] right-[10%] bg-[lightseagreen] h-full w-[15%] px-4' />
                            </div>
                        </h2>

                    </div>

                </div>

                {/* footer bottom */}
                <div className='w-full h-[12%] px-[15rem] flex items-center justify-between bg-[#202020]'>
                    <div>Copyright © 2023, All Right Reserved <span className='text-[lightseagreen]'>MKL</span></div>
                    <div className='flex items-center justify-center gap-[3rem] mr-[3%]'>
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
