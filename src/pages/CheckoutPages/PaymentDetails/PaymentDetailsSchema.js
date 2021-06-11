import * as Yup from "yup";
import valid from "card-validator";

const PersonalDetailsSchema = Yup.object().shape({
  cardName: Yup.string().min(10).required("The name is required!"),
  cardNumber: Yup.number()
    .test(
      "test-number",
      "Credit Card number is invalid!",
      (value) => valid.number(value).isValid,
    )
    .required("The card number is required!"),
  cardExpiryDate: Yup.string()
    .matches("^[0-9]{2}[/]{1}[0-9]{2}$", "The format must be MM/YY!")
    .required("The expiry date is required!"),
  cvc: Yup.number()
    .positive("The CVV must be a positive number")
    .integer("The CVV must be a number")
    .min(3, "The CVV is to short!")
    .required("The CVV is required!"),
  termsConditions: Yup.bool().oneOf(
    [true],
    "Accept Terms & Conditions is required",
  ),
});

export default PersonalDetailsSchema;
