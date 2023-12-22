import React, { useState } from 'react'
import { createRecruiterDetails } from '../../../aapwrite/Database'
import { validateForm } from '../Validation';
import './Form.css'

const Form = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        description: "",
    })
    const [recruiterDetails, SetRecruiterDetails] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        description: "",
    })

    const emptyOutError = () => {
        setError((prev) => ({
            ...prev,
            name: "",
            email: "",
            phoneNumber: "",
            description: "",
        }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        emptyOutError();
        if (!validateForm(setError, recruiterDetails)) return;
        setIsSubmitting(true);
        const response = await createRecruiterDetails(recruiterDetails);
        console.log(response);
        setIsSubmitting(false);
    }
    return (
        <div>
            <form className='recruiters-form'>
                <span>
                    {error.name && <p className="err">{error.name}</p>}
                    <input
                        type="text"
                        onClick={emptyOutError}
                        value={recruiterDetails.name}
                        onChange={(e) => SetRecruiterDetails({ ...recruiterDetails, name: e.target.value })}
                        placeholder='Enter your name'
                    />
                </span>
                <span>
                    {error.email && <p className="err">{error.email}</p>}
                    <input
                        type="email"
                        onClick={emptyOutError}
                        value={recruiterDetails.email}
                        onChange={(e) => SetRecruiterDetails({ ...recruiterDetails, email: e.target.value })}
                        placeholder='Enter your email'
                    />
                </span>
                <span>
                    {error.phoneNumber && <p className="err">{error.phoneNumber}</p>}
                    <input
                        type="text"
                        onClick={emptyOutError}
                        value={recruiterDetails.phoneNumber}
                        onChange={(e) => SetRecruiterDetails({ ...recruiterDetails, phoneNumber: e.target.value })}
                        placeholder='Enter your phone number'
                    />
                </span>
                <span>
                    {error.description && <p className="err">{error.description}</p>}
                    <textarea
                        name=""
                        id=""
                        value={recruiterDetails.description}
                        onClick={emptyOutError}
                        onChange={(e) => SetRecruiterDetails({ ...recruiterDetails, description: e.target.value })}
                        rows="5"
                        placeholder='hiring details.....'
                    ></textarea>
                </span>
                <button
                    onClick={handleSubmit}
                    className={`btn btn-contact ${isSubmitting ? 'btn-disabled' : ''}`}
                    disabled={isSubmitting}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form
