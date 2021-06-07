import * as Yup from "yup";

const productSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "The title is too short!")
    .max(25, "The title is too long!")
    .required("The title is required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export default productSchema;
