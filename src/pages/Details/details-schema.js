import * as Yup from "yup";
// import "yup-phone";

const detailsSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, "The user name is too short!")
    .max(10, "The user name is too long!")
    .required("The user name is required"),
  userEmail: Yup.string()
    .email("Invalid email")
    .required("The email is required"),
  userPhone: Yup.number()
    // .phone("ES", true)
    .required("The phone number is required"),
});

export default detailsSchema;
