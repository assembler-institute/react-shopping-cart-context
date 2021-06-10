import * as Yup from "yup";

const AddressSchema = Yup.object().shape({
  address: Yup.string()
    .required("The address is required")
    .min(2, "The address is too short!")
    .max(50, "The address is too long!"),
  city: Yup.string()
    .required("The city is required")
    .min(2, "The city is too short!")
    .max(50, "The city is too long!"),
  zip: Yup.string()
    .required("The code postal is required")
    // .integer("The code postal must be a number"),
    .matches(/^[1-9]+$/, "Only numbers accepted"),
  country: Yup.string().required("The country is required"),
});

export default AddressSchema;
