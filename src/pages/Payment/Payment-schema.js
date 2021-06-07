import * as Yup from "yup";
import valid from "card-validator";

const paymentSchema = Yup.object().shape({
  paymentMethod: Yup.string(),
  carholderName: Yup.string()
    .required("The car holder name is required")
    .min(2, "This name is too short!")
    .max(50, "This name is too long!")
    .matches(/^[a-zA-Z\s]+$/, "Only letters accepted"),
  /* .test(
      "test-number",
      "Cardholder name is invalid",
      (value) => valid.cardholderName(value).isValid,
    ) */
  cardNumber: Yup.string()
    .required("The card number is required")
    .test(
      "test-number", // this is used internally by yup
      "Credit Card number is invalid", // validation message
      (value) => valid.number(value).isValid,
    ), // return true false based on validation
  cardExpiry: Yup.string()
    .required("Expiration date is required")
    .test(
      "test-number",
      "Expiration date is invalid",
      (value) => valid.expirationDate(value).isValid,
    ),
  cardCvv: Yup.string()
    .required("CVV is required")
    .test("test-number", "CVV is invalid", (value) => valid.cvv(value).isValid),
  cardAgreement: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions",
  ),
});

export default paymentSchema;
