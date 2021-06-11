import * as Yup from "yup";

const paymentDetailsFormSchema = Yup.object().shape({
  paymentMethod: Yup.string().required("A radio option is required"),
  cardHolderName: Yup.string()
    .label("Name on card")
    .max(20)
    .min(2)
    .required("The name is required"),
  cardNumber: Yup.string()
    .matches("^[0-9]{16}$", "The card number must have 16 digits!")
    .required("Required"),
  cardExpirationDate: Yup.string()
    .label("Expiry year")
    .matches("^[0-9]{2}[/]{1}[0-9]{2}$", "The format must be MM/YY!")
    .required("Required"),
  cardCVVCode: Yup.string()
    .label("CVC")
    .matches("^[0-9]{3}$", "The card number must have 3 digits!")
    .required("CVC code is required"),
  consentCheckbox: Yup.bool().oneOf(
    [true],
    "Accept Terms & Conditions is required",
  ),
});

export default paymentDetailsFormSchema;
