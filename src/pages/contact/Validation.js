export function isValidName(name) {
    var nameRegex = /^[A-Za-z'-][A-Za-z' -]{2,}$/;
    return nameRegex.test(name);
}

export function isValidateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function isValidatePhoneNumber(phone) {
    var phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    return phoneRegex.test(phone);
}

export function isValidateDescription(description) {
    var descriptionRegex = /^(?!\s)(.{15,})$/;

    return descriptionRegex.test(description);
}
export const validateForm = async (setError, recruiterDetails) => {
    if (!isValidName(recruiterDetails.name)) {
        setError(prev => ({ ...prev, name: "Name can only contain alphabets and hyphen" }))
        return false;
    }
    if (!isValidateEmail(recruiterDetails.email)) {
        setError(prev => ({ ...prev, email: "Invalid email format" }))
        return false;
    }
    if (!isValidatePhoneNumber(recruiterDetails.phoneNumber)) {
        setError(prev => ({ ...prev, phoneNumber: "Invalid phone number" }))
        return false
    }
    if (!isValidateDescription(recruiterDetails.description)) {
        setError(prev => ({ ...prev, description: "Description is too short" }))
        return false;
    }
    return true;
}