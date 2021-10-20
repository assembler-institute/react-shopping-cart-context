import React from "react";
import StepOneForm from "../../components/StepOneForm/StepOneForm";
import withLayout from "../../hoc/withLayout";


function CheckOutStepOne() {
    return (
        <div>
           <StepOneForm/>
        </div>
    )
}
export default withLayout(CheckOutStepOne);