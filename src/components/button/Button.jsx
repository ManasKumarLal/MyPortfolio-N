import React from 'react'
import "./Button.css"

const Button = ({route="/",text="Button"}) => {
    return (
        <div className='button_container'>
            <a href={route} className="custom-btn btn-8"><span>{text}</span></a>
        </div>
    )
}

export default Button
