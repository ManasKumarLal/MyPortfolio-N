function isValidName(name, handleFormError) {
    name = name.trim();
    if (!name) {
        handleFormError("name", "name is required")
        return false;
    }
    var nameRegex = /^[A-Za-z ]+$/;
    if (!nameRegex.test(name)) {
        handleFormError("name", "Name can only contain alphabets and hyphen")
        return false;
    }
    return true;
}

function isValidateEmail(email, handleFormError) {
    if (!email) {
        handleFormError("email", "Email is required")
        return false;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        handleFormError("email", "Invalid email format")
        return false;
    }
    return true;
}

function isValidatePhoneNumber(phone, handleFormError) {
    phone = phone.trim();
    if (!phone) {
        handleFormError("phoneNumber", "Phone number is required")
        return false;
    }
    var phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    if (!phoneRegex.test(phone)) {
        handleFormError("phoneNumber", "Invalid phone number")
        return false;
    }
    return true;
}

function isValidateDescription(description, handleFormError) {
    description = description.trim();
    if (!description) {
        handleFormError("description", "Description is required")
        return false;
    }
    var descriptionRegex = /^(?:\s*[A-Za-z]){13,}$/;
    if (!descriptionRegex.test(description)) {
        handleFormError("description", "Description is too short")
        return false;
    }
    return true;
}
export const validateForm = (recruiterDetails, handleFormError) => {
    if (!isValidName(recruiterDetails.name, handleFormError)) return false;
    if (!isValidateEmail(recruiterDetails.email, handleFormError)) return false;
    if (!isValidatePhoneNumber(recruiterDetails.phoneNumber, handleFormError)) return false;
    if (!isValidateDescription(recruiterDetails.description, handleFormError)) return false;
    return true;
}