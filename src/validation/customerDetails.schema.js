import * as Yup from "yup";
import { COUNTRY_PHONE_PREFIX_LIST } from "../constants";

const schema = Yup.object({
	fullname: Yup.string().required("Personal name is required."),
	email: Yup.string().required("Email address is required.").email("Invalid email."),
	phoneNumber: Yup.string()
		.required("Phone number is required.")
		.matches(/^\d+$/, "Phone number must be numeric.")
		.length(9, "Phone number length must be of 9 digits."),
	phonePrefix: Yup.string()
		.required("Phone prefix is required.")
		.oneOf(Object.values(COUNTRY_PHONE_PREFIX_LIST), "The terms and conditions must be accepted."),
});

export default schema;
