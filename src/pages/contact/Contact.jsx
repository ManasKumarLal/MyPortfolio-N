import React, { useState } from 'react'
import './Contact.css'
import { MdCall, MdEmail, MdLocationPin } from "react-icons/md";
import Form from './components/Form';
import SingleDetail from './components/SingleDetail';
import Icons from './components/Icons';
import SubmissionPopup from './components/SubmissionPopup';

const Contact = () => {
    const [submissionPopup, setSubmissionPopup] = useState(false);
    const [submitterDetails, setSubmitterDetails] = useState("")

    const submitResponse = (response) => {
        setSubmitterDetails(response);
    }

    return (
        <>
            <button className='text-red z-[400] fixed top-24' onClick={() => { setSubmissionPopup(true) }}>test</button>
            <SubmissionPopup

                submitterDetails={submitterDetails}
                submissionPopup={submissionPopup}
                setSubmissionPopup={setSubmissionPopup}
            />
            <div id='contact' className="contact_container" >
                <div className="wrapper">

                    <div className="personal_details">
                        <h1>Contact me!!</h1>
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
                            <Icons />
                        </div>
                    </div>

                    <div className='line'></div>

                    <div className='form'>
                        <Form submitResponse={submitResponse} setSubmissionPopup={setSubmissionPopup} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact
