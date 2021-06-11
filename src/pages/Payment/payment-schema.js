import * as Yup from "yup";

const paymentSchema = Yup.object().shape({
  paymentMethod: Yup.string().required("Select payment method"),
  cardholderName: Yup.string().required("The email is required"),
  cardNumber: Yup.string()
    .matches()
    .max(16, "Invalid Card number")
    .required("The card number is required"),
  cardExpiryDate: Yup.string()
    .matches(
      /([0-9]{2})\/([0-9]{2})/,
      "Not a valid expiration date. Example: MM/YY",
    )
    .required("The expiration date is required"),
  cvvCode: Yup.string()
    .matches(/([0-9]{3})/, "Not a valid CVV Code. Example: XYZ")
    .required("The CVV Code is required"),
});

export default paymentSchema;
