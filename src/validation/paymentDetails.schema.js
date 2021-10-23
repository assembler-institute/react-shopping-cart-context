import * as Yup from "yup";
import cardValidator from "card-validator";

const schema = Yup.object({
	method: Yup.string().required("Select a payment method."),
	cardHolderName: Yup.string()
		.required("Cardholder name is required.")
		.test("test-cardHolderName", "Invalid cardholder name.", (value) => cardValidator.cardholderName(value).isValid),
	cardNumber: Yup.string()
		.required("Card number is required.")
		.matches(/^3[47]|4|5[1-5]/, "Only MasterCard, Visa or AmericanExpress")
		.test("test-cardNumber-withCardValidator", "Invalid card number.", (value) => cardValidator.number(value).isValid),
	cardExpirationMonth: Yup.string()
		.required("Month is required.")
		.test("test-cardExpirationMonth", "Invalid month.", (value) => cardValidator.expirationMonth(value).isValid),
	cardExpirationYear: Yup.string()
		.required("Year is required.")
		.test("test-cardExpirationYear", "Invalid year.", (value) => cardValidator.expirationYear(value).isValid),
	cardCVV: Yup.string()
		.required("CVC is required.")
		.test("test-cardCVV", "Invalid CVV", (value) => cardValidator.cvv(value).isValid),
	acceptTerms: Yup.boolean().oneOf([true], "The terms and conditions must be accepted."),
});

export default schema;
