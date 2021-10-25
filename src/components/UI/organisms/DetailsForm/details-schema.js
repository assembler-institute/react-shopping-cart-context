import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const detailsSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("The first name is too required")
    .min(2, 'The first name is too short!')
    .max(50, 'The first name is too long!'),
  lastName: Yup.string()
    .required("The last name is too required")
    .min(2, 'The last name is too short!')
    .max(50, 'The last name is too long!'),
  // phoneNumber: Yup.string()
  //   .required("Phone number is required")
  //   .matches(phoneRegExp, "Invalid phone number"),
  email: Yup.string()
    .required("Required")
    .email('Invalid email'),
});

export default detailsSchema;
