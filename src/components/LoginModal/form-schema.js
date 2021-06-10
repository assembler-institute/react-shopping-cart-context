import * as Yup from "yup";

export const formLogin = Yup.object().shape({
  loginName: Yup.string()
    .min(2, "The name is too short!")
    .max(30, "The name is too long!")
    .required("A name is required"),
  loginPassword: Yup.string().required("A password is required"),
});
