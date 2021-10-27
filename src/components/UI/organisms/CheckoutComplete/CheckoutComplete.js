import React from "react";

import { getCartTotal } from "components/UI/organisms/Cart";

import { useCartItems, useData } from "context";

const CheckoutComplete = () => {
  const {
    name,
    lastName,
    phoneNumber,
    email,
    address,
    country,
    city,
    zipCode,
    instructions,
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
          Date: <strong>{new Date().toLocaleDateString("es-ES")} </strong>&nbsp;at&nbsp;
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
        {name && lastName && (
          <p>
            Name:&nbsp;
            <strong>
              {name} {lastName}
            </strong>
          </p>
        )}
        {phoneNumber && (
          <p>
            Phone Number:&nbsp;
            <strong>{phoneNumber}</strong>
          </p>
        )}
        {email && (
          <p>
            Email: <strong>{email}</strong>
          </p>
        )}
        {address && city && country && zipCode && (
          <p>
            Address:&nbsp;
            <strong>
              {address}, {city}, {country}, {zipCode}
            </strong>
          </p>
        )}
        {instructions && (
          <p>
            Delivery Instructions: <strong>{instructions}</strong>
          </p>
        )}
      </div>
    </section>
  );
};

export default CheckoutComplete;
