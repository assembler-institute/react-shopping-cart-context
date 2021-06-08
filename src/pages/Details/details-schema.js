import * as Yup from "yup";

const detailsSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, "The user name is too short!")
    .max(10, "The user name is too long!")
    .required("The user name is required"),
  userEmail: Yup.string()
    .email("Invalid email")
    .required("The email is required"),
  userPhone: Yup.number().required(9, "The email is required"),
});

export default detailsSchema;
