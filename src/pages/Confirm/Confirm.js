import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ShoppingContext from "../../context";
import "./confirm.scss";
import { getCartTotal } from "../../components/Cart/Cart";
import Button from "../../components/Button";

function Confirm() {
  const { cartItems, details, adressData, paymentData } = useContext(
    ShoppingContext,
  );
  const { userName, userEmail } = details;
  const { streetName, cityName, country } = adressData;
  const {
    paymentMethod,
    cardholderName,
    cardNumer,
    cardExpiryDate,
  } = paymentData;
  console.log("CARITMENS", cartItems);
  console.log("DETAILS", details);
  console.log("ADRESSDATA", adressData);
  console.log("PAYMENT", paymentData);
  return (
    <>
      <section className="container">
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 ">Congrats {userName}!!</h1>
            <p className="lead my-3">Your order was confrim!!</p>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <h4>Card data</h4>
            <p> Name {cardholderName}</p>
            <p>Number {cardNumer}</p>
            <p>Expiration date {cardExpiryDate}</p>
          </div>
          <div className="col">
            <h4>Payment</h4>
            <p>Method {paymentMethod}</p>
          </div>
          <div className="col">
            <h4>Adress</h4>
            <p>
              {streetName},{cityName},{country}
            </p>
          </div>
        </div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <div className="list-group-item d-flex justify-content-between lh-sm">
              <img className="my-0" src={item.img} alt="product" />
              <div className="text-muted">
                <h2>Product: {item.title}</h2>
                <p>Price for unit: ${item.price}</p>
                <p>Units: {item.quantity}</p>
              </div>
            </div>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <h5 className="my-0">Total for this product</h5>
                <h6 className="text-muted">${item.price * item.quantity}</h6>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <h5 className="my-0">Serial number</h5>
                <h6 className="text-muted">{item.id}</h6>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <h5 className="my-0">Rest in stock</h5>
                <h6 className="text-muted">
                  {item.unitsInStock - item.quantity}
                </h6>
              </li>
              {/* <li className="list-group-item d-flex justify-content-between lh-sm">
                <h5 className="my-0">Discount</h5>
                <h6 className="text-muted">$12</h6>
              </li> */}
            </ul>
          </div>
        ))}
        <div className="list-group-item d-flex justify-content-between lh-sm">
          <h3
            id="total"
            className="d-flex justify-content-between align-items-center mb-3"
          >
            TOTAL
          </h3>

          <p className="badge bg-primary rounded-pill">
            ${getCartTotal(cartItems)}
          </p>
        </div>
        <div>
          <p>Will send you a confirmation message to your emial: {userEmail}</p>
          <NavLink to="/">
            <Button>FINISH</Button>
          </NavLink>
        </div>
      </section>
    </>
  );
}

export default Confirm;
