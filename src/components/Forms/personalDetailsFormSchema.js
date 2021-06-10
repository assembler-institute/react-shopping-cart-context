import * as Yup from "yup";

const formSchemaShopping = Yup.object().shape({
  name: Yup.string()
    .min(2, "Is too short!")
    .max(25, "Is too long!")
    .required("The name is required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export default formSchemaShopping;
