import * as Yup from "yup";

const formSchemaShopping = Yup.object().shape({
  address: Yup.string()
    .min(2, "Is too short!")
    .max(25, "Is too long!")
    .required("The address is required"),
  city: Yup.string()
    .min(2, "Is too short!")
    .max(25, "Is too long!")
    .required("The city is required"),
  zipCode: Yup.number()
    .min(5, "Is too short!")
    .max(5, "Is too long!")
    .integer("The zip code must be an integer")
    .positive("The zip code must be a positive number")
    .required("The zip code code is required"),
});

export default formSchemaShopping;
