import React from 'react'
import './Card.css'

const Card = ({title="title",subtitle="subtitle",description="description",imgSrc}) => {
    return (
        <>
            <div className='about_card_container'>
                <div className="image">
                    <img src={imgSrc} alt="" />
                </div>
                <div className="text">
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default Card
