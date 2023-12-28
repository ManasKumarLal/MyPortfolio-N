import './UpdatePopup.css'
import React from 'react'
import Form from './Form'

const UpdatePopup = ({ updatePopup, setUpdatePopup, submitterDetails }) => {
    return (
        <div className={`updatePopup_container ${updatePopup ? "show" : "hide"}`}>
            <div className="wrapper">
                <Form formFills={submitterDetails} inputBg="#2a2833c0" />
            </div>
        </div>
    )
}

export default UpdatePopup
