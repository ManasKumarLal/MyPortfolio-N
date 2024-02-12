import React, { useState } from 'react'
import './Category.css'
import { useProjectContext } from '../context/Provider'

const categories = [
  'All Category',
  "PRODUCTION",
  "CSS",
  "Bootstrap",
  "Javascript",
  "React JS",
  "Tailwind CSS",
  "Node JS",
  "MERN Stack"
]

const Category = () => {
  const { projects, setFilteredProjects } = useProjectContext();
  const [activeCategory, setActiveCategory] = useState("All Category");

  const filterProjects = (category) => {
    if (category !== "All Category") {
      setActiveCategory(category);
      const filteredProjects = projects.filter((item) => item.category === category)
      setFilteredProjects(filteredProjects);
      return;
    }
    setFilteredProjects(projects);
    setActiveCategory("All Category")
  }
  return (
    <>
      <div
        className='project_category_pc border-[1px] border-[lightseagreen]'
      >
        <div className={`options darkSelector`}>
          {
            categories.map((item, index) => (
              <button className={`${item === activeCategory && 'active'}`} key={index} onClick={() => filterProjects(item)}>{item}</button>
            ))
          }
        </div>
      </div>

      <div
        className='project_category_mobile'
      >
        <div className={`options`}>
          <select onChange={(e) => filterProjects(e.target.value)}>
            {
              categories.map((item, index) => (
                <option key={index} value={item} >{item}</option>
              ))
            }
          </select>
        </div>
      </div>
    </>
  )
}

export default Category
