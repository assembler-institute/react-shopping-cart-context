import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const schema = Yup.object({
    paymentType: Yup.string()
        .required("Come on, don't be so Catalan and choose your payment type"),
    payment: Yup.string()
        .required("Come on, don't be so Catalan and choose your payment type"),
    name: Yup.string()
        .required("Come on, don't be so Catalan and input your name"),
    number: Yup.string()
        .required("Come on, don't be so Catalan and input your card number")
        .matches(/\d+/, "Card number must be numeric"),
    expiry: Yup.string()
        .required("Come on, don't be so Catalan and input your card expiry date"),
    cvc: Yup.string()
        .required("Come on, don't be so Catalan and input your CVV code")
        .matches(/\d+/, "Card number must be numeric"),
    acceptTerms: Yup.boolean().oneOf([true], "The terms and conditions must be accepted."),
})

function PaymentForm(props) {

    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');


    const formik = useFormik({
        initialValues: {
            paymentType: "",
            name: name,
            number: number,
            expiry: expiry,
            cvc: cvc,
            acceptTerms: false,
        },
        validationSchema: schema,
        validateOnBlur: true,
        onSubmit: (values, actions) => {
            console.log(values)
        },
    })
    const { handleSubmit, handleBlur, handleChange, values, touched, errors, isValid, isValidating } = formik;
    return (
        <div>
            <Cards
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focus}
            />
            <form onSubmit={handleSubmit}>
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
                        disabled="true"
                        onChange={handleChange}
                    />
                    <input
                        className="form-check-input"
                        type="radio"
                        name="paymentType"
                        value="americanExpress"
                        disabled="true"
                        onChange={handleChange}
                    />
                </div>
                {errors.paymentType && touched.paymentType && <div className="text-danger">{errors.paymentType}</div>}
                <span>We accept the following debit/credit cards</span><br />
                <img alt="visa"></img ><img alt="mastercard"></img><img alt="american express"></img><br />
                <label htmlFor="name" className="control-label">Cardholder name*</label><br />
                <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                /><br />
                {errors.name && touched.name && <div className="text-danger">{errors.name}</div>}
                <label htmlFor="number" className="control-label">Card number*</label><br />
                <input
                    placeholder="Card Number"
                    type="tel"
                    className="form-control"
                    name="number"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                /><br />
                {errors.number && touched.number && <div className="text-danger">{errors.number}</div>}
                <label htmlFor="expiry" className="control-label">Card expiry date*</label>
                <input
                    type="text"
                    className="form-control"
                    name="expiry"
                    placeholder="mm/yy"
                    value={expiry}
                    onChange={e => setExpiry(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />
                {errors.expiry && touched.expiry && <div className="text-danger">{errors.expiry}</div>}
                <label htmlFor="cvc" className="control-label">CVV Code*</label><img alt="cvv pic" />
                <input
                    placeholder="CVV"
                    type="tel"
                    className="form-control"
                    name="cvc"
                    value={cvc}
                    onChange={e => setCvc(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                /><br />
                {errors.cvc && touched.cvc && <div className="text-danger">{errors.cvc}</div>}
                <input
                    type="checkbox"
                    className="form-check-input"
                    name="acceptTerms"
                    value={values.acceptTerms}
                    onChange={handleChange}
                    onFocus={e => setFocus(e.target.name)} />
                <label>I have read and accept the booking conditions general terms  and privacy policy</label><br />
                <span>We use secure SSL transmission and encrypted storage to protect your personal information.</span><br />
                <br />
                {errors.acceptTerms && touched.acceptTerms && <div className="text-danger">{errors.acceptTerms}</div>}

                <button type="submit" className="btn btn-primary">Complete booking</button>
            </form>
        </div >
    );
}

export default PaymentForm;