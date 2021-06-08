import * as Yup from "yup";

const paymentSchema = Yup.object().shape({
  clientCardholderName: Yup.string()
    .min(5, "Your cardholder full-name is too short!")
    .max(50, "Your cardholder full-name is too long!")
    .required("Your cardholder full-name is required"),
  clientCardExpiryDate: Yup.string()
    .min(4, "Your card expiry date is too short!")
    .max(4, "Your card expiry date is too long!")
    .required("Your card expiry date is required"),
  clientCardNumber: Yup.string()
    .min(5, "Your card number is too short!")
    .max(50, "Your card number is too long!")
    .required("Your card number is required"),
  clientCardCvvCode: Yup.string()
    .min(3, "Your card CVV code is too short!")
    .max(3, "Your card CVV code is too long!")
    .required("Your card CVV code is required"),
  // clientConsent: Yup.string()
  //   .min(2, "The author first name is too short!")
  //   .required("The author first name is required"),
});

export default paymentSchema;
