import { createContext, useContext, useState } from "react";
import project from '../../../jsons/projects'

const context = createContext();

export const useProjectContext = () => {
    return useContext(context);
}

export const MyProvider = ({ children }) => {
    const [projects, setProjects] = useState(project);
    const [filteredProjects, setFilteredProjects] = useState(project);
    const properties = {
        projects,
        setProjects,
        filteredProjects,
        setFilteredProjects,
    }
    return (
        <context.Provider value={properties}>
            {children}
        </context.Provider>
    )
}