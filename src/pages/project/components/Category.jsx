import React, { useState } from 'react'
import './Category.css'
import { useProjectContext } from '../context/Provider'


const Category = () => {
  const { projects, setFilteredProjects } = useProjectContext();
  const [activeAllCategories, setActiveAllCategories] = useState(true);

  const filterProjects = (category) => {
    if (category !== "All Category") {
      setActiveAllCategories(false);
      const filteredProjects = projects.filter((item) => item.category === category)
      setFilteredProjects(filteredProjects);
      return;
    }
    console.log(projects);
    setFilteredProjects(projects);
  }
  return (
    <>
      <div className='project-category'>
        <button onClick={() => filterProjects("All Category")} className={activeAllCategories ? 'active' : ''}>All Category</button>
        <button onClick={() => filterProjects("CSS")}>CSS</button>
        <button onClick={() => filterProjects("Bootstrap")}>Bootstrap</button>
        <button onClick={() => filterProjects("Javascript")}>Javascript</button>
        <button onClick={() => filterProjects("React Js")}>React JS</button>
        <button onClick={() => filterProjects("Tailwind CSS")}>Tailwind CSS</button>
        <button onClick={() => filterProjects("Node JS")}>Node JS</button>
        <button onClick={() => filterProjects("MERN Stack")}>MERN Stack</button>
      </div>

    </>
  )
}

export default Category
