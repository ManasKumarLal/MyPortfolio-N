import React from 'react'
import "./Design.css"
import Button from "../../../components/button/Button"

const Design = () => {
    return (
        <div className='Design_container'>
            <div className="image">
                {/* <img src="https://assets.99static.com/workbench/assets/images/designer-search-logged-out-header-9e99c15bdf.png" alt="" /> */}
                <img src="https://spids.co.in/image/graphic-design-company.png" alt="" />
            </div>
            <div className="text">
                <img src="https://store-images.s-microsoft.com/image/apps.59810.14282385397322807.c2ae4608-6889-4e10-816d-7f8254d76cad.c6b7e4a4-1f74-4c8f-8639-28fef3c09030" alt="" />
                <h3>I'm a Designer</h3>
                <h1>I Can Design Anything You Want</h1>
                <p>Hello there! I'm a <span>web designer</span>, and I'm very passionate and dedicated to my work. With 2 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
                <Button route='#contact' text='Hire Me' />
            </div>
        </div>
    )
}

export default Design
