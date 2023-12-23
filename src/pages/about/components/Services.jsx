import React from 'react'
import './Services.css'
import Card from './Card'

const Services = () => {
    return (
        <div className='services_container'>

            <div className="card">
                <h1>Services</h1>
                <h2>What I Do for Clients</h2>
                <p>
                    Most common methods for designing websites that work well on desktop is responsive and adaptive design. A premium theme setup with all the necessary active premium plugins All the standard pages like Home, About, Products/Services/Offers, Blog/News, Contact, etc.
                </p>
            </div>

            <div className="about_card">
                <img className='img_top' src="https://cdn-keimj.nitrocdn.com/iaLxREIEPFypcmrLRaUoqNwvvoOlSWhj/assets/images/optimized/rev-f55f44d/shtheme.com/demosd/dizme/wp-content/uploads/2022/05/5.png" alt="" />
                <Card />
                <Card />
                <Card />
                <Card />
                <img className='img_bottom' src="https://cdn-keimj.nitrocdn.com/iaLxREIEPFypcmrLRaUoqNwvvoOlSWhj/assets/images/optimized/rev-f55f44d/shtheme.com/demosd/dizme/wp-content/uploads/2022/05/5.png" alt="" />
            </div>


            <div className="card">
                <h1>Services</h1>
                <h2>What I Do for Clients</h2>
                <p>
                    Most common methods for designing websites that work well on desktop is responsive and adaptive design. A premium theme setup with all the necessary active premium plugins All the standard pages like Home, About, Products/Services/Offers, Blog/News, Contact, etc.
                </p>
            </div>

        </div>
    )
}

export default Services
