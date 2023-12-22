import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import projects from '../../jsons/projects';
import { BsGithub } from "react-icons/bs";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./EachProject.css"

const EachProject = () => {
    const { id } = useParams();
    const [projectData, setProjectData] = useState({});
    console.log(projectData)
    const getData = () => {
        const response = projects.filter(item => item.id === id);
        setProjectData({ ...response[0] })
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <>
            <div className='single_project_container'>
                <h1>{id}. Another ones, I've build</h1>
                <div className="content">
                    <div className="image">
                        <img src={projectData.imgSrc} alt="" />
                        <div className="redirect">
                            <a href={projectData.gitHubSrc} target='_blank'><BsGithub className='text-white' />Explore Project Code</a>
                            <a href={projectData.projectSrc} target='_blank'><FaArrowUpRightFromSquare className='text-white' />Visit Project</a>
                        </div>
                    </div>
                    <div className="text">
                        <p className='text-[#57D3BC]'>{projectData.title}</p>
                        <p>
                            <span className='text-[#57D3BC]'>{projectData.category} </span>
                            based project
                        </p>
                        <div className='overflow_card'>
                            This is an
                            <span className='text-[#57D3BC]'>{projectData.level}</span>
                            project using one of my important
                            <span className='text-[#57D3BC]'>{projectData.category}</span>
                            skill. One of the
                            <span className='text-[#57D3BC]'> {projectData.persons} </span>
                            projects.
                            {projectData.persons === "Individual" && <span> (made by me)</span>}
                            <br />
                            <p>
                                Skills used :-
                                <br />
                                {projectData.skills}
                            </p>
                        </div>
                        <div className='skills_list'>
                            Common experties in all projects:-
                            <br />
                            <p className='flex flex-wrap gap-3'>
                                <span>VsCode</span>
                                <span>Version Control/Git</span>
                                <span>GitHub</span>
                                <span>Web Development Frameworks:</span>
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
