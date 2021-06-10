import * as Yup from "yup";

const formSchemaShopping = Yup.object().shape({
  paymentMethod: Yup.string().required("A radio option is required"),
  cardHolderName: Yup.string()
    .label("Name on card")
    .max(20)
    .min(2)
    .required("The name is required"),
  cardNumber: Yup.string()
    .label("Card number")
    .min(16)
    .max(16)
    .required("Required"),
  cardExpirationDate: Yup.string()
    .label("Expiry year")
    .min(4)
    .max(4)
    .required("Required"),
  cardCVVCode: Yup.string().label("CVC").min(3).max(4).required(3),
  consentCheckbox: Yup.bool().oneOf([true], "Must agree to something"),
});

export default formSchemaShopping;
