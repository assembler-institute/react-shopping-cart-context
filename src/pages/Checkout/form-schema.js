import * as Yup from "yup";

// PROFILE
export const formProfile = Yup.object().shape({
  name: Yup.string()
    .min(2, "The name is too short!")
    .max(30, "The name is too long!")
    .required("The name is required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().required("The phone number is required"),
});

// PAYMENT
export const formPayment = Yup.object().shape({
  cardName: Yup.string()
    .min(2, "The name is too short!")
    .max(30, "The name is too long!")
    .required("The name is required"),
  cardNumber: Yup.string()
    .typeError("Not a valid card number. Example: XXXX XXXX XXXX XXXX")
    .length(19, "Not a valid card number. Example: XXXX XXXX XXXX XXXX")
    .matches(
      /([0-9]{4}) ([0-9]{4}) ([0-9]{4}) ([0-9]{4})/,
      "Not a valid card number. Example: XXXX XXXX XXXX XXXX",
    )
    .required("Card number is required"),
  cardDate: Yup.string()
    .typeError("Not a valid card expiration date. Example: MM/YY")
    .max(5, "Not a valid card expiration date. Example: MM/YY")
    .matches(
      /([00-31]{2})\/([00-12]{2})/,
      "Not a valid card expiration date. Example: MM/YY",
    )
    .required("Card expiration date is required"),
  cardCVV: Yup.string()
    .typeError("Not a valid CVV. Example: XXX")
    .length(3, "Not a valid CVV. Example: XXX"),
  payPalUser: Yup.string()
    .min(2, "The name is too short!")
    .max(30, "The name is too long!")
    .required("The name is required"),
  payPalPassword: Yup.string()
    .min(2, "The password is too short!")
    .required("The password is required"),
  applePayUser: Yup.string()
    .min(2, "The name is too short!")
    .max(30, "The name is too long!")
    .required("The name is required"),
  applePayPassword: Yup.string()
    .min(2, "The password is too short!")
    .required("The password is required"),
});
