import React, { useContext } from "react";
// import React, { useContext } from "react";
import AuthContext from "../../context/auth-context";

import ShoppingCartItem from "../ShoppingCartItem";
import ButtonLink from "../ButtonLink";
// import CheckoutContext from "../../context/checkout-context";

import { getFirsCheckoutPage } from "../../helpers/order-pages";
import { DETAIL } from "../../constants/routes";

function getCartTotal(cart) {
  return cart.reduce((accum, item) => {
    return accum + item.price * item.quantity;
  }, 0);
}

function Cart({ cartItems, handleRemove, handleChange, checkout, ...props }) {
  // const { updateCheckoutContext } = useContext(CheckoutContext);
  const { auth } = useContext(AuthContext);

  return (
    <aside {...props}>
      <div className="row flex-column">
        <div className="col shopping__cart__header">
          <h2 className="h3 mt-2">Shopping Cart</h2>
          <hr className="mb-3" />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((item) => (
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
          ))
        ) : (
          <div className="col mb-4">
            <h4>Your cart is empty</h4>
          </div>
        )}
        <div className="col shopping__cart__footer">
          <div className="row row-cols-1 flex-column">
            <div className="col">
              <div className="d-flex justify-content-between">
                <h4 className="h5">Total</h4>
                <h4>
                  <strong>{getCartTotal(cartItems)}€</strong>
                </h4>
              </div>
              <hr />
            </div>
            {checkout && (
              <div className="col col-12 d-flex justify-content-center">
                <ButtonLink
                  disabled={!cartItems.length}
                  page={auth.isAuthenticated ? DETAIL : getFirsCheckoutPage()}
                  // handleClick={() => updateCheckoutContext({ actualPage: 1 })}
                >
                  Checkout
                </ButtonLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Cart;
