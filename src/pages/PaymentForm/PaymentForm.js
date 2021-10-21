import { useFormik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object({
    paymentType: Yup.string()
        .required("Come on, don't be so Catalan and choose your payment type"),
    cardHolderName: Yup.string()
        .required("Come on, don't be so Catalan and input your cardholder name"),
    cardNumber: Yup.string()
        .required("Come on, don't be so Catalan and input your card number"),
    cardExpiryDate: Yup.string()
        .required("Come on, don't be so Catalan and input your card expiry date"),
    CVVCode: Yup.string()
        .required("Come on, don't be so Catalan and input your CVV code"),
    acceptTerms: Yup.boolean().oneOf([true], "The terms and conditions must be accepted."),
})

function PaymentForm(props) {
    const formik = useFormik({
        initialValues: {
            paymentType: "",
            cardHolderName: "",
            cardNumber: "",
            cardExpiryDate: "",
            CVVCode: "",
            acceptTerms: false,
        },
        validationSchema: schema,
        validateOnBlur: true,
        onSubmit: (values, actions) => {
            console.log(1);
            console.log(values)
        },
    })

    const { handleSubmit, handleBlur, handleChange, values, touched, errors, isValid, isValidating } = formik;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {errors.paymentType && touched.paymentType && <div className="text-danger">{errors.paymentType}</div>}
                {errors.cardHolderName && touched.cardHolderName && <div className="text-danger">{errors.cardHolderName}</div>}
                {errors.cardNumber && touched.cardNumber && <div className="text-danger">{errors.cardNumber}</div>}
                {errors.cardExpiryDate && touched.cardExpiryDate && <div className="text-danger">{errors.cardExpiryDate}</div>}
                {errors.CVVCode && touched.CVVCode && <div className="text-danger">{errors.CVVCode}</div>}
                {errors.acceptTerms && touched.acceptTerms && <div className="text-danger">{errors.acceptTerms}</div>}

                <label className="control-label">How would you like to pay?</label><br />
                <div role="group" className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="paymentType"
                        value="visa"
                        onChange={handleChange}
                    />
                    <input
                        className="form-check-input"
                        type="radio"
                        name="paymentType"
                        value="masterCard"
                        onChange={handleChange}
                    />
                    <input
                        className="form-check-input"
                        type="radio"
                        name="paymentType"
                        value="americanExpress"
                        onChange={handleChange}
                    />
                </div>
                <span>We accept the following debit/credit cards</span><br />
                <img alt="visa"></img ><img alt="mastercard"></img><img alt="american express"></img><br />
                <label htmlFor="cardHolderName" className="control-label">Cardholder name*</label><br />
                <input
                    className="form-control"
                    type="text"
                    name="cardHolderName"
                    value={values.cardHolderName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                /><br />
                <label htmlFor="cardNumber" className="control-label">Card number*</label><br />
                <input
                    type="text"
                    className="form-control"
                    name="cardNumber"
                    value={values.cardNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                /><br />
                <label htmlFor="cardExpiryDate" className="control-label">Card expiry date*</label>
                <input
                    type="text"
                    className="form-control"
                    name="cardExpiryDate"
                    placeholder="mm/yy"
                    value={values.cardExpiryDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <label htmlFor="CVVCode" className="control-label">CVV Code*</label><img alt="cvv pic" />
                <input
                    type="text"
                    className="form-control"
                    name="CVVCode"
                    value={values.CVVCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                /><br />
                <input
                    type="checkbox"
                    className="form-check-input"
                    name="acceptTerms"
                    value={values.acceptTerms}
                    onChange={handleChange}
                    onBlur={handleBlur}
                /><label>I have read and accept the booking conditions general terms  and privacy policy</label><br />
                <span>We use secure SSL transmission and encrypted storage to protect your personal information.</span><br />
                <span></span><br />
                <button type="submit" className="btn btn-primary">Complete booking</button>
            </form>
        </div >
    );
}

export default PaymentForm;