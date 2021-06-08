import * as Yup from "yup";

const PersonalDetailsSchema = Yup.object().shape({
  address: Yup.string().required("The address is required"),
  city: Yup.string()
    .min(2, "The city is too short!")
    .max(50, "The city is too long!")
    .required("The city is required"),
  ZC: Yup.string()
    .min(5, "The ZC is too short!")
    .max(10, "The ZC is too long!")
    .required("The ZC is required")
    .matches(/^[0-9]+$/, "ZP must be only digits"),
});

export default PersonalDetailsSchema;
