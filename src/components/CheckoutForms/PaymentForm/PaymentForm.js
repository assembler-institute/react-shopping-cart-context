import React, { useContext } from "react"
// import { Redirect } from "react-router-dom"

import { Formik } from "formik"
// schema
import { Redirect } from "react-router-dom"
import { paymentFormSchema } from "./paymentFormSchema"
// context
import { CheckoutContext } from "../../../context/CheckoutContext"
import { CreditCardContext } from "../../../context/CreditCardContext"
// components
import Input from "../../Input"
import CreditCardTemplate from "../../CreditCardTemplate"
// images import
import applePay from "../../../assets/img/applePay.png";
import paypalPay from "../../../assets/img/paypalPay.png";
import visa from "../../../assets/img/visa.png";
import mastercard from "../../../assets/img/mastercard.png";
import americanExpress from "../../../assets/img/americanExpress.png";

// helpers
import { expirationDateFormat } from "../../../helper/regex"


export function PaymentForm() {
    const { payment, setFormInfo, actualStep, setStep } = useContext(CheckoutContext)
    console.log("render: PaymentForm")
    return (
        <section className="paymentSection">

            <Formik
                initialValues={{
                    method: payment.method ? payment.method.toString() : "",
                    creditCard: payment.creditCard ? payment.creditCard : "",
                    cardHolderName: payment.cardHolderName ? payment.cardHolderName : "",
                    cardNumber: payment.cardNumber ? payment.cardNumber : "",
                    expireDate: payment.expireDate ? payment.expireDate : "",
                    cvv: payment.cvv ? payment.cvv : "",
                    conditions: false

                }}
                validationSchema={paymentFormSchema}

                onSubmit={(values) => {
                    /* send values to reducer */
                    /* condition if user selects type of credit card, and after that, change method */
                    if (values.method !== "credit") {
                        setFormInfo("payment", { ...values, creditCard: "" })
                    } else {
                        setFormInfo("payment", values)
                    }


                }}

            >
                {({
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <CreditCardContext.Provider value={{
                        cardHolderName: values.cardHolderName,
                        cardNumber: values.cardNumber,
                        expireDate: values.expireDate,
                        cvv: values.cvv
                    }}>
                        <div className="paymentFormWrapper">
                            <form className="paymentForm" onSubmit={handleSubmit}>
                                <h1 className="formTitle">Payment details</h1>
                                <p className="bolder">How would you like to pay?</p>
                                <div className="methodsContainer">
                                    {/* pay methods */}
                                    <Input
                                        type="radio"
                                        name="method"
                                        id="method"
                                        label="Credit / Debit card"
                                        checked={
                                            values.method === "credit"
                                        }
                                        payMethod
                                        value="credit"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <Input
                                        type="radio"
                                        name="method"
                                        id="paypalPay"
                                        label={paypalPay}
                                        checked={
                                            values.method === "paypalPay"
                                        }
                                        payMethod
                                        imageLabel
                                        value="paypalPay"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <Input
                                        type="radio"
                                        name="method"
                                        id="applePay"
                                        label={applePay}
                                        checked={
                                            values.method === "applePay"
                                        }
                                        payMethod
                                        imageLabel
                                        value="applePay"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </div>
                                {errors.method
                                    && (<p className="text-danger">{errors.method}</p>)}

                                {values.method === "credit" &&
                                    <>
                                        {/* credit cards */}
                                        <p>We accept the following debit/credit cards</p>
                                        <div className="creditCompanyContainer">
                                            <Input
                                                type="radio"
                                                name="creditCard"
                                                id="visa"
                                                radioChecked={values.creditCard === "visa"}
                                                label={visa}
                                                creditCardRadios
                                                value="visa"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <Input
                                                type="radio"
                                                name="creditCard"
                                                id="mastercard"
                                                radioChecked={values.creditCard === "mastercard"}
                                                label={mastercard}
                                                creditCardRadios
                                                value="mastercard"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <Input
                                                type="radio"
                                                name="creditCard"
                                                id="americanExpress"
                                                radioChecked={values.creditCard === "americanExpress"}
                                                label={americanExpress}
                                                creditCardRadios
                                                value="americanExpress"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                        </div>
                                        {errors.creditCard && touched.creditCard
                                            && (<p className="text-danger">{errors.creditCard}</p>)}
                                    </>
                                }
                                {/* field inputs for credit card */}
                                {values.method &&
                                    <>
                                        <Input
                                            type="text"
                                            name="cardHolderName"
                                            id="cardHolderName"
                                            label="Cardholder name*"
                                            value={values.cardHolderName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            hasErrorMessage={touched.cardHolderName}
                                            errorMessage={errors.cardHolderName}
                                        />

                                        <Input
                                            type="text"
                                            name="cardNumber"
                                            id="cardNumber"
                                            label="Card number*"
                                            value={
                                                values.cardNumber
                                                    .replace(/\s/g, "")
                                                    .replace(/(\d{4})/g, "$1 ")
                                                    .trim()
                                            }
                                            maxLength="19"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            hasErrorMessage={touched.cardNumber}
                                            errorMessage={errors.cardNumber}
                                        />
                                        <div className="secretFields">
                                            <Input
                                                type="text"
                                                name="expireDate"
                                                id="expireDate"
                                                label="Expiration date*"
                                                maxLength="5"
                                                value={expirationDateFormat(values.expireDate)}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                hasErrorMessage={touched.expireDate}
                                                errorMessage={errors.expireDate}
                                            />
                                            <Input
                                                type="password"
                                                name="cvv"
                                                id="cvv"
                                                label="CVV*"
                                                maxLength="3"
                                                value={values.cvv}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                hasErrorMessage={touched.cvv}
                                                errorMessage={errors.cvv}
                                            />
                                        </div>
                                        <div className="conditionsContainer">
                                            <Input
                                                type="checkbox"
                                                name="conditions"
                                                id="conditions"
                                                value={values.conditions}
                                                label=""
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <p>I have read and I accept the booking conditions, general terms and privacy policy.</p>
                                        </div>
                                        {errors.conditions
                                            && (<p className="text-danger">{errors.conditions}</p>)}
                                    </>
                                }

                                <div className="formBtnWrapper mflex mjustify-between">
                                    <button
                                        type="button"
                                        onClick={() => setStep(actualStep - 1)}
                                        className="mnoButton cancelFormBtn"
                                    >
                                        Back to shipping address
                                    </button>
                                    <button
                                        className="formButton submitForm"
                                        type="submit"
                                    >
                                        Confirm checkout
                                    </button>
                                </div>
                            </form>
                            <CreditCardTemplate />
                        </div>
                    </CreditCardContext.Provider>
                )}
            </Formik>
            {actualStep === 4 && <Redirect to="/checkout/step-4" />}
        </section>


    )
}