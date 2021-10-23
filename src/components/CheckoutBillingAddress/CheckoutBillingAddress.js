import { useContext } from "react";
import { useFormik } from "formik";
import { Redirect } from "react-router";
import { CheckoutContext } from "../../providers/CheckoutProvider";
import CheckoutNav from "../CheckoutNav/CheckoutNav";

import { billingAddressSchema } from "../../validation";
import { COUNTRY_NAME_LIST } from "../../constants";

function CheckoutBillingAddress(props) {
	const {
		state: { step, billingAddress },
		setBillingDetails,
	} = useContext(CheckoutContext);

	const formik = useFormik({
		initialValues: {
			...billingAddress,
		},
		validationSchema: billingAddressSchema,
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
						className={`form-control ${touched.address && errors.address && "is-invalid"} ${
							touched.address && !errors.address && "is-valid"
						}`}
						placeholder="Your address..."
						value={values.address}
						onChange={handleChange}
						onBlur={handleBlur}
						autoFocus
					/>
					{touched.address && errors.address && <div className="invalid-feedback">{errors.address}</div>}
				</div>
				<label htmlFor="city" className="control-label">
					<h5 className="d-block my-1 fw-normal">City*</h5>
				</label>
				<div className="input-group mb-3 has-validation">
					<input
						type="text"
						name="city"
						id="city"
						className={`form-control ${touched.city && errors.city && "is-invalid"} ${
							touched.city && !errors.city && "is-valid"
						}`}
						placeholder="Your city..."
						value={values.city}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{touched.city && errors.city && <div className="invalid-feedback">{errors.city}</div>}
				</div>
				<label htmlFor="zipCode" className="control-label">
					<h5 className="d-block my-2 fw-normal">Zip Code*</h5>
				</label>
				<div className="input-group mb-3 has-validation">
					<input
						type="text"
						name="zipCode"
						id="zipCode"
						className={`form-control ${touched.zipCode && errors.zipCode && "is-invalid"} ${
							touched.zipCode && !errors.zipCode && "is-valid"
						}`}
						placeholder="City zip code"
						value={values.zipCode}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{touched.zipCode && errors.zipCode && <div className="invalid-feedback">{errors.zipCode}</div>}
				</div>
				<label htmlFor="country" className="control-label">
					<h5 className="d-block my-2 fw-normal">Country*</h5>
				</label>
				<div className="input-group mb-3 has-validation">
					<select
						type="text"
						name="country"
						id="country"
						className={`form-select ${touched.country && errors.country && "is-invalid"} ${
							touched.country && !errors.country && "is-valid"
						}`}
						value={values.country}
						onChange={handleChange}
						onBlur={handleBlur}
					>
						{Object.entries(COUNTRY_NAME_LIST).map(([code, name], index) => (
							<option key={index} value={code}>
								{name}
							</option>
						))}
					</select>
					{touched.country && errors.country && <div className="invalid-feedback">{errors.country}</div>}
				</div>
				<CheckoutNav
					backButtonMsg="Return to billing address"
					nextButtonMsg="Proceed with the payment details"
					nextButtonDisabled={!isValid || isValidating || isSubmitting}
				/>
			</form>
		</>
	);
}

export default CheckoutBillingAddress;
