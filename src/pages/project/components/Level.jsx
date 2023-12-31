import React from 'react'
import './Level.css'
import { useProjectContext } from '../context/Provider'

const Level = () => {

    const { projects, setFilteredProjects } = useProjectContext();
    const filterProjects = (level) => {
        if (level !== "All Levels") {
            const filteredProjects = projects.filter((item) => item.level === level)
            setFilteredProjects(filteredProjects);
            return;
        }
        setFilteredProjects(projects);
    }

    return (
        <div className='project_levels'>
            <select onChange={(e) => filterProjects(e.target.value)} name="" id="" className='text-black py-2 px-2'>
                <option value="All Levels">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advance">Advance</option>
            </select>
        </div>
    )
}

export default Level
