import React from "react";

import ShoppingCartItem from "../ShoppingCartItem";
import Button from "../Button";

import { useProducts } from "../../context/products/reducer";

function getCartTotal(cart) {
  const {
    cartItems,
    cartItemIds,
  } = useProducts();

  return cartItemIds.reduce((accum, cartItemId) => {
    const product = cartItems[cartItemId]
    return accum + product.price * product.quantity;
  }, 0)
}

function Cart({
  // cartItems, 
  handleRemove,
  handleChange,
  ...props
}) {

  const {
    // products,
    // productIds,
    cartItems,
    cartItemIds,
    // isLoading,
    // hasError,
    // loadingError,
    // handleAddToCart,
    // handleDownVote,
    // handleUpVote,
    // handleSetFavorite,
    // saveNewProduct
  } = useProducts();

  return (
    <aside {...props}>
      <div className="row flex-column">
        <div className="col shopping__cart__header">
          <h2 className="h3 mt-2">Shopping Cart</h2>
          <hr className="mb-3" />
        </div>

        {cartItemIds.length > 0 ? (
          cartItemIds.map((itemId) => {
            const item = cartItems[itemId]

            return (
              <ShoppingCartItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                img={item.img}
                quantity={item.quantity}
                unitsInStock={item.unitsInStock}
              // handleRemove={handleRemove}
              // handleChange={handleChange}
              />
            )
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
                  <strong>{getCartTotal(cartItemIds)}€</strong>
                </h4>
              </div>
              <hr />
            </div>
            <div className="col">
              <Button>Checkout</Button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Cart;
