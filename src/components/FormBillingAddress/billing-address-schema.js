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
  zip: Yup.string()
    .min(3, "Min 3 characters")
    .max(5,"Max 5 characters")
    .required("The zip is required"),
});

export default billingAddressSchema;
