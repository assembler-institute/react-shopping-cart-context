import React, { useContext } from "react";
import Cart from "../../components/Cart";

import { CheckoutContext } from "../../context/CheckoutContext";
import withLayout from "../../hoc/withLayout";

function Checkout() {
    const { cartItems, handleChange, handleRemove } = useContext(CheckoutContext)
    console.log(cartItems)
    return (
        <main>
            <header className="checkoutHeader">
                Header
            </header>
            <article className="checkoutForm">
                Article
            </article>
            <aside>
                <Cart
                    cartItems={cartItems}
                    handleRemove={handleRemove}
                    handleChange={handleChange}
                    className="col col-4" />
            </aside>
            <footer className="checkoutFooter">
                Footer
            </footer>
        </main>

    )
}

export default withLayout(Checkout)