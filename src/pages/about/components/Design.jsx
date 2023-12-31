import React from 'react'
import "./Design.css"
import Button from "../../../components/button/Button"

const Design = () => {
    return (
        <div className='Design_container'>
            <img className='bubble' src="https://cdn-keimj.nitrocdn.com/iaLxREIEPFypcmrLRaUoqNwvvoOlSWhj/assets/images/optimized/rev-f55f44d/shtheme.com/demosd/dizme/wp-content/uploads/2022/05/2-5.png" alt="" />
            <img className='bubble' src="https://cdn-keimj.nitrocdn.com/iaLxREIEPFypcmrLRaUoqNwvvoOlSWhj/assets/images/optimized/rev-f55f44d/shtheme.com/demosd/dizme/wp-content/uploads/2022/05/2-5.png" alt="" />

            <div className='wrapper'>

                <div className="image">
                    <img src="https://static.vecteezy.com/system/resources/previews/023/401/371/non_2x/cute-cat-wearing-glasses-and-headset-fun-colorful-concept-ideal-for-print-designs-like-t-shirt-designs-stickers-etc-generative-ai-free-png.png" alt="" />
                </div>

                <div className="text">
                    <img src="https://cdn-keimj.nitrocdn.com/iaLxREIEPFypcmrLRaUoqNwvvoOlSWhj/assets/images/optimized/rev-f55f44d/shtheme.com/demosd/dizme/wp-content/uploads/2022/05/6.png" alt="" />
                    <h3>I'm a Designer</h3>
                    <h1>I Can Design Anything You Want</h1>
                    <p>Hello there! I'm a <span>web designer</span>, and I'm very passionate and dedicated to my work. With 2 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
                    <Button route="contact" text="Hire Me" w="160px" />
                </div>
            </div>

        </div>
    )
}

export default Design
