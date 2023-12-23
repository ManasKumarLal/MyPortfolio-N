import React from 'react'
import './Card.css'

const Card = () => {
    return (
        <>
            <div className='about_card_container'>
                <div className="image">
                    <img src="https://cdn-keimj.nitrocdn.com/iaLxREIEPFypcmrLRaUoqNwvvoOlSWhj/assets/images/optimized/rev-f55f44d/shtheme.com/demosd/dizme/wp-content/uploads/2022/05/1-2.png" alt="" />
                </div>
                <div className="text">
                    <h1>Title</h1>
                    <h2>Subtitle</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorem voluptatem alias rerum soluta molestias vero accusamus voluptatibus sequi? Nostrum natus magni excepturi facere veritatis.</p>
                </div>
            </div>
        </>
    )
}

export default Card
