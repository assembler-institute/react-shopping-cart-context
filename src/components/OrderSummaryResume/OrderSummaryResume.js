import React from "react";
// import { v4 as uuid } from "uuid";

import CartItemShopping from "../CartItemShopping";
import "./OrderSummaryResume.scss";

function getCartTotal(cart) {
  return cart.reduce((accum, item) => {
    return accum + item.price * item.quantity;
  }, 0);
}

function OrderSummaryResume({ cartItems, ...props }) {
  return (
    <aside {...props}>
      <div>
        <div className="cartItemsContainerResume">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <>
                <CartItemShopping
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  img={item.img}
                  quantity={item.quantity}
                />
                {item !== cartItems[cartItems.length - 1] && (
                  <div key={`${item.id}div`}>
                    <hr />
                  </div>
                )}
              </>
            ))
          ) : (
            <div>
              <h4>Your cart is empty</h4>
            </div>
          )}
        </div>
        <hr />
      </div>
      <section className="checkout__total--section">
        <div>
          <h5>Total</h5>
          <h4>
            <strong>{getCartTotal(cartItems)}€</strong>
          </h4>
        </div>
        <hr />
      </section>
    </aside>
  );
}

export default OrderSummaryResume;
