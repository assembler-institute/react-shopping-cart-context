import * as Yup from "yup";

const billingSchema = Yup.object().shape({
  clientAdress: Yup.string()
    .min(8, "Your adress is too short!")
    .max(20, "Your adress is too long!")
    .required("Your adress is required"),
  clientCity: Yup.string()
    .min(3, "Your city is too short!")
    .max(10, "Your city is too long!")
    .required("Your city is required"),
  clientZip: Yup.string()
    .min(3, "Your zip/post code is too short!")
    .max(10, "Your zip/post code is too long!")
    .required("Your zip/post code is required"),
  clientCountry: Yup.string()
    .min(3, "Your country/region is too short!")
    .max(10, "Your country/region is too long!")
    .required("Your country/region is required"),
});

export default billingSchema;
