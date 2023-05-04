import { isRequired, isStrongPassword, isValidEmail } from "./validationFn";

// Create array of validation rules for each input
export const firstNameValidations = [
  { rule: isRequired, message: "First name is required" },
];
export const lastNameValidations = [
  { rule: isRequired, message: "Last name is required" },
];
export const emailValidations = [
  { rule: isRequired, message: "Email is required" },
  { rule: isValidEmail, message: "Invalid email address" },
];
export const passwordValidations = [
  { rule: isRequired, message: "Password is required" },
  {
    rule: isStrongPassword,
    message:
      "Password must be at least 8 characters and include a number, lowercase letter, and uppercase letter",
  },
];
