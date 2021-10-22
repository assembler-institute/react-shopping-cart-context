import { useFormik } from "formik";
import { useState } from "react";
import { Redirect } from "react-router";
import { useUser } from "../../context/userContext/userContex";
import Input from "../Input";
import stepThreeSchema from "./schema";
import Button from "../Button/index"

function StepThreeForm() {
    const { cardNumber, cvc, nameOnCard, expiryMonth, expiryYear} = useUser();
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: {
            cardNumber: cardNumber,
            cvc: cvc,
            nameOnCard: nameOnCard,
            expiryMonth: expiryMonth,
            expiryYear: expiryYear,
        },
        validationSchema: stepThreeSchema,
        onSubmit: (values) => {
            submitStepThree(values);
            
            console.log(values)
            setTimeout(() => {
                setHasSubmitted(true);
            }, 500);
        },

    });

    return (
        <>
            <form onSubmit={formik.handleSubmit} id="stepThree">
                <Input
                    type="number"
                    label="Card Number"
                    id="cardNumber"
                    value={formik.values.cardNumber}
                    placeholder="Your Card Number"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    hasErrorMessage={formik.touched.cardNumber}
                    errorMessage={formik.errors.cardNumber}
                    isTouched={formik.touched.cardNumber}
                />

                {/* <Input
                    type="text"
                    label="City"
                    id="city"
                    value={formik.values.city}
                    placeholder="Your city"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    hasErrorMessage={formik.touched.city}
                    errorMessage={formik.errors.city}
                    isTouched={formik.touched.city}
                />

                <Input
                    type="text"
                    label="Zip code"
                    id="zip"
                    value={formik.values.zip}
                    placeholder="Your zip code"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    hasErrorMessage={formik.touched.zip}
                    errorMessage={formik.errors.zip}
                    isTouched={formik.touched.zip}
                /> */}

                <Button
                    submitButton
                    block
                    disabled={formik.isValidating || !formik.isValid}
                >
                    {formik.isSubmitting ? "Submitting..." : "Submit"}
                </Button>
                {hasSubmitted && <Redirect to="/checkout/step-4" />}
            </form>
        </>
    ) 
}

export default StepThreeForm