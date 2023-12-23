import React from 'react'
import "./Button.css"
import { Link as ScrollLink } from 'react-scroll';

const Button = ({ route = "/", text = "Button", h = "50px", w = "200px" }) => {
    return (
        <div className='button_container'>
            <ScrollLink to={route} smooth={true} duration={0} className={`custom-btn btn-8`} style={{ height: h, width: w }}><span>{text}</span></ScrollLink>
        </div>
    )
}

export default Button
