import React, { useContext } from "react"
import ReviewProductItem from "../../../components/ReviewProductItem/ReviewProductItem"
import { CheckoutContext } from "../../../context/CheckoutContext"
import { OverviewContext } from "../../../context/OverviewContext"

export function Review() {
    const { personalInfo, billingAddress, payment } = useContext(CheckoutContext)
    const { cartItems } = useContext(OverviewContext)

    console.log(billingAddress, payment, cartItems)
    return (
        <div className="reviewContainer">
            <section className="reviewSection">
                <div className="orderConfirmed">
                    <h1>Order confirmed!</h1>
                    <p>Hi {personalInfo.name},</p>
                    <p>Your order was confirmed and will be shipping soon.</p>
                    <hr />
                </div>
                <div className="orderInfo">
                    <div className="orderItem">
                        <p className="orderItemTitle">
                            Order Date
                        </p>
                        <p className="orderItemDescriptin">
                            {new Date().toLocaleDateString()}
                        </p>
                    </div>
                    <div className="orderItem">
                        <p className="orderItemTitle">
                            Order number:
                        </p>
                        <p className="orderItemDescriptin">
                            {new Date().toLocaleDateString()}
                        </p>
                    </div>
                    <div className="orderItem">
                        <p className="orderItemTitle">
                            Payment
                        </p>
                        <p className="orderItemDescriptin">
                            {payment.cardNumber
                                /* .substring(payment.cardNumber.length - 4, payment.cardNumber.length) */
                            }
                        </p>
                    </div>
                    <div className="orderItem">
                        <p className="orderItemTitle">
                            Address
                        </p>
                        <p className="orderItemDescriptin">
                            {billingAddress.address}
                        </p>
                    </div>
                </div>
                <div className="reviewProducts">
                    <hr />
                    {cartItems.map(item => (
                        <ReviewProductItem
                            key={item.id}
                            id={item.id}
                            img={item.img}
                            title={item.title}
                            price={item.price}
                            quantity={item.quantity}
                        />
                    ))}
                </div>


            </section>
        </div>
    )
}