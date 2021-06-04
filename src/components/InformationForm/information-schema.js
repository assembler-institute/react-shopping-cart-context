import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const InformationSchema = Yup.object().shape({
  fistName: Yup.string()
    .min(2, "Please Enter your Full name!")
    .required("Your full name is required"),
  lastName: Yup.string()
    .min(2, "Please Enter your Full name!")
    .required("Your full name is required"),
  phone: Yup.string()
    .min(9, "Missing digits")
    .max(9, "Too many digits")
    .matches(phoneRegExp, "Phone number is not valid"),
  email: Yup.string().email("Invalid email").max(50).required("Required"),
  addressOne: Yup.string().max(50).required("Required"),
  addressTwo: Yup.string().max(50),
  zipCode: Yup.string().min(5).max(5).required("Required"),
  country: Yup.string().min(5).max(20).required("Required"),
  state: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
});

export default InformationSchema;
