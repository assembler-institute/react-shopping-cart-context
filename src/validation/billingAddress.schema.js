import * as Yup from "yup";
import { COUNTRY_NAME_LIST } from "../constants";

const schema = Yup.object({
	address: Yup.string().required("Address is required."),
	city: Yup.string().required("City is required."),
	zipCode: Yup.string().required("Zip code is required.").max(10, "Zip code must not be longer than 10 digits."),
	country: Yup.string().required("Country is required.").oneOf(Object.keys(COUNTRY_NAME_LIST), "Contry is required."),
});

export default schema;
