import * as Yup from "yup";

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "The name is too short!")
    .max(30, "The name is too long!")
    .required("The name is required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().required("The phone number is required"),
});

export default formSchema;
