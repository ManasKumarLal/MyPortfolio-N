import './Form.css'
import React, { useEffect, useState } from 'react'
import { createRecruiterDetails } from '../../../aapwrite/Database'
import { validateForm } from '../Validation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({ submitResponse, setSubmissionPopup, inputBg = "black", formFills }) => {

    const notify = () => toast.success(<div><b>Thank you!</b><br />Your information has been recorded!</div>);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [recruiterDetails, SetRecruiterDetails] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        description: "",
    })

    const handleChange = (fieldName, e) => {
        SetRecruiterDetails(prev => ({ ...prev, [fieldName]: e.target.value }));
    }

    const [error, setError] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        description: "",
    })

    const handleFormError = (errorType, errorMessage) => {
        setError(prev => ({ ...prev, [errorType]: errorMessage }))
    }

    const emptyOutError = () => {
        setError((prev) => ({
            ...prev,
            name: "",
            email: "",
            phoneNumber: "",
            description: "",
        }));
    }

    function removeExtraSpaces(inputString) {
        // Replace multiple spaces with a single space
        const stringWithSingleSpaces = inputString.replace(/\s+/g, ' ');
        // Trim leading and trailing spaces
        const cleanedString = stringWithSingleSpaces.trim();
        return cleanedString;
    }

    useEffect(() => {
        if (!formFills) return;
        SetRecruiterDetails(formFills);
    }, [formFills])

    const handleSubmit = async (e) => {
        e.preventDefault();
        emptyOutError();
        if (!validateForm(recruiterDetails, handleFormError)) {
            return;
        } else {
            setIsSubmitting(true);
            const cleanedRecruiterDetails = {
                name: removeExtraSpaces(recruiterDetails.name),
                email: removeExtraSpaces(recruiterDetails.email),
                phoneNumber: removeExtraSpaces(recruiterDetails.phoneNumber),
                description: removeExtraSpaces(recruiterDetails.description),
            }
            SetRecruiterDetails(cleanedRecruiterDetails);
            const response = await createRecruiterDetails(cleanedRecruiterDetails);
            submitResponse(response);
            console.log(response);
            setIsSubmitting(false);
            SetRecruiterDetails({
                name: "",
                email: "",
                phoneNumber: "",
                description: "",
            })
            notify();
            setSubmissionPopup(true);
        }
    }

    return (
        <>


            <form className='recruiters-form'>
                <span>
                    {error.name && <p className="err">{error.name}</p>}
                    <input
                        className={`bg-[${inputBg}]`}
                        type="text"
                        onClick={emptyOutError}
                        value={recruiterDetails.name}
                        onChange={(e) => handleChange("name", e)}
                        placeholder='Enter your name'
                    />
                </span>
                <span>
                    {error.email && <p className="err">{error.email}</p>}
                    <input
                        className={`bg-[${inputBg}]`}
                        type="email"
                        onClick={emptyOutError}
                        value={recruiterDetails.email}
                        onChange={(e) => handleChange("email", e)}
                        placeholder='Enter your email'
                    />
                </span>
                <span>
                    {error.phoneNumber && <p className="err">{error.phoneNumber}</p>}
                    <input
                        className={`bg-[${inputBg}]`}
                        type="text"
                        onClick={emptyOutError}
                        value={recruiterDetails.phoneNumber}
                        onChange={(e) => handleChange("phoneNumber", e)}
                        placeholder='Enter your phone number'
                    />
                </span>
                <span>
                    {error.description && <p className="err">{error.description}</p>}
                    <textarea
                        className={`bg-[${inputBg}]`}
                        name=""
                        id=""
                        value={recruiterDetails.description}
                        onClick={emptyOutError}
                        onChange={(e) => handleChange("description", e)}
                        rows="5"
                        placeholder='hiring details.....'
                    ></textarea>
                </span>
                <button
                    type='submit'
                    onClick={handleSubmit}
                    className={`btn btn-contact ${isSubmitting ? 'btn-disabled' : ''}`}
                    disabled={isSubmitting}
                >
                    Submit
                </button>
            </form>
        </>
    )
}

export default Form
