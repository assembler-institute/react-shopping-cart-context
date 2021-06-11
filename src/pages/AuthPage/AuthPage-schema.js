import * as Yup from "yup";

const AuthSchema = Yup.object().shape({
  email: Yup.string().required("The email is required").email(),
  password: Yup.string()
    .required("The phone number is required")
    .min(2, "The user name is too short!"),
});

export default AuthSchema;
