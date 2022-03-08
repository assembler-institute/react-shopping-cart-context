import React, { useContext } from "react";

import { CheckoutContext } from "../../../context/CheckoutContext";

export function PersonalForm() {
    const { handleSteps } = useContext(CheckoutContext)
    return <button type="button" onClick={() => handleSteps()}>Continue to delivery</button>
}