import React from "react";
import CheckoutHeader from "../../components/CheckoutHeader/CheckoutHeader";
import StepOneForm from "../../components/StepOneForm/StepOneForm";
import withLayout from "../../hoc/withLayout";


function CheckOutStepOne() {
    return (
<>
<div>
    <CheckoutHeader/>
</div>
        <div>
           <StepOneForm/>
        </div>
</>
    )
}
export default withLayout(CheckOutStepOne);