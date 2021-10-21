import { useFormik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object({
  address: Yup.string()
    .required("Come on, don't be lazy and input your address here"),
  city: Yup.string()
    .required("Come on, don't be lazy and input your city here"),
  zipCode: Yup.string()
    .required("Come on, don't be lazy and input your zip code here")
    .matches(/\d+/, "zip code must be numeric")
    .max(10, "must not be longer than 10 digits"),
  country: Yup.string()
    .required("Come on, be a good patriot and input your country here")
});

function BillingDetailsForm(props) {
  const formik = useFormik({
    initialValues: {
      address: '',
      city: '',
      zipCode: '',
      country: '',
    },
    validationSchema: schema,
    validateOnBlur: true,
    onSubmit: (values, actions) => {
      console.log(values)
    },
  });

  const { handleSubmit, handleBlur, handleChange, values, touched, errors, isValid, isValidating } = formik;

  return (
    <div className="div">
      <form onSubmit={handleSubmit}>
        <label htmlFor="address" className="control-label">Address*</label> <br />
        <input
          placeholder="Input your address"
          name="address"
          type="text"
          className="form-control"
          value={values.address}
          onBlur={handleBlur}
          onChange={handleChange} /><br />
        {errors.address && touched.address && <div className="text-danger">{errors.address}</div>}
        <label htmlFor="city" className="control-label">City*</label><br />
        <input
          placeholder="Input your city"
          name="city"
          type="text"
          value={values.city}
          className="form-control"
          onBlur={handleBlur}
          onChange={handleChange} />
        <br />
        {errors.city && touched.city && <div className="text-danger">{errors.city}</div>}
        <label htmlFor="zipCode" className="control-label">Zip/post code*</label><br />

        <input
          placeholder="Input your zip code"
          name="zipCode"
          type="number"
          className="form-control"
          value={values.zipCode}
          onBlur={handleBlur}
          onChange={handleChange} />
        <br />
        {errors.zipCode && touched.zipCode && <div className="text-danger">{errors.zipCode}</div>}
        <label htmlFor="country" className="control-label">Country/region*</label><br />
        <input
          placeholder="Input country/region"
          name="country"
          type="text"
          className="form-control"
          value={values.country}
          onBlur={handleBlur}
          onChange={handleChange} />
        <br />
        {errors.country && touched.country && <div className="text-danger">{errors.country}</div>}
        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    </div>
  );
}

export default BillingDetailsForm;