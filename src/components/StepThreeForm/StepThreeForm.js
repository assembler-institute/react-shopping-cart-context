import { useFormik } from "formik";
import { Redirect } from "react-router";
import { useUser } from "../../context/userContext/userContex";
import Input from "../Input";
import stepThreeSchema from "./schema";
import Button from "../Button/index";
import Cards from "react-credit-cards";
import 'react-credit-cards/es/styles-compiled.css';

function StepThreeForm() {
    const { cardNumber, cvc, nameOnCard,expiryDate , userDataValidPage3, submitStepThree} = useUser();

    const formik = useFormik({
        initialValues: {
            cardNumber: cardNumber,
            cvc: cvc,
            nameOnCard: nameOnCard,
            expiryDate:expiryDate
        },
        validationSchema: stepThreeSchema,
        onSubmit: (values) => {
            submitStepThree(values);
            useUser(values)
            console.log(values)
            setTimeout(() => {
                setHasSubmitted(true);
            }, 500);
        },
    });
    if(userDataValidPage3){
        return(<Redirect to="/checkout/order-summary"/>)
      }

    return (
        <>
            <form onSubmit={formik.handleSubmit} id="stepThree">

            <Cards
          cvc={formik.values.cvc}
          name={formik.values.nameOnCard}
          number= {formik.values.cardNumber}
          expiry={formik.values.expiryDate}
        />

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

                <Input
                    type="number"
                    label="CVC"
                    id="cvc"
                    value={formik.values.cvc}
                    placeholder="Your CVC"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    hasErrorMessage={formik.touched.cvc}
                    errorMessage={formik.errors.cvc}
                    isTouched={formik.touched.cvc}
                />

                <Input
                    type="text"
                    label="Name on card"
                    id="nameOnCard"
                    value={formik.values.nameOnCard}
                    placeholder="Your Name On Card"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    hasErrorMessage={formik.touched.nameOnCard}
                    errorMessage={formik.errors.nameOnCard}
                    isTouched={formik.touched.nameOnCard}
                />

                <Input
                    type="number"
                    label="expiryDate"
                    id="expiryDate"
                    value={formik.values.expiryDate}
                    placeholder="Your Expiry Month"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    hasErrorMessage={formik.touched.expiryDate}
                    errorMessage={formik.errors.expiryDate}
                    isTouched={formik.touched.expiryDate}
                />



                <Button
                    submitButton
                    block
                    disabled={formik.isValidating || !formik.isValid}
                >
                    {formik.isSubmitting ? "Submitting..." : "Submit"}
                </Button>
            </form>
        </>
    ) 
}

export default StepThreeForm