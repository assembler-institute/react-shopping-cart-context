import * as Yup from "yup";

const stepThreeSchema = Yup.object().shape({
  cardHolder: Yup.string()
    .min(3, "Please insert a valid name")
    .required("Remember to add the complete name of the card holder"),
  cardNumber: Yup.number()
    .typeError("This is not a valid card number")
    .integer("Please enter a valid card number")
    .min(1000000000000000, "Please enter a valid card number")
    .max(9999999999999999, "Please enter a valid card number")
    .required("The card number is required"),
  expiryDate: Yup.number()
    .typeError("This is not a valid expiry date")
    .integer("Please enter a valid expiry date")
    .min(1000, "Please enter a valid expiry date")
    .max(9999, "Please enter a valid expiry date")
    .required("The expiry is required"),
  cvv: Yup.number()
    .typeError("This is not a valid CVV")
    .integer("Please enter a valid CVV")
    .min(100, "Please enter a valid CVV")
    .max(999, "Please enter a valid CVV")
    .required("The CVV is required"),
  acceptedTerms: Yup.boolean().required(
    "Please accept the Terms and Conditions",
  ),
});

export default stepThreeSchema;
