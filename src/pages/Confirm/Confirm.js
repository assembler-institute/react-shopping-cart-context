import React, { useContext } from "react";
import ShoppingContext from "../../context";
import "./confirm.scss";

function Confirm() {
  const { cartItems } = useContext(ShoppingContext);
  console.log(cartItems);
  return (
    <>
      <section className="container">
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 ">Your order is confirmed</h1>
            <p className="lead my-3">congets your order was confrim!!</p>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <h4>Serial Number</h4>
            <p>eeee</p>
          </div>
          <div className="col">
            <h4>Payment</h4>
            <p>payment metod</p>
          </div>
          <div className="col">
            <h4>adress</h4>
            <p>adress</p>
          </div>
        </div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <div className="list-group-item d-flex justify-content-between lh-sm">
              <img className="my-0" src={item.img} alt="product" />
              <div className="text-muted">
                <h2>{item.title}</h2>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
              </div>
            </div>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <h5 className="my-0">Subtotal</h5>
                <h6 className="text-muted">$12</h6>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <h5 className="my-0">Express Shipping</h5>
                <h6 className="text-muted">$12</h6>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <h5 className="my-0">taxes</h5>
                <h6 className="text-muted">$12</h6>
              </li>
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <h5 className="my-0">Discount</h5>
                <h6 className="text-muted">$12</h6>
              </li>
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
          <span className="badge bg-primary rounded-pill">
            price dddddededededede
          </span>
        </div>
        <div>
          <p>Will send you a confirmation message to your gmail email</p>
        </div>
      </section>
    </>
  );
}

export default Confirm;
