import * as Yup from "yup";

const billingAddressSchema = Yup.object().shape({
  address: Yup.string()
    .min(5, "The title is too short!")
    .max(50, "The title is too long!")
    .required("The title is required"),
  city: Yup.string()
    .min(5, "The title is too short!")
    .max(50, "The title is too long!")
    .required("The price is required"),
  zip: Yup.number()
    .max(99999,"Required max 5 characters")
    .required("The zip is required"),
});

export default billingAddressSchema;
