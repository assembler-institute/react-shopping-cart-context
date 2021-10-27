import * as Yup from "yup";

const AddressSchema = Yup.object().shape({
  address: Yup.string()
    .min(5, "Please Write the Correct Address")
    .max(100, "Please Write the Correct Address")
    .required("The Address is required"),
  zipCode: Yup.string()
    .min(3, "Please Insert Your Zip Code")
    .max(10, "Please Write the Zip Code")
    .required("Zip Code is required"),
  instructions: Yup.string()
    .min(2, "The long description is too short!")
    .max(100, "The long description is too long!"),
});

export default AddressSchema;
