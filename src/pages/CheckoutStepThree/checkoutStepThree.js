import React from "react";
import withLayout from "../../hoc/withLayout";
import StepThreeForm from "../../components/StepThreeForm/index"
import CheckoutHeader from "../../components/CheckoutHeader/CheckoutHeader";


function CheckoutStepThree() {
    return (
        <>
        <div>
        <div>
    <CheckoutHeader/>
</div>
        </div>
        <div>
            <StepThreeForm/>
        </div>
        </>
    )
}
export default withLayout(CheckoutStepThree);