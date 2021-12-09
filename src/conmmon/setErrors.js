

export const setErrors = (firstName, lastName, emailId)=>{
    let errors = {};
    errors.firstName = firstName ? "" : "First Name is required";
    errors.lastName = lastName ? "" : "Last Name is required";
    errors.emailId = emailId ? "" : "Email is required";
    return errors;
}