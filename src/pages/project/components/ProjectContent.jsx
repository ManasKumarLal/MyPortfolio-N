import React, { useEffect, useRef, useState } from 'react'
import './ProjectContent.css'
import { useNavigate } from 'react-router-dom'
import { useProjectContext } from '../context/Provider';
import GlowButton from './GlowButton';

const ProjectContent = () => {
    const navigate = useNavigate();
    const { filteredProjects } = useProjectContext();
    const containerRef = useRef();
    const contentRef = useRef();
    const [showMoreOption, setShowMoreOption] = useState("");

    const checkExtensibility = () => {
        const containerHeight = containerRef.current.offsetHeight;
        const contentHeight = contentRef.current.offsetHeight;
        console.log(containerHeight, contentHeight)
        if (contentHeight > containerHeight) {
            setShowMoreOption("showmore");
            return;
        }
        else setShowMoreOption("");
    }

    useEffect(() => {
        checkExtensibility();
    }, [filteredProjects])

    return (
        <>
            <section className={`projectContent_container   ${showMoreOption === "showmore" && "projectContent_blur"} ${showMoreOption === "showless" ? "h-full" : "h-[77vh]"}`} ref={containerRef}>
                <div className="projectContent_wrapper" ref={contentRef}>
                    {
                        filteredProjects.length <= 0
                            ?
                            <h1 className='not_available'>Coming Soon !!!</h1>
                            :
                            filteredProjects?.map((item, index) => {
                                return <div key={index}>
                                    <img src={item.imgSrc} alt="" onLoad={checkExtensibility} />
                                    <div className="overlay">
                                        <span>{item.title}</span>
                                        <p onClick={() => navigate(item.id)}>
                                            <GlowButton />
                                        </p>
                                    </div>
                                </div>
                            })
                    }
                </div>
            </section>
            {showMoreOption === "showmore" && <button onClick={() => setShowMoreOption("showless")} className='showmoreOptions_button'>show more</button>}
            {showMoreOption === "showless" && <button onClick={() => setShowMoreOption("showmore")} className='showmoreOptions_button'>show less</button>}
            {showMoreOption === "" && <button></button>}
        </>
    )
}

export default ProjectContent
