import { useContext } from "react";
import { useFormik } from "formik";
import { Redirect } from "react-router";
import { CheckoutContext } from "../../providers/CheckoutProvider";
import * as Yup from "yup";

const schema = Yup.object({
	address: Yup.string().required("Address is required."),
	city: Yup.string().required("City is required."),
	zipcode: Yup.string()
		.required("Zip code is required.")
		.matches(/^\d+$/, "Zip code must be numeric.")
		.max(10, "Zip code must not be longer than 10 digits."),
	country: Yup.string().required("Country is required."),
});

function CheckoutBillingDetails() {
	const {
		state: { step, billingDetails },
		setBillingDetails,
		goBack,
	} = useContext(CheckoutContext);

	const formik = useFormik({
		initialValues: {
			...billingDetails,
		},
		validationSchema: schema,
		validateOnBlur: true,
		onSubmit: (values, actions) => {
			const { setSubmitting } = actions;

			setSubmitting(true);

			setTimeout(() => {
				setBillingDetails(values);
			}, 250);
		},
	});

	const {
		handleSubmit,
		handleBlur,
		handleChange,
		values,
		touched,
		errors,
		isValid,
		isValidating,
		isSubmitting,
	} = formik;

	return (
		<>
			{step !== 2 && <Redirect to={`/checkout/step-${step}`} />}
			<form onSubmit={handleSubmit}>
				<label htmlFor="address" className="control-label">
					<h5 className="d-block my-2 fw-normal">Address*</h5>
				</label>
				<div className="input-group mb-3 has-validation">
					<input
						type="text"
						name="address"
						id="address"
						className={`form-control ${touched.address && errors.address ? "is-invalid" : null} ${
							touched.address && !errors.address ? "is-valid" : null
						}`}
						placeholder="Your address..."
						value={values.address}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{touched.fullname && errors.fullname && <div className="invalid-feedback">{errors.fullname}</div>}
				</div>
				<label htmlFor="city" className="control-label">
					<h5 className="d-block my-1 fw-normal">City*</h5>
				</label>
				<div className="input-group mb-3 has-validation">
					<input
						type="text"
						name="city"
						id="city"
						className={`form-control ${touched.city && errors.city ? "is-invalid" : null} ${
							touched.city && !errors.city ? "is-valid" : null
						}`}
						placeholder="Your city..."
						value={values.city}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{touched.city && errors.city && <div className="invalid-feedback">{errors.city}</div>}
				</div>
				<label htmlFor="zipcode" className="control-label">
					<h5 className="d-block my-2 fw-normal">Zip Code*</h5>
				</label>
				<div className="input-group mb-3 has-validation">
					<input
						type="text"
						name="zipcode"
						id="zipcode"
						className={`form-control ${touched.zipcode && errors.zipcode ? "is-invalid" : null} ${
							touched.zipcode && !errors.zipcode ? "is-valid" : null
						}`}
						placeholder="City zipcode"
						value={values.zipcode}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{touched.zipcode && errors.zipcode && <div className="invalid-feedback">{errors.zipcode}</div>}
				</div>
				<label htmlFor="country" className="control-label">
					<h5 className="d-block my-2 fw-normal">Country*</h5>
				</label>
				<div className="input-group mb-3 has-validation">
					<input
						type="text"
						name="country"
						id="country"
						className={`form-control ${touched.country && errors.country ? "is-invalid" : null} ${
							touched.country && !errors.country ? "is-valid" : null
						}`}
						placeholder="Your country..."
						value={values.country}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{touched.country && errors.country && <div className="invalid-feedback">{errors.country}</div>}
				</div>
				<div className="d-flex justify-content-center gap-2">
					<button type="button" className="btn btn-outline-primary" onClick={goBack}>
						Return to personal details
					</button>
					<button type="submit" className="btn btn-primary" disabled={isValidating || isSubmitting || !isValid}>
						Proceed with the payment details
					</button>
				</div>
			</form>
		</>
	);
}

export default CheckoutBillingDetails;
