import * as Yup from "yup";

const stepThreeSchema = Yup.object().shape({
  cardHolder: Yup.string()
    .min(3, "Please insert a valid name")
    .required("Remember to add the complete name of the card holder"),
  cardNumber: Yup.string()
    .typeError("This is not a valid card number")
    .matches(/\b\d{16}\b/, "Please enter a valid card number")
    .min(16, "Please enter a valid card number")
    .max(16, "Please enter a valid card number")
    .required("The card number is required"),
  expiryDate: Yup.string()
    .typeError("This is not a valid expiry date")
    .matches(/\b\d{2}\/\d{2}\b/, "Please use the format MM/YY")
    .min(5, "Please enter a valid expiry date")
    .max(5, "Please enter a valid expiry date")
    .required("The expiry is required"),
  cvv: Yup.string()
    .typeError("This is not a valid CVV")
    .matches(/\b\d{3}\b/, "Please enter a valid CVV")
    .min(3, "Please enter a valid CVV")
    .max(3, "Please enter a valid CVV")
    .required("The CVV is required"),
  acceptedTerms: Yup.boolean().required(
    "Please accept the Terms and Conditions",
  ),
});

export default stepThreeSchema;
