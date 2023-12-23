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

                <Card
                    title="Web Design"
                    subtitle="Comfortable price with discuss"
                    description="As a passionate web designer, I specialize in creating visually appealing and user-friendly websites. From concept to implementation, I focus on crafting designs that seamlessly blend aesthetics with functionality. My goal is to deliver an engaging and memorable user experience through innovative and responsive web design."
                    imgSrc="https://freepngimg.com/save/17535-responsive-web-design-picture/600x336"
                />

                <Card
                    title="Logic Building"
                    subtitle="Comfortable price with discuss"
                    description="With a strong foundation in logic building, I approach every project with a problem-solving mindset. Whether it's developing complex algorithms or optimizing code efficiency, I excel in constructing logical solutions. My logical approach ensures that the systems I build are robust, scalable, and performant.."
                    imgSrc="https://png.pngtree.com/png-clipart/20230824/original/pngtree-advanced-computer-skills-abstract-concept-vector-illustration-picture-image_8420785.png"
                />

                <Card
                    title="Testing and Bug Fixing"
                    subtitle="Comfortable price with discuss"
                    description="With a meticulous approach to testing, I ensure the reliability and functionality of every application I work on. From conducting rigorous tests to identifying and fixing bugs, I am committed to delivering a seamless and error-free user experience. My expertise in testing and bug fixing guarantees that your applications not only meet quality standards but exceed user expectations."
                    imgSrc="https://static-00.iconduck.com/assets.00/bug-fixing-illustration-2048x1858-20jzt7bg.png"
                />

                <Card
                    title="Hosting"
                    subtitle="Comfortable price with discuss"
                    description="As a hosting enthusiast, I specialize in deploying and managing web applications on reliable hosting platforms. Whether it's configuring servers, optimizing performance, or ensuring security protocols, I take pride in providing a robust hosting environment. My expertise ensures that your web projects are not only functional but also performant and secure."
                    imgSrc="https://www.amritsardigitalacademy.in/blog/wp-content/uploads/2020/04/web-host-1.png"
                />

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
