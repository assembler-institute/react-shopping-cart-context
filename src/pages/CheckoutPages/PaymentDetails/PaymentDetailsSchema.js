import * as Yup from "yup";
import valid from "card-validator";
import { parse, isDate } from "date-fns";

function parseDateString(value, originalValue) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, "yyyy-MM-dd", new Date());

  return parsedDate;
}

const today = new Date();

const PersonalDetailsSchema = Yup.object().shape({
  cardName: Yup.string().min(10).required("The name is required!"),
  cardNumber: Yup.number()
    .test(
      "test-number",
      "Credit Card number is invalid",
      (value) => valid.number(value).isValid,
    )
    .required("The card number is required!"),
  cardCVV: Yup.number()
    .positive("The CVV must be a positive number")
    .integer("The CVV must be a number")
    .min(3, "The CVV is to short!")
    .required("The CVV is required!"),
  expiryData: Yup.date()
    .transform(parseDateString)
    .max(today)
    .required("The expiry date is required!"),
  termsConditions: Yup.bool().oneOf(
    [true],
    "Accept Terms & Conditions is required",
  ),
});

export default PersonalDetailsSchema;
