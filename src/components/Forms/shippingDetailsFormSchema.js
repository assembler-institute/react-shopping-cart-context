import * as Yup from "yup";

const zipCodeRegExp = /^[0-9]+$/;

const shippingDetailsFormSchema = Yup.object().shape({
  address: Yup.string().required("The address is required"),
  city: Yup.string()
    .min(2, "Is too short!")
    .max(25, "Is too long!")
    .required("The city is required"),
  zipCode: Yup.string()
    .min(5, "Is too short!")
    .max(10, "Is too long!")
    .matches(zipCodeRegExp, "Zip Code must be only digits")
    .required("The zip code code is required"),
});

export default shippingDetailsFormSchema;
