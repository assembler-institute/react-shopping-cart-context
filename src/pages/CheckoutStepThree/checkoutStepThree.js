import React from "react";
import withLayout from "../../hoc/withLayout";
import StepThreeForm from "../../components/StepThreeForm/index"


function CheckoutStepThree() {
    return (
        <>
        <div>
            <StepThreeForm/>
        </div>
        </>
    )
}
export default withLayout(CheckoutStepThree);