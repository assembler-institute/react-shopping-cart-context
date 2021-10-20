import * as Yup from "yup";

const detailsSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("The first name is too required")
    .min(2, 'The first name is too short!')
    .max(50, 'The first name is too long!'),
  lastName: Yup.string()
    .required("The last name is too required")
    .min(2, 'The last name is too short!')
    .max(50, 'The last name is too long!'),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(
      /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
      "Invalid phone number"
    ),
  email: Yup.string()
    .required("Required")
    .email('Invalid email'),
});

export default detailsSchema;
