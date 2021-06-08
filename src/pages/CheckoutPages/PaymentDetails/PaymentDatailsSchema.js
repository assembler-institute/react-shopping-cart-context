import * as Yup from "yup";

const PersonalDetailsSchema = Yup.object().shape({
  cardName: Yup.string()
    .max(30, "The name is too long!")
    .required("The name is required!"),
  cardNumber: Yup.number("The card number must be a number!").required(
    "The card number is required!",
  ),
  cardExpiryDate: Yup.date().required("The expiry date is required!"),
  cardCVV: Yup.number().min(3),
});

export default PersonalDetailsSchema;
