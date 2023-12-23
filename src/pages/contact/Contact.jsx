import React from 'react'
import './Contact.css'
import { MdCall, MdEmail, MdLocationPin } from "react-icons/md";
import Form from './components/Form';
import SingleDetail from './components/SingleDetail';
import Icons from './components/Icons';


const Contact = () => {

    return (
        <>
            <div id='contact' className="contact_container" >
                <h1>Contact me!!</h1>
                <figure>
                    <div className="wrapper">

                        <div className="personal_details w-[30%]">
                            <SingleDetail
                                detail="7261876702"
                                logo={<MdCall className='single_detail_logo' />}
                            />
                            <SingleDetail
                                detail="skillszone100@gmail.com"
                                logo={<MdEmail className='single_detail_logo' />}
                            />
                            <SingleDetail
                                detail="Bhagalpur, Bihar, india"
                                logo={<MdLocationPin className='single_detail_logo' />}
                            />
                            <div className="icons">
                                <Icons/>
                            </div>
                        </div>

                        <div className='line'></div>

                        <div className='w-[30%]'>
                            <Form />
                        </div>

                    </div>
                </figure>
            </div>
        </>
    )
}

export default Contact
