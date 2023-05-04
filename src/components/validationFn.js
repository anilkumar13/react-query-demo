 // Define custom validation functions
 export const isRequired = (value) => value.trim() !== "";
 export const isValidEmail = (value) =>
   /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
 export const isStrongPassword = (value) =>
   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(value);
export const validateInput = ({name,value,validations}) => {
  let errorMessages = [];
  // Check each validation rule and add error message if validation fails
  validations.forEach((validation) => {
    const isValid = validation.rule(value);
    if (!isValid) {
      console.log('isValid',isValid, " value:-> ", value);
      errorMessages.push(validation.message);
      return false;
    }
  });

  // Set the error message state if there are errors, otherwise clear it
  if (errorMessages.length > 0) {
    return errorMessages[0];
  } else {
    return ""
  }
};