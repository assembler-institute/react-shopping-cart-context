import * as Yup from "yup";

const formSchemaShopping = Yup.object().shape({
  name: Yup.string()
    .min(2, "Is too short!")
    .max(25, "Is too long!")
    .required("The name is required"),
  email: Yup.string().email("Invalid email").required("Required"),
  // address: Yup.string()
  //   .min(2, "Is too short!")
  //   .max(25, "Is too long!")
  //   .required("The address is required"),
  // city: Yup.string()
  //   .min(2, "Is too short!")
  //   .max(25, "Is too long!")
  //   .required("The city is required"),
  // post: Yup.string()
  //   .min(5, "Is too short!")
  //   .max(5, "Is too long!")
  //   .required("The post code is required"),
  // cardNumber: Yup.string().label("Card number").min(16).max(16).required(16),
  // cardCVVCode: Yup.string().label("CVC").min(3).max(4).required(3),
  // cardHolderName: Yup.string().label("Name on card").max(20).min(2).required(),
  // expiryMonth: Yup.string().label("Expiry month").min(2).max(2).required(),
  // cardExpirationDate: Yup.string()
  //   .label("Expiry year")
  //   .min(4)
  //   .max(4)
  //   .required(),
});

export default formSchemaShopping;
