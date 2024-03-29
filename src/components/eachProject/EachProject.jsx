import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import projects from '../../jsons/projects';
import { BsGithub } from "react-icons/bs";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./EachProject.css"
import { Link } from 'react-router-dom';

const EachProject = () => {
    const { pathname } = useLocation();
    const { id } = useParams();
    const [projectData, setProjectData] = useState({});
    const homeIcon = useRef(null);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    console.log(id);

    const getData = () => {
        const response = projects.filter(item => item.id === id);
        setProjectData({ ...response[0] })
    }

    useEffect(() => {
        getData();
        window.scrollTo(0, 0);
    }, [pathname])


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const homeIconElement = homeIcon.current;
            if (currentScrollPos > prevScrollPos) {
                homeIconElement.style.transform = 'translateY(-10rem)';
            } else {
                homeIconElement.style.transform = 'translateY(0)';
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
            <div className='single_project_container'>

                <Link to='/' >
                    <img
                        ref={homeIcon}
                        className='homeIcon'
                        src="https://i.pinimg.com/originals/a8/8a/8c/a88a8cd82ccd942fe3593d73fc1fb8f7.png"
                        alt="Error loading logo"
                    />
                </Link>

                <h1>Another ones, I've build</h1>
                <div className="content">

                    <div className="image">
                        <img src={`../../../../${projectData.imgSrc}`} alt="" />
                        <div className="redirect">
                            <a href={projectData?.gitHubSrc} target='_blank'><BsGithub className='text-white' />Explore Project Code</a>
                            <a href={projectData?.projectSrc} target='_blank'><FaArrowUpRightFromSquare className='text-white' />Visit Project</a>
                        </div>
                    </div>

                    <div className="text">

                        <p className='text-[#57D3BC]'># {projectData?.title}</p>

                        <p>
                            <span className='text-[#57D3BC]'>{projectData?.category} </span>
                            based project
                        </p>

                        <div className='overflow_card'>
                            This is an
                            <span className='text-[#57D3BC]'> {projectData?.level} </span>
                            project using one of my important
                            <span className='text-[#57D3BC]'> {projectData?.category} </span>
                            skill. One of the
                            <span className='text-[#57D3BC]'> {projectData?.persons} </span>
                            projects.
                            {projectData?.persons === "Individual" && <span> (made by me)</span>}
                            <br />
                            <p>
                                <span className='text-[#57D3BC]'>Description :-</span>
                                <br />
                                {projectData?.keywords}
                            </p>
                        </div>

                        <div className='skills_list'>
                            <span className='text-[lightseagreen]'>Common experties in all projects :-</span>
                            <br />
                            <p>
                                <span>VsCode</span>
                                <span>Version Control/Git</span>
                                <span>GitHub</span>
                                <span>Web Development Frameworks</span>
                                <span>Responsive Typography</span>
                                <span>Continuous Learning</span>
                                <span>Testing</span>
                                <span>Command Line/CLI</span>
                                <span>Web Security Best Practices</span>
                                <span>HTML</span>
                                <span>Deployment</span>
                                <span>Build Tools and Task Runners</span>
                            </p>
                        </div>

                        <figure></figure>
                    </div>

                </div>
            </div>
        </>
    )
}

export default EachProject
