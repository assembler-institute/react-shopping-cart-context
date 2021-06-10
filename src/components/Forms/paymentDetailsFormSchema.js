import * as Yup from "yup";
// import valid from "card-validator";

const paymentDetailsFormSchema = Yup.object().shape({
  paymentMethod: Yup.string().required("A radio option is required"),
  cardHolderName: Yup.string()
    .label("Name on card")
    .max(20)
    .min(2)
    .required("The name is required"),
  cardNumber: Yup.number()
    // .test(
    //   "test-number",
    //   "Credit Card number is invalid!",
    //   (value) => valid.number(value).isValid,
    // )
    .required("Required"),
  cardExpirationDate: Yup.string()
    .label("Expiry year")
    // .matches("^[0-9]{2}[/]{1}[0-9]{2}$", "The format must be MM/YY!")
    .required("Required"),
  cardCVVCode: Yup.number()
    .label("CVC")
    .positive("The CVC must be a positive number")
    .integer("The CVC must be a number")
    // .min(3, "Is too short")
    // .max(3, "Is too long")
    .required("CVC code is required"),
  consentCheckbox: Yup.bool().oneOf(
    [true],
    "Accept Terms & Conditions is required",
  ),
});

export default paymentDetailsFormSchema;
