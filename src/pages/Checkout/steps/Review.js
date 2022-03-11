import React, { useContext, useState } from "react"
import Button from "../../../components/Button"
import ReviewProductItem from "../../../components/ReviewProductItem/ReviewProductItem"
import { CheckoutContext } from "../../../context/CheckoutContext"
import { OverviewContext } from "../../../context/OverviewContext"

export function Review() {
    const [saveUserInfo, setSaveUserInfo] = useState(false)
    const {
        personalInfo,
        billingAddress,
        payment,
        setCheckoutDone
    } = useContext(CheckoutContext)
    const {
        cartItems,
        subTotal,
        shippingCost,
        taxes
    } = useContext(OverviewContext)
    const totalCalculated = subTotal + shippingCost + taxes
    const orderNumber = Math.round(Math.random(1, 9999) * 10)
    const typePayment = payment.method === "credit" ? payment.creditCard : payment.method
    const lastNumbersCard = payment.cardNumber
        .substring(payment.cardNumber.length - 4, payment.cardNumber.length)

    return (
        <div className="reviewContainer">
            <section className="reviewSection">
                <div className="orderConfirmed">
                    <h1>Order confirmed!</h1>
                    <p>Hi {personalInfo.name},</p>
                    <p>Your order was confirmed and will be shipping soon.</p>
                    <span>
                        <input
                            className="saveInfoCheckbox"
                            type="checkbox"
                            onChange={() => setSaveUserInfo(!saveUserInfo)}
                        />
                        Do you want to save your data for future purchases?

                    </span>
                    <hr />
                </div>
                <div className="orderInfo">
                    <div className="orderItem">
                        <p className="orderItemTitle">
                            Order Date
                        </p>
                        <p className="orderItemDescription">
                            {new Date().toLocaleDateString()}
                        </p>
                    </div>
                    <div className="orderItem">
                        <p className="orderItemTitle">
                            Order number:
                        </p>
                        <p className="orderItemDescription">
                            {orderNumber}
                        </p>
                    </div>
                    <div className="orderItem">
                        <p className="orderItemTitle">
                            Payment
                        </p>
                        <p className="orderItemDescription">
                            {`${typePayment} - ${lastNumbersCard}`
                            }
                        </p>
                    </div>
                    <div className="orderItem">
                        <p className="orderItemTitle">
                            Address
                        </p>
                        <p className="orderItemDescription">
                            {billingAddress.address}
                        </p>
                    </div>
                </div>
                <div className="reviewProducts">
                    {cartItems.map(item => (

                        <ReviewProductItem
                            key={item.id}
                            img={item.img}
                            title={item.title}
                            price={item.price}
                            quantity={item.quantity}
                        />
                    ))}
                </div>
                <div className="subtotalSummary">
                    <div className="subtotal">
                        <p>Sub total</p>
                        <p>{subTotal}€</p>
                    </div>
                    <div className="shippingCost">
                        <p>Express shipping</p>
                        <p>{shippingCost}€</p>
                    </div>
                    <div className="taxes">
                        <p>Taxes</p>
                        <p>{taxes}€</p>
                    </div>
                </div>
                <div className="totalContainer">
                    <p className="bolder">Total</p>
                    <p className="bolder">{totalCalculated}€</p>
                </div>
                <Button
                    onClick={() => setCheckoutDone(saveUserInfo)}
                >Back to home</Button>
            </section>
        </div>
    )
}