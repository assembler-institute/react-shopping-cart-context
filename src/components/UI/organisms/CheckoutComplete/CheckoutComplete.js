import { CartItemsProvider, useCartItems, useData, useProducts } from "context";
import React from "react";
import { getCartTotal } from "../Cart";

const CheckoutComplete = () => {
  const {
    name,
    lastName,
    phoneNumber,
    email,
    Address,
    Country,
    City,
    ZipCode,
    DeliveryInstrucctions,
  } = useData();

  const orderNumber = Math.floor(Math.random() * Math.random() * 1000000);
  const { cartItems, cartItemIds } = useCartItems();

  return (
    <section>
      <hr />
      <div className="d-flex justify-content-between">
        <span>
          Order Number: <strong>{orderNumber}</strong>
        </span>
        <span>
          Date: <strong>{new Date().toLocaleDateString("es-ES")} </strong> at
          <strong>{new Date().toLocaleTimeString("es-ES")}</strong>
        </span>
      </div>
      <hr />

      <div>
        <h3>Order Details:</h3>

        {cartItemIds.map((id) => {
          const product = cartItems[id];
          return (
            <div className="d-flex justify-content-between">
              <div className="col-2">
                <img
                  className="ShoppingCartItem__img"
                  src={product.img}
                  alt=""
                />
              </div>
              <span>
                {product.quantity} x {product.title}
              </span>

              <strong>
                <span>{product.quantity * product.price} €</span>
              </strong>
            </div>
          );
        })}
      </div>

      <hr />
      <div className="d-flex justify-content-end">
        <span>
          Total: <strong> {getCartTotal()}€</strong>
        </span>
      </div>
      <hr />
      <div>
        <h3>Shipping Details:</h3>
      </div>
      <hr />

      <div>
        <p>
          Name:{" "}
          <strong>
            {name} {lastName}
          </strong>{" "}
        </p>
        {phoneNumber && (
          <p>
            <strong>Phone Number: {phoneNumber}</strong>
          </p>
        )}
        <p>
          Email: <strong>{email}</strong>
        </p>
        <p>
          Address:
          <strong>
            {Address}, {City}, {Country}, {ZipCode}
          </strong>
        </p>
        {DeliveryInstrucctions && (
          <p>
            Delivery Instructions: <strong>{DeliveryInstrucctions}</strong>
          </p>
        )}
      </div>
    </section>
  );
};

export default CheckoutComplete;
