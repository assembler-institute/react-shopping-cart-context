import * as Yup from "yup";

const formSchemaShopping = Yup.object().shape({
  name: Yup.string()
    .min(2, "Is too short!")
    .max(25, "Is too long!")
    .required("The name is required"),
  email: Yup.string().email("Invalid email").required("Required"),
  address: Yup.string()
    .min(2, "Is too short!")
    .max(25, "Is too long!")
    .required("The address is required"),
  city: Yup.string()
    .min(2, "Is too short!")
    .max(25, "Is too long!")
    .required("The city is required"),
  post: Yup.string()
    .min(5, "Is too short!")
    .max(5, "Is too long!")
    .required("The post code is required"),
});

export default formSchemaShopping;
