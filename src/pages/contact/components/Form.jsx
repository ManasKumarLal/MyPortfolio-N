import './Form.css'
import React, { useEffect, useState } from 'react'
import { createRecruiterDetails, updateRecruiterDetails } from '../../../aapwrite/Database'
import { validateForm } from '../Validation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({ inputBackground = "bg-black", submitResponse, setSubmissionPopup, updatePopup, setUpdatePopup, formFills }) => {

    const notifySubmissionSuccessfull = () => toast.success(<div><b>Thank you!</b><br />Your information has been <b>RECORDED!</b></div>);
    const notifyUpdateSuccessfull = () => toast.success(<div><b>Thank you!</b><br />Your information has been <b>UPDATED!</b></div>);

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

    const handleSubmit = async (e, type) => {
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
            if (type === "submit") {
                const response = await createRecruiterDetails(cleanedRecruiterDetails);
                console.log(response);
                submitResponse(response);
                notifySubmissionSuccessfull();
                setSubmissionPopup(true);
            } else if (type === "update") {
                const response = await updateRecruiterDetails(formFills?.$id, cleanedRecruiterDetails);
                console.log(response);
                notifyUpdateSuccessfull();
                setUpdatePopup(false);
            }
            setIsSubmitting(false);
            SetRecruiterDetails({
                name: "",
                email: "",
                phoneNumber: "",
                description: "",
            })

        }
    }

    return (
        <>


            <form className='recruiters-form'>
                <span>
                    {error.name && <p className="err">{error.name}</p>}
                    <input
                        className={`${inputBackground}`}
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
                        className={`${inputBackground}`}
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
                        className={`${inputBackground}`}
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
                        className={`${inputBackground}`}
                        name=""
                        id=""
                        value={recruiterDetails.description}
                        onClick={emptyOutError}
                        onChange={(e) => handleChange("description", e)}
                        rows="5"
                        placeholder='hiring details.....'
                    ></textarea>
                </span>

                {
                    updatePopup
                        ?
                        <button
                            type='submit'
                            onClick={(e) => handleSubmit(e, "update")}
                            className={`btn btn-contact ${isSubmitting ? 'btn-disabled' : ''}`}
                            disabled={isSubmitting}
                        >
                            Update
                        </button>
                        :
                        <button
                            type='submit'
                            onClick={(e) => handleSubmit(e, "submit")}
                            className={`btn btn-contact ${isSubmitting ? 'btn-disabled' : ''}`}
                            disabled={isSubmitting}
                        >
                            Submit
                        </button>
                }
            </form >
        </>
    )
}

export default Form
