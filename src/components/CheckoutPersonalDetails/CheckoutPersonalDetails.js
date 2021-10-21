import { useContext } from "react";
import { useFormik } from "formik";
import { Redirect } from "react-router";
import { CheckoutContext } from "../../providers/CheckoutProvider";
import * as Yup from "yup";

const PHONE_PREFIXES = ["+33", "+34", "+41", "+44", "+49"];

const schema = Yup.object({
	fullname: Yup.string().required("Personal name is required."),
	email: Yup.string().required("Email address is required.").email("Invalid email."),
	phone: Yup.string()
		.required("Phone number is required.")
		.matches(/\d+/, "Phone number must be numeric.")
		.max(10, "Phone number must not be longer than 14 digits."),
});

function CheckoutPersonalDetails() {
	const {
		state: { step, personalDetails },
		setPersonalDetails,
	} = useContext(CheckoutContext);

	const formik = useFormik({
		initialValues: {
			...personalDetails,
		},
		validationSchema: schema,
		validateOnBlur: true,
		onSubmit: (values, actions) => {
			const { setSubmitting } = actions;

			setSubmitting(true);

			setTimeout(() => {
				setPersonalDetails(values);
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
			{step !== 1 && <Redirect to={`/checkout/step-${step}`} />}
			<form onSubmit={handleSubmit}>
				<label htmlFor="fullname" className="control-label">
					<h5 className="d-block my-2 fw-normal">Your name*</h5>
					<span className="d-block my-1 fw-light">Specify name of the person.</span>
				</label>
				<div className="input-group mb-3 has-validation">
					<input
						type="text"
						name="fullname"
						id="fullname"
						className={`form-control ${touched.fullname && errors.fullname ? "is-invalid" : null} ${
							touched.fullname && !errors.fullname ? "is-valid" : null
						}`}
						placeholder="Your name..."
						value={values.fullname}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{touched.fullname && errors.fullname && <div className="invalid-feedback">{errors.fullname}</div>}
				</div>
				<label htmlFor="email" className="control-label">
					<h5 className="d-block my-2 fw-normal">Email address*</h5>
					<span className="d-block my-1 fw-light">Where you will receive the confirmation email.</span>
				</label>
				<div className="input-group mb-3">
					<input
						type="text"
						name="email"
						id="email"
						className={`form-control ${touched.email && errors.email ? "is-invalid" : null} ${
							touched.email && !errors.email ? "is-valid" : null
						}`}
						placeholder="Email address..."
						value={values.email}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{touched.email && errors.email && <div className="invalid-feedback">{errors.email}</div>}
				</div>
				<label htmlFor="phone" className="control-label">
					<h5 className="d-block my-2 fw-normal">Phone number</h5>
					<span className="d-block my-1 fw-light">The shop will only reach you in case of an emergency.</span>
				</label>
				<div className="input-group mb-3">
					<select
						name="phonePrefix"
						id="phonePrefix"
						className="form-select"
						value={values.phonePrefix}
						onChange={handleChange}
					>
						{PHONE_PREFIXES.map((value, index) => (
							<option key={index} value={value}>
								{value}
							</option>
						))}
					</select>
					<input
						type="tel"
						name="phone"
						id="phone"
						className={`form-control ${touched.phone && errors.phone ? "is-invalid" : null} ${
							touched.phone && !errors.phone ? "is-valid" : null
						}`}
						placeholder="Phone number..."
						value={values.phone}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{touched.phone && errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
				</div>
				<div className="d-grid">
					<button className="btn btn-primary" type="submit" disabled={isValidating || isSubmitting || !isValid}>
						Proceed with the billing address
					</button>
				</div>
			</form>
		</>
	);
}

export default CheckoutPersonalDetails;
