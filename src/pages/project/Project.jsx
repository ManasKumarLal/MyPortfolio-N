import React from 'react'
import './Project.css'
import Category from './components/Category'
import ProjectContent from './components/ProjectContent'
import { FcSearch } from "react-icons/fc";
import { useProjectContext } from './context/Provider';
import Level from './components/Level';

const Project = () => {
    const { projects, filteredProjects, setFilteredProjects } = useProjectContext();

    const searchProjects = (e) => {
        console.log("searching")
        const searchTerm = e.target.value
        // Create a case-insensitive regex based on the search term
        const regex = new RegExp(searchTerm, 'i');

        // Filter projects based on the search term
        const filteredProjects = projects.filter((project) => {
            return (
                regex.test(project.projectSrc) ||
                regex.test(project.title) ||
                regex.test(project.category) ||
                regex.test(project.level) ||
                regex.test(project.skills)
            );
        });

        setFilteredProjects(filteredProjects);
    };

    return (
        <>
            <div id='project' className="project_container">

                <div className='sideBar sideBar_pc'>
                    <div className='w-[90%]'>
                        <Category />
                    </div>
                </div>

                <div className="project_section">

                    {/* three navbars for switching between devices 👇👇 */}
                    <div className="navbar search_pc">
                        <p>Total Results : {filteredProjects?.length}</p>
                        <div>
                            <Level />
                        </div>
                        <p className='search'>
                            <input type="search" onChange={searchProjects} placeholder='Search project...' />
                            {/* <FcSearch className='bg-[#363636] h-[85%] w-[50px] p-1 rounded-r-[10px] cursor-pointer' /> */}
                        </p>
                    </div>

                    <div className="navbar search_mobile">
                        <div className='categories'>
                            <Category />
                        </div>
                        <div className='levels'>
                            <Level />
                        </div>
                    </div>

                    <div className="navbar search_mobile mt-1">
                        <p className='search'>
                            <input type="search" onChange={searchProjects} placeholder='Search project...' />
                            {/* <FcSearch className='bg-[#363636] h-[85%] w-[50px] p-2 rounded-r-[10px] cursor-pointer' /> */}
                        </p>
                        <p className='total_results'>Total Results : {filteredProjects?.length}</p>
                    </div>
                    {/* three navbars for switching between devices👆👆 */}

                    <div className="project_content">
                        <ProjectContent />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Project
