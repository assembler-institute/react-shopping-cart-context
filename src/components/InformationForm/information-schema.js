import * as Yup from "yup";

const InformationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Please Enter your Full name!")
    .required("Your full name is required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/g,
      "Invalid phone number",
    ),
});
export default InformationSchema;
