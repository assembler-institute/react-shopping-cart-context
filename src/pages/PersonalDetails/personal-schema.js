import * as Yup from "yup";

const personalSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "The name is too short!")
    .max(50, "The name is too long!")
    .required("The name is required"),
  phoneNumber: Yup.number()
    .integer("The phone number must be an integer")
    .positive("The phone number must be a positive number")
    .required("The phone number is required"),
  email: Yup.string().email("Invalid email").required("The email is Required"),
});

export default personalSchema;
