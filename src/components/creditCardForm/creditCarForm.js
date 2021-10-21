import { useFormik } from "formik";
import * as Yup from "yup";
import Cards from "react-credit-cards";

const schema = Yup.object({
	method: Yup.string().required("Select a payment method."),
	cardHolderName: Yup.string().required("Cardholder name is required."),
	cardNumber: Yup.string()
		.required("Card number is required")
		.matches(/^\d+$/, "Card number must be numeric")
		.min(16, "Card number must have 16 digits")
		.max(16, "Card number must have 16 digits"),
	cardExpirationMonth: Yup.number().required("Month is required").min(1, "Invalid month").max(12, "Invalid month"),
	cardExpirationYear: Yup.number()
		.required("Year is required")
		.min(new Date().getFullYear(), "Invalid year")
		.max(new Date().getFullYear() + 10, "Invalid year"),
	cardCVV: Yup.number().required("CVV is required").min(0, "Invalid number").max(9999, "Invalid number"),
	acceptTerms: Yup.boolean().oneOf([true], "The terms and conditions must be accepted."),
});

function PaymentForm(props) {
	const formik = useFormik({
		initialValues: {
			method: "",
			cardHolderName: "",
			cardNumber: "",
			cardExpiryDate: "",
			CVVCode: "",
			acceptTerms: false,
		},
		validationSchema: schema,
		validateOnBlur: true,
		onSubmit: (values, actions) => {
			console.log(values);
		},
	});

	const { handleSubmit, handleBlur, handleChange, values, touched, errors, isValid, isValidating } = formik;
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label className="control-label">How would you like to pay?</label>
				<br />
				<div role="group" className="form-check form-check-inline">
					<input className="form-check-input" type="radio" name="method" value="visa" onChange={handleChange} />
					<input className="form-check-input" type="radio" name="method" value="masterCard" onChange={handleChange} />
					<input
						className="form-check-input"
						type="radio"
						name="method"
						value="americanExpress"
						onChange={handleChange}
					/>
				</div>
				{errors.method && touched.method && <div className="text-danger">{errors.method}</div>}
				<span>We accept the following debit/credit cards</span>
				<br />
				<img alt="visa"></img>
				<img alt="mastercard"></img>
				<img alt="american express"></img>
				<br />
				<label htmlFor="cardHolderName" className="control-label">
					Cardholder name*
				</label>
				<br />
				<input
					className="form-control"
					type="text"
					name="cardHolderName"
					value={values.cardHolderName}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				<br />
				{errors.cardHolderName && touched.cardHolderName && <div className="text-danger">{errors.cardHolderName}</div>}
				<label htmlFor="cardNumber" className="control-label">
					Card number*
				</label>
				<br />
				<input
					type="text"
					className="form-control"
					name="cardNumber"
					value={values.cardNumber}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				<br />
				{errors.cardNumber && touched.cardNumber && <div className="text-danger">{errors.cardNumber}</div>}
				<label htmlFor="cardExpiryDate" className="control-label">
					Card expiry date*
				</label>
				<input
					type="text"
					className="form-control"
					name="cardExpiryDate"
					placeholder="mm/yy"
					value={values.cardExpiryDate}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.cardExpiryDate && touched.cardExpiryDate && <div className="text-danger">{errors.cardExpiryDate}</div>}
				<label htmlFor="CVVCode" className="control-label">
					CVV Code*
				</label>
				<img alt="cvv pic" />
				<input
					type="text"
					className="form-control"
					name="CVVCode"
					value={values.CVVCode}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				<br />
				{errors.CVVCode && touched.CVVCode && <div className="text-danger">{errors.CVVCode}</div>}
				<input
					type="checkbox"
					className="form-check-input"
					name="acceptTerms"
					value={values.acceptTerms}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				<label>I have read and accept the booking conditions general terms and privacy policy</label>
				<br />
				<span>We use secure SSL transmission and encrypted storage to protect your personal information.</span>
				<br />
				<br />
				{errors.acceptTerms && touched.acceptTerms && <div className="text-danger">{errors.acceptTerms}</div>}

				<button type="submit" className="btn btn-primary">
					Complete booking
				</button>
			</form>
		</div>
	);
}

export default PaymentForm;
