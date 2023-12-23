import React from 'react'
import './Icons.css'
import { BsLinkedin, BsYoutube, BsGithub, BsWhatsapp } from "react-icons/bs";

const Icons = () => {
    return (
        <>
            <div className="contact_icons_container">
                <p><BsLinkedin /></p>
                <p><BsYoutube /></p>
                <p><BsGithub /></p>
                <p><BsWhatsapp /></p>
            </div>
        </>
    )
}

export default Icons
