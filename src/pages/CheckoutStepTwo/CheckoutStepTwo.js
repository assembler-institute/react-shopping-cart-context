import React from "react";
import CheckoutHeader from "../../components/CheckoutHeader/CheckoutHeader";
import StepTwoForm from "../../components/StepTwoForm";
import withLayout from "../../hoc/withLayout";


function CheckoutStepTwo() {
    return (<>
        <div>
    <CheckoutHeader/>
</div>
        <div>
    <StepTwoForm/>
        </div>
        </>
    )
}
export default withLayout(CheckoutStepTwo);