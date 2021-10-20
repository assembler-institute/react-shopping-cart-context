import { useFormik } from "formik";
import { Redirect, useRouteMatch } from "react-router";
import * as Yup from "yup";

import IconImg from "../IconImg";
import flagES from "../../img/flag-icons/spain.png";
import flagFR from "../../img/flag-icons/france.png";
import flagCH from "../../img/flag-icons/switzerland.png";
import flagUK from "../../img/flag-icons/united-kingdom.png";
import flagDE from "../../img/flag-icons/germany.png";
import { useState, useContext } from "react";
import { CheckoutContext } from "../../providers/CheckoutProvider";

const schema = Yup.object().shape({
	fullname: Yup.string().required("Personal name is required."),
	email: Yup.string().required("Email address is required.").email("Invalid email."),
	phone: Yup.number().required("Phone number is required."),
});

function CheckoutPersonalDetails(props) {
	const {
		state: { step },
		setPersonalDetails,
	} = useContext(CheckoutContext);

	const formik = useFormik({
		initialValues: {
			fullname: "",
			email: "",
			phone: null,
			phonePrefix: "+34",
		},
		validationSchema: schema,
		validateOnBlur: true,
		onSubmit: (values, actions) => {
			const { setSubmitting } = actions;

			setSubmitting(true);

			setTimeout(() => {
				setPersonalDetails(values);
			});
		},
	});

	const { handleSubmit, handleBlur, handleChange, touched, errors, isValid, isValidating, isSubmitting } = formik;

	return (
		<>
			{step !== 1 && <Redirect to={`/checkout/step-${step}`} />}
			<form onSubmit={handleSubmit}>
				<label>
					<h5 className="d-block my-2 fw-normal">Your name*</h5>
					<span className="d-block my-1 fw-light">Specify name of the person.</span>
				</label>
				<div className="input-group mb-3 has-validation">
					<input
						type="text"
						name="fullname"
						id="fullname"
						className={`form-control ${touched.fullname && errors.fullname ? "is-invalid" : null} ${touched.fullname && !errors.fullname ? "is-valid" : null}`}
						placeholder="Your name..."
						aria-label="Fullname"
						aria-describedby="basic-addon1"
						onBlur={handleBlur}
						onChange={handleChange}
					/>
					{touched.fullname && errors.fullname && <div className="invalid-feedback">{errors.fullname}</div>}
				</div>
				<label>
					<h5 className="d-block my-2 fw-normal">Email address*</h5>
					<span className="d-block my-1 fw-light">Where you will receive the confirmation email.</span>
				</label>
				<div className="input-group mb-3">
					<input
						type="text"
						name="email"
						id="email"
						className={`form-control ${touched.email && errors.email ? "is-invalid" : null} ${touched.email && !errors.email ? "is-valid" : null}`}
						placeholder="Email address..."
						aria-label="Email"
						aria-describedby="basic-addon1"
						onBlur={handleBlur}
						onChange={handleChange}
					/>
					{touched.email && errors.email && <div className="invalid-feedback">{errors.email}</div>}
				</div>
				<label>
					<h5 className="d-block my-2 fw-normal">Phone number</h5>
					<span className="d-block my-1 fw-light">The shop will only reach you in case of an emergency.</span>
				</label>
				<div className="input-group mb-3">
					<select className="form-select" name="phonePrefix" id="phonePrefix" defaultValue="+34" onBlur={handleBlur} onChange={handleChange}>
						<option value="+33">+33</option>
						<option value="+34">+34</option>
						<option value="+41">+41</option>
						<option value="+44">+44</option>
						<option value="+49">+49</option>
					</select>
					<input
						type="number"
						name="phone"
						id="phone"
						className={`form-control ${touched.phone && errors.phone ? "is-invalid" : null} ${touched.phone && !errors.phone ? "is-valid" : null}`}
						placeholder="Phone number..."
						aria-label="Phone"
						aria-describedby="basic-addon1"
						onBlur={handleBlur}
						onChange={handleChange}
					/>
					{touched.phone && errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
				</div>
				<div className="d-grid">
					<button className="btn btn-primary color" type="submit" disabled={isValidating || isSubmitting || !isValid}>
						Proceed with the billing address
					</button>
				</div>
			</form>
		</>
	);
}

export default CheckoutPersonalDetails;
