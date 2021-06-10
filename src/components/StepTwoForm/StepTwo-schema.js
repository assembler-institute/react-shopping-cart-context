import * as Yup from "yup";

const stepOneSchema = Yup.object().shape({
  address: Yup.string()
    .min(3, "Please insert a valid address")
    .required("Remember to add your complete address"),
  city: Yup.string()
    .required("The city is required")
    .min(1, "Please insert a valid city"),
  zip: Yup.number()
    .typeError("Zip must be a number")
    .integer("Please insert a valid zip code")
    .min(100000, "Please insert a valid zip code")
    .max(999999999, "Please insert a valid zip code")
    .required("Your zip code is required"),
});

export default stepOneSchema;
