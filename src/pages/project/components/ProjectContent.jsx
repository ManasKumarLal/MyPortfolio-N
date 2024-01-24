import React, { useEffect, useRef, useState } from 'react'
import './ProjectContent.css'
import { useNavigate } from 'react-router-dom'
import { useProjectContext } from '../context/Provider';
import GlowButton from './GlowButton';
import { Link as ScrollLink, animateScroll as scroll} from 'react-scroll';

const ProjectContent = () => {
    const navigate = useNavigate();
    const { filteredProjects } = useProjectContext();
    const containerRef = useRef();
    const contentRef = useRef();
    const [showMoreOption, setShowMoreOption] = useState("");

    const checkExtensibility = () => {
        const containerHeight = containerRef.current.offsetHeight;
        const contentHeight = contentRef.current.offsetHeight;
        // console.log(containerHeight, contentHeight)
        if (contentHeight > containerHeight) {
            setShowMoreOption("showmore");
            return;
        }
        else setShowMoreOption("");
    }

    const handleShowMore = () =>{
        setShowMoreOption("showless")
        scroll.scrollMore(700, {
            duration: 0,
            smooth: true,
          });
    }

    const handleShowLess = () =>{
        setShowMoreOption("showmore")
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
                                        <p onClick={() => navigate(`/project/${item.id}`)}>
                                            <GlowButton />
                                        </p>
                                    </div>
                                </div>
                            })
                    }
                </div>
            </section>
            {showMoreOption === "showmore" && <button onClick={handleShowMore} className='showmoreOptions_button'>Show more</button>}
            <ScrollLink to='project'>
            {showMoreOption === "showless" && <button onClick={handleShowLess} className='showmoreOptions_button'>Show less</button>}
            </ScrollLink>
            {showMoreOption === "" && <button></button>}
        </>
    )
}

export default ProjectContent
