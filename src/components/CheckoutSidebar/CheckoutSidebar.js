import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { orderContext } from "../OrderContextProvider/OrderContextProvider";

import loadLocalStorageItems from "../../utils/loadLocalStorageItems";
import ItemShowcase from "../ItemShowcase";

function CheckoutSidebar() {
  const checkoutCart = loadLocalStorageItems("react-sc-state-cart-items", []);
  const location = useLocation();
  const { stepOne, stepTwo } = useContext(orderContext);

  function getTotal(cart) {
    return cart.reduce((accum, item) => {
      return accum + item.price * item.quantity;
    }, 0);
  }

  return (
    <aside className="col">
      <div className="row flex-column">
        <div className="col shopping__cart__header">
          <h2 className="h3 mt-2">Your order</h2>
          <hr className="mb-3" />
        </div>

        {checkoutCart.map((item) => (
          <ItemShowcase
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
            quantity={item.quantity}
          />
        ))}
        <div className="col shopping__cart__footer">
          <div className="row row-cols-1 flex-column">
            <div className="col">
              <div className="d-flex justify-content-between">
                <h4 className="h5">Total</h4>
                <h4>
                  <strong>{getTotal(checkoutCart)}€</strong>
                </h4>
              </div>
              {/* <hr /> */}
            </div>
          </div>
        </div>
        <div className="col shopping__cart__header">
          <h2 className="h3 mt-2">Your information</h2>
          <hr className="mb-3" />
        </div>
        <div>
          <div className="step1 col">
            {location.pathname === "/checkout/step-2" ||
            location.pathname === "/checkout/step-3" ? (
              <>
                <p>
                  <strong>Name:</strong> {stepOne.name}
                </p>
                <p>
                  <strong>Email:</strong> {stepOne.email}
                </p>
              </>
            ) : null}

            {location.pathname === "/checkout/step-3" ? (
              <>
                <p>
                  <strong>City and country:</strong> {stepTwo.city},
                  {stepTwo.zip} - {stepTwo.country}
                </p>
                <p>
                  <strong>Shipping time:</strong>
                  {stepTwo.country === "Spain" ? (
                    <span> 2 days</span>
                  ) : (
                    <span> 7 days</span>
                  )}
                </p>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </aside>
  );
}
export default CheckoutSidebar;
