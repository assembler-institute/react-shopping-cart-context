import React, { useContext } from "react";
import { OverviewContext } from "../../context/OverviewContext";

// components
import ShoppingCartItem from "../ShoppingCartItem";

// functions
import { getCartTotal } from "../Cart/Cart";

// styles
import "./overview.scss"

export default function Overview() {
    const { cartItems, handleChange, handleRemove } = useContext(OverviewContext)
    const subTotal = getCartTotal(cartItems)
    const shippingCost = Math.round(subTotal * 0.05)

    console.log("render:overview")

    return (
        <aside className="wrapperOverview">
            <header className="overviewHeader">
                <h5>YOUR ORDER</h5>
            </header >
            <hr />
            <main className="overviewItemList">
                {cartItems.map(item => {
                    return (
                        <ShoppingCartItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            img={item.img}
                            quantity={item.quantity}
                            unitsInStock={item.unitsInStock}
                            handleRemove={handleRemove}
                            handleChange={handleChange}
                        />
                    )
                })}
                <div className="totalPricing">
                    <div className="subTotal mflex mrow mjustify-between">
                        <p>Subtotal</p>
                        <p>{`${subTotal}€`}</p>
                    </div>
                    <div className="shippingCost mflex mrow mjustify-between">
                        <p>Shipping</p>
                        <p>{`${shippingCost}€`}</p>
                    </div>
                    <div className="Total mflex mrow mjustify-between">
                        <p>Total</p>
                        <p>{`${subTotal + shippingCost}€`}</p>
                    </div>
                </div>
            </main>

        </aside >
    )
}