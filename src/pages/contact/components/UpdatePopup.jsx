import './UpdatePopup.css'
import React from 'react'
import Form from './Form'

const UpdatePopup = ({ updatePopup, setUpdatePopup, submitterDetails }) => {
    return (
        <div className={`updatePopup_container ${updatePopup ? "show" : "hide"}`}>
            <div className="wrapper">
                <Form inputBackground="bg-[#343541]" formFills={submitterDetails} updatePopup={updatePopup} setUpdatePopup={setUpdatePopup}/>
            </div>
        </div>
    )
}

export default UpdatePopup
