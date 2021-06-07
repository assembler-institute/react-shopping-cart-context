import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const PersonalDetailsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "The name is too short!")
    .max(50, "The name is too long!")
    .required("The name is required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

export default PersonalDetailsSchema;
