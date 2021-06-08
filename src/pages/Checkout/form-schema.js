import * as Yup from "yup";

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "The name is too short!")
    .max(30, "The name is too long!")
    .required("A name is required"),
  email: Yup.string().email("Invalid email").required("An email is required"),
  phone: Yup.string()
    .matches(/^\d+$/, "Phone number should be digits")
    .min(9, "Phone number must be at least 9 digits long")
    .required("A phone number is required"),
});

export default formSchema;
