import React from 'react'
import './LandingPage.css'
import BgVideo from './homebg.mp4'
import { TypeAnimation } from 'react-type-animation';
import { BsLinkedin, BsYoutube, BsGithub, BsWhatsapp } from "react-icons/bs";
import Button from '../../components/button/Button';
import IMG1 from './04.jpg'

const Home = () => {
    const skills = [
        ' Specializing in the MERN stack, I excel in crafting robust and scalable solutions that seamlessly marry form and function.',
        100,
        ' My commitment to staying at the forefront of industry trends, coupled with a keen eye for design and user experience, ensures that each project I undertake is a testament to quality and innovation.',
        100,
    ]
    return (
        <>
            <section className='home_container'>
                <video src={BgVideo} autoPlay muted loop></video>
                <div className='content'>
                    <div className='text'>
                        <h1>Hello!</h1>
                        <h2>
                            I am
                            <TypeAnimation
                                sequence={[
                                    ' manas kumar lal',
                                    100,
                                ]}
                                wrapper="span"
                                style={{ color: "lightseagreen" }}
                                speed={25}
                                repeat={Infinity}
                            />
                        </h2>
                        <p>
                            As a seasoned professional web developer, I bring a wealth of expertise in the dynamic world of web technologies.
                            <TypeAnimation
                                sequence={skills}
                                wrapper="span"
                                speed={70}
                                deletionSpeed={95}
                                repeat={Infinity}
                            />
                        </p>

                        <div className='buttons'>
                            <Button route="#about" text="More About Me" />
                            <Button route="#contact" text="Hire Me" />
                            <Button route="#project" text="See My Projects" />
                        </div>

                        <div className="icons">
                            <a href="https://www.linkedin.com/in/manas-kumar-lal-758280298" target="_blank" rel="noopener noreferrer">
                                <BsLinkedin className='text-[#1469C7] bg-white p-1 rounded-sm' />
                            </a>
                            <a href="https://www.youtube.com/@mklskillszone" target="_blank" rel="noopener noreferrer">
                                <BsYoutube className='text-[#FF0808] bg-white rounded-md px-1' />
                            </a>
                            <a href="https://github.com/ManasKumarLal" target="_blank" rel="noopener noreferrer">
                                <BsGithub />
                            </a>
                            <a href="https://wa.me/7261876702" target="_blank" rel="noopener noreferrer">
                                <BsWhatsapp className='bg-[#4AEB67] px-1 rounded-md' />
                            </a>
                        </div>
                    </div>

                    <div className="image">
                        <img src={IMG1} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
