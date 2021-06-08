import * as Yup from "yup";

const productSchemaAdress = Yup.object().shape({
  streetName: Yup.string()
    .min(3, "The streetname is too short!")
    .max(10, "The streetname is too long!")
    .required("The streetname is required"),
  cityName: Yup.string()
    .min(3, "Invalid city")
    .required("The city is required"),
  postCode: Yup.number().required(9, "The postcode is required"),
  country: Yup.string()
    .min(3, "Invalid country")
    .required("The country is required"),
});

export default productSchemaAdress;
