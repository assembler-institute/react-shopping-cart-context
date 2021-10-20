import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../Input/Input";

const schema = Yup.object().shape({
	fullname: Yup.string().required("Personal name is required."),
	email: Yup.string().required("Email address is required.").email("Invalid email."),
	phone: Yup.string().required("Phone number is required."),
});

function CheckoutPersonalDetails(props) {
	const formik = useFormik({
		initialValues: {
			fullname: "",
			email: "",
			phone: "",
		},
		validationSchema: schema,
		validateOnBlur: true,
		onSubmit: (values, actions) => {},
	});

	const { handleSubmit, handleBlur, handleChange, touched, errors, isValid, isValidating } = formik;

	return (
		<form onSubmit={handleSubmit}>
			<label>
				<h5 className="d-block my-2 fw-normal">Your name*</h5>
				<span className="d-block my-1 fw-light">Specify name of the person.</span>
			</label>
			<div class="input-group mb-3 ">
				<input
					type="text"
					name="fullname"
					id="fullname"
					className={`form-control ${touched.fullname && errors.fullname ? "is-invalid" : null} ${
						touched.fullname && !errors.fullname ? "is-valid" : null
					}`}
					placeholder="Your name..."
					aria-label="Fullname"
					aria-describedby="basic-addon1"
					onBlur={handleBlur}
					onChange={handleChange}
				/>
			</div>
			{touched.fullname && errors.fullname && <p className="invalid-feedback">{errors.fullname}</p>}
			<label>
				<h5 className="d-block my-2 fw-normal">Email address*</h5>
				<span className="d-block my-1 fw-light">Where you will receive the confirmation email.</span>
			</label>
			<div class="input-group mb-3">
				<input
					type="text"
					name="email"
					id="email"
					className="form-control"
					placeholder="Email address..."
					aria-label="Fullname"
					aria-describedby="basic-addon1"
					onBlur={handleBlur}
					onChange={handleChange}
				/>
			</div>
			{touched.email && errors.email && <p className="invalid-feedback">{errors.email}</p>}
			<label>
				<h5 className="d-block my-2 fw-normal">Phone number</h5>
				<span className="d-block my-1 fw-light">The shop will only reach you in case of an emergency.</span>
			</label>
			<div className="input-group mb-3">
				<select className="form-select" id="phonePrefix" name="phonePrefix">
					<option value="ES" selected>
						+34
					</option>
					<option value="FR">+33</option>
					<option value="IT">+39</option>
					<option value="DE">+49</option>
					<option value="CH">+41</option>
					<option value="CH">+44</option>
				</select>
				<input
					type="text"
					name="phone"
					id="phone"
					className="form-control"
					placeholder="Phone number..."
					aria-label="Fullname"
					aria-describedby="basic-addon1"
					onBlur={handleBlur}
					onChange={handleChange}
				/>
			</div>
			{touched.phone && errors.phone && <p className="invalid-feedback">{errors.phone}</p>}
			<button className="btn btn-primary color" type="submit" disabled={isValidating || !isValid}>
				Next
			</button>
		</form>
	);
}

export default CheckoutPersonalDetails;
