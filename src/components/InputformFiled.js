import React, { useState, memo, useEffect } from "react";
import { validateInput } from "./validationFn";
const InputField = ({ label, name, type, value, onChange, onBlur, validations, inputError }) => {
  const [error, setError] = useState("");
  useEffect(() => {
    setError(inputError);
  },[inputError])
  // const validateInput = () => {
  //   let errorMessages = [];

  //   // Check each validation rule and add error message if validation fails
  //   validations.forEach((validation) => {
  //     const isValid = validation.rule(value);
  //     if (!isValid) {
  //       console.log('isValid',isValid, " value:-> ", value);
  //       errorMessages.push(validation.message);
  //       return false;`
  //     }
  //   });

  //   // Set the error message state if there are errors, otherwise clear it
  //   if (errorMessages.length > 0) {
  //     setError(errorMessages[0]);
  //   } else {
  //     setError("");
  //   }
  // };

  const handleInputChange = (event) => {
    onChange(name, event.target.value);

    // Only validate on change if input has already been touched
    if (error) {
      setError(validateInput({name,value,validations}));
    }
  };

  const handleBlur = () => {
    setError(validateInput({name,value,validations}));
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default memo(InputField);