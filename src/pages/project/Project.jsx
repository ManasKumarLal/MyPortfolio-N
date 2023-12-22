import React, { useEffect, useRef } from 'react'
import './Project.css'
import Category from './components/Category'
import ProjectContent from './components/ProjectContent'
import { FcSearch } from "react-icons/fc";
import { MyProvider } from './context/Provider';

const Project = () => {

    return (
        <>
            <MyProvider>
                <div id='project' className="project_container">
                    <div className='sideBar'>
                        <div className='w-[250px] relative mt-20'>
                            <Category/>
                        </div>
                    </div>
                    <div className="project_section">
                        <div className="search">
                            <p>Total Results : 13</p>
                            <p>
                                <button>B: Basic</button>
                                <button>I: Intermmediate</button>
                                <button>A: Advance</button>
                            </p>
                            <p>
                                <input type="search" placeholder='Search project...' />
                                <FcSearch className='bg-[#363636] h-full w-[50px] p-2 rounded-r-[10px] cursor-pointer' />
                            </p>
                        </div>
                        <div className="project_content">
                            <ProjectContent />
                        </div>
                    </div>
                </div>
            </MyProvider>
        </>
    )
}

export default Project
