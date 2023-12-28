import './SubmissionPopup.css'
import React, { useState } from 'react'
import UpdatePopup from './UpdatePopup';

const SubmissionPopup = ({ submitterDetails, submissionPopup, setSubmissionPopup }) => {
    const [updatePopup, setUpdatePopup] = useState(false);

    return (
        <>
            <UpdatePopup
                updatePopup={updatePopup}
                setUpdatePopup={setUpdatePopup}
                submitterDetails={submitterDetails}
            />

            <div className={`submissionPopup_container ${submissionPopup ? "show" : "hide"}`}>
                <div className="wrapper">
                    <h1>Submission Successfull !</h1>
                    <div className='details'>
                        <div>
                            Your Name:
                            <h4>{submitterDetails.name}</h4>
                        </div>
                        <div>
                            Your Email:
                            <h4>{submitterDetails.email}</h4>

                        </div>
                        <div>
                            Your Phone Number:
                            <h4>{submitterDetails.phoneNumber}</h4>
                        </div>
                        <div>
                            Your Description:
                            <h4>{submitterDetails.description}</h4>
                        </div>
                    </div>
                    <div className="is_edit">
                        <h2>Do you want to edit your details ?</h2>
                        <div className="buttons">
                            <button onClick={() => { setSubmissionPopup(false); setUpdatePopup(true) }} className='bg-green-500'>Yes</button>
                            <button onClick={() => setSubmissionPopup(false)} className='bg-red-500'>No</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubmissionPopup
