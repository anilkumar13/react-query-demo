import React, { useState, useMemo } from "react";
import InputField from "../components/InputformFiled";
import {
  firstNameValidations,
  lastNameValidations,
  passwordValidations,
  emailValidations,
} from "../components/validationRules";
const SignUpForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const fromData = useMemo(()=> formValues,[formValues])

  const handleInputChange = (name, value) => {
      setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formValues);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <InputField
        label="First Name"
        name="firstName"
        type="text"
        value={fromData.firstName}
        onChange={handleInputChange}
        validations={firstNameValidations}
      />
      <InputField
        label="Last Name"
        name="lastName"
        type="text"
        value={fromData.lastName}
        onChange={handleInputChange}
        validations={lastNameValidations}
      />
      <InputField
        label="Email"
        name="email"
        type="email"
        value={fromData.email}
        onChange={handleInputChange}
        validations={emailValidations}
      />
      <InputField
        label="Password"
        name="password"
        type="text"
        value={formValues.password}
        onChange={handleInputChange}
        validations={passwordValidations}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
