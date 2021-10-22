import * as Yup from "yup";

const creditCardSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "The name is too short!")
    .max(50, "The name is too long!")
    .required("The name is required"),
  number: Yup.string()
    .matches(/^[0-9]{16}$/, "Number Invalid")
    .required("The number is required"),
  expiry: Yup.string()
  .typeError("This is not a valid expiry date")
  .matches(/\b\d{2}\/\d{2}\b/, "Please use the format MM/YY")
  .required("The expiry is required"),
  cvc: Yup.string()
    .typeError("CVC not valid")
    .matches(/\b\d{3}\b/, "Required 3 numbers")
    .required("The cvc is required"),
  rules: Yup.boolean()
    .required("The terms and conditions must be accepted.")
    .oneOf([true], "The terms and conditions must be accepted."),
});

export default creditCardSchema;
