import React from 'react'
import './LandingPage.css'
import { TypeAnimation } from 'react-type-animation';
import { BsLinkedin, BsYoutube, BsGithub, BsWhatsapp } from "react-icons/bs";
import Button from '../../components/button/Button';
import BgVideo from './homebg6.mp4'
import IMG2 from './profile3.jpg'

const Home = () => {

    const skills = [
        ' Full Stack Developer',
        100,
        ' Web Designer',
        100,
        ' Logic Builder',
        100,
        ' Frontend Developer',
        100,
        ' Backend Developer',
        100,
    ]
    return (
        <>
            <section id='landingpage' className='home_container'>
                <video src={BgVideo} autoPlay muted loop></video>
                <div className='content'>

                    <div className='text'>
                        <div>
                            <h1>Hello!</h1>
                            <h2>
                                I am
                                <TypeAnimation
                                    sequence={[
                                        ' Manas kumar lal',
                                        100,
                                    ]}
                                    wrapper="span"
                                    style={{ color: "lightseagreen" }}
                                    speed={25}
                                    repeat={Infinity}
                                />
                            </h2>
                            <p>
                                As a seasoned professional web developer,
                                <br />
                                I bring a wealth of expertise in the dynamic world of web technologies.
                                <br />
                                <span className='text-2xl'>
                                    I am a
                                    <b className='text-[#20B2ABC4]'>
                                        <TypeAnimation
                                            sequence={skills}
                                            wrapper="span"
                                            speed={30}
                                            deletionSpeed={30}
                                            repeat={Infinity}
                                        />
                                    </b>
                                </span>
                            </p>

                            <div className='buttons'>
                                <Button route="about" text="More About Me" w="160px" />
                                <Button route="contact" text="Hire Me" w="160px" />
                                <Button route="project" text="See My Projects" w="160px" />
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
                    </div>

                    <div className="image">
                        <div className="wrapper">
                            <img src={IMG2} alt="" />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Home
