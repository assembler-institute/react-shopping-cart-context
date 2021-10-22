import * as Yup from "yup";
const stepTwoSchema = Yup.object().shape({
    address: Yup.string()
      .min(3, "Please insert a valid address")
      .required("Remember to add your complete address"),
    city: Yup.string()
      .required("The city is required")
      .min(1, "Please insert a valid city"),
    zip: Yup.string()
      .typeError("Zip must be a number")
      .matches(/\b\d{5}\b/, "Please insert a valid zip code")
      .min(5, "Please insert a valid zip code")
      .max(5, "Please insert a valid zip code")
      .required("Your zip code is required"),
  });
  
  export default stepTwoSchema;