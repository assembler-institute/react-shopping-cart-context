import React from "react"
import { OverviewContext } from "../../context/OverviewContext"
import { getCartTotal } from "../Cart/Cart";

export default function OverviewContextProvider({
    children,
    setCartItems,
    cartItems,
    handleChange,
    handleRemove }) {
    const subTotal = getCartTotal(cartItems)
    return (
        <OverviewContext.Provider value={{
            setCartItems: setCartItems,
            shippingCost: 15,
            taxes: 10,
            cartItems: cartItems,
            handleChange: handleChange,
            handleRemove: handleRemove,
            subTotal: subTotal,
        }}>
            {children}
        </OverviewContext.Provider>
    )
}