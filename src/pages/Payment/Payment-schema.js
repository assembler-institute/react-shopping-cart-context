import * as Yup from "yup";

const paymentSchema = Yup.object().shape({
  name: Yup.string()
    .required("The user name is required")
    .min(2, "The user name is too short!")
    .max(50, "The user name is too long!"),
  email: Yup.string().required("The email is required").email(),
  tel: Yup.string().required("The phone number is required"),
});

export default paymentSchema;
