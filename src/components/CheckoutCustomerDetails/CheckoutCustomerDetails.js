import { useContext } from "react";
import { useFormik } from "formik";
import { Redirect } from "react-router";
import { CheckoutContext } from "../../providers/CheckoutProvider";
import CheckoutNav from "../CheckoutNav/CheckoutNav";
import { customerDetailsSchema } from "../../validation";
import { COUNTRY_PHONE_PREFIX_LIST } from "../../constants";

function CheckoutCustomerDetails() {
	const {
		state: { step, customerDetails },
		setPersonalDetails,
	} = useContext(CheckoutContext);

	const formik = useFormik({
		initialValues: {
			...customerDetails,
		},
		validationSchema: customerDetailsSchema,
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
						className={`form-control ${touched.fullname && errors.fullname && "is-invalid"} ${
							touched.fullname && !errors.fullname && "is-valid"
						}`}
						placeholder="Your name..."
						value={values.fullname}
						onChange={handleChange}
						onBlur={handleBlur}
						autoFocus
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
						className={`form-control ${touched.email && errors.email && "is-invalid"} ${
							touched.email && !errors.email && "is-valid"
						}`}
						placeholder="Email address..."
						value={values.email}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{touched.email && errors.email && <div className="invalid-feedback">{errors.email}</div>}
				</div>
				<label htmlFor="phoneNumber" className="control-label">
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
						{Object.values(COUNTRY_PHONE_PREFIX_LIST).map((value, index) => (
							<option key={index} value={value}>
								{value}
							</option>
						))}
					</select>
					<input
						type="tel"
						name="phoneNumber"
						id="phoneNumber"
						className={`form-control ${touched.phoneNumber && errors.phoneNumber && "is-invalid"} ${
							touched.phoneNumber && !errors.phoneNumber && "is-valid"
						}`}
						placeholder="Phone number..."
						value={values.phoneNumber}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{touched.phoneNumber && errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
				</div>
				<CheckoutNav
					nextButtonMsg="Proceed with the billing address"
					nextButtonDisabled={!isValid || isValidating || isSubmitting}
				/>
			</form>
		</>
	);
}

export default CheckoutCustomerDetails;
