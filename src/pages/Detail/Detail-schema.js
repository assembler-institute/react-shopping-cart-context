import * as Yup from "yup";

const DetailSchema = Yup.object().shape({
  name: Yup.string()
    .required("The user name is required")
    .min(2, "The user name is too short!")
    .max(50, "The user name is too long!"),
  email: Yup.string().required("The email is required").email(),
  tel: Yup.number()
    .required("The phone number is required")
    .min(9, "The phone number is too short!"),
});

export default DetailSchema;
