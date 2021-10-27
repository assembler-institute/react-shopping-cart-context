import React from "react";

import { ShoppingCartItem } from "components/UI/molecules";

import { useCartItems } from "context";

function getCartTotal() {
  const { cartItems, cartItemIds } = useCartItems();

  return cartItemIds.reduce((accum, cartItemId) => {
    const product = cartItems[cartItemId];
    return accum + product.price * product.quantity;
  }, 0);
}

function CheckOutCart({ ...props }) {
  const { cartItems, cartItemIds } = useCartItems();

  return (
    <aside {...props}>
      <div className="row flex-column">
        <div className="col shopping__cart__header">
          <h2 className="h3 mt-2">Shopping Cart</h2>
          <hr className="mb-3" />
        </div>

        {cartItemIds.length > 0 ? (
          cartItemIds.map((itemId, index) => {
            const item = cartItems[itemId];

            return (
              <div className="col" key={index}>
                <div className="row flex-column ">
                  <div className="col">
                    <div className="row ">
                      <img
                        className="ShoppingCartItem__img col-6"
                        src={item.img}
                        alt=""
                      />

                      <div className="col-6 col-xl-6">
                        <div className="row flex-column">
                          <div className="col">
                            <p>
                              <strong>{item.title}</strong>
                            </p>
                            <p>
                              Price: <strong>{item.price}€</strong>
                            </p>
                            <p>
                              Quantity:<strong> {item.quantity}</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <hr />
                  </div>
                </div>
              </div>
            );
          })
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
                  <strong>{getCartTotal()}€</strong>
                </h4>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default CheckOutCart;
