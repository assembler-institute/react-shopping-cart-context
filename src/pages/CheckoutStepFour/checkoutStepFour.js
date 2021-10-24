import React, { useContext } from "react";
import withLayout from "../../hoc/withLayout";
import CheckoutHeader from "../../components/CheckoutHeader/CheckoutHeader";
import StepFourForm from "../../components/StepFourForm/StepFourForm";





function CheckoutStepFour() {
    return (
        <>
        <div>
            <CheckoutHeader/>
        </div>
        <div>
            <StepFourForm/>
        </div>
                </>

    )
}
export default withLayout(CheckoutStepFour);