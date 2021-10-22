

import { useFormik } from "formik";
import { useState } from "react";
import { Redirect } from "react-router";
import { useUser } from "../../context/userContext/userContex";
import Input from "../Input";
import stepTwoSchema from "./Schema";
import Button from "../Button/index"


function StepTwoForm() {
    const { address, city,zip,country,userDataValidPagae2,submitStepTwo } = useUser();
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: {
            address: address,
            city: city,
            zip: zip,
            country: country,
        },
        validationSchema: stepTwoSchema,
        onSubmit: (values) => {
            submitStepTwo(values);
            useUser(values)
            console.log(values)
            setTimeout(() => {
                setHasSubmitted(true);
            }, 500);
        },
    });
    if(userDataValidPagae2){
        return(<Redirect to="/checkout/order-summary"/>)
      }

    return (
        <>
            <form onSubmit={formik.handleSubmit} id="stepTwo">
                <Input
                    type="text"
                    label="Address"
                    id="address"
                    value={formik.values.address}
                    placeholder="Your complete address"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    hasErrorMessage={formik.touched.address}
                    errorMessage={formik.errors.address}
                    isTouched={formik.touched.address}
                />

                <Input
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
                />

                <Button
                    submitButton
                    block
                    disabled={formik.isValidating || !formik.isValid}
                >
                    {formik.isSubmitting ? "Submitting..." : "Submit"}
                </Button>
                {/* {hasSubmitted && <Redirect to="/checkout/order-summary" />} */}
            </form>
        </>
    )
} export default StepTwoForm