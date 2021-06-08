import * as Yup from "yup";

export const formProfile = Yup.object().shape({
  name: Yup.string()
    .min(2, "The name is too short!")
    .max(30, "The name is too long!")
    .required("A name is required"),
  email: Yup.string().email("Invalid email").required("An email is required"),
  phonePrefix: Yup.string().required("A phone prefix is required"),
  phone: Yup.string()
    .matches(/^\d+$/, "Phone number should be digits")
    .min(9, "Phone number must be at least 9 digits long")
    .required("A phone number is required"),
});

export const formBilling = Yup.object().shape({
  address: Yup.string()
    .min(2, "The address is too short!")
    .required("An address is required"),
  city: Yup.string()
    .min(2, "The city is too short!")
    .required("A city is required"),
  postCode: Yup.string()
    .matches(/^\d+$/, "Zip number should be digits")
    .min(5, "Zip number must be at least 5 digits long")
    .required("A Zip number is required"),
  country: Yup.string().required("A country is required"),
});
