import * as Yup from "yup";

const creditCardSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "The name is too short!")
    .max(50, "The name is too long!")
    .required("The name is required"),
  number: Yup.number()
    .max(9999999999999999, "The title is too long!")
    .required("The number is required"),
  expiry: Yup.number()
    .max(9999, "Required max 4 characters")
    .required("The date expiry is required"),
  cvc: Yup.number()
    .max(999, "Required max 3 characters")
    .required("The cvc is required"),
  rules: Yup.boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});

export default creditCardSchema;
