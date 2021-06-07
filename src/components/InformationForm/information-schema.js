import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const InformationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Please Enter your Full name!")
    .max(20)
    .required("Your first name is required"),
  lastName: Yup.string()
    .min(2, "Please Enter your Full name!")
    .max(20)
    .required("Your last name is required"),
  phone: Yup.string()
    .min(9, "Missing digits")
    .matches(phoneRegExp, "Phone number is not valid"),
  email: Yup.string().email("Invalid email").max(50).required("Required"),
  addressOne: Yup.string().min(2).max(50).required("Required"),
  addressTwo: Yup.string().min(2).max(50),
  zipCode: Yup.number().min(5).required("Required"),
  country: Yup.string().min(5).max(20).required("Required"),
  state: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
});

export default InformationSchema;
