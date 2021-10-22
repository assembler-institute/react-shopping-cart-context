import Button from "@restart/ui/esm/Button";
import { Link } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";
import { getCartTotal, getCartTotalIVA } from "../Cart";
import { useProducts } from "../Context/reducer";
import { useUsers } from "../Context/UserContext";

function ResumePurchase() {
  const { cartItems, resetCartItems } = useProducts();
  const { reset } = useUsers();

  const {
    name,
    shipping,
    address,
    taxes,
    cardNumber,
    paymentMethod,
  } = useUsers();

  return (
    <>
      <Breadcrumbs active="resume" />
      <div className="d-flex justify-content-between">
        <div>
          <b>Payment Details</b>
        </div>
        <div>Step 3 of 4</div>
      </div>
      <hr />
      <div className="card p-3" style={{ background: "#eee" }}>
        <div>
          <h3>Your Order Confirmed</h3>
          <div>Hi {name}</div>
          <div>Your order has been confirmed and will be shipping soon</div>
        </div>
        <hr />
        <div className="d-flex flex-wrap flex-row">
          <div style={{ width: "25%" }}>
            <div>Order Date</div>
            <div>{new Date().toDateString()}</div>
          </div>
          <div style={{ width: "25%" }}>
            <div>Order Id</div>
            <div>BK56988569</div>
          </div>
          <div style={{ width: "25%" }}>
            <div>Payment</div>
            <div>
              {cardNumber != "" && paymentMethod === "Visa"
                ? paymentMethod + " - " + (cardNumber % 10000)
                : paymentMethod}
            </div>
          </div>
          <div style={{ width: "25%" }}>
            <div>Address</div>
            <div>{address}</div>
          </div>
        </div>
        <hr />

        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <div className="d-flex flex-row p-3" key={item.id}>
              <div style={{ width: "20%" }}>
                <img style={{ width: "100%" }} src={item.img}></img>
              </div>
              <div style={{ width: "40%" }}>
                <span
                  style={{ height: "100%" }}
                  className="d-flex justify-content-center align-items-center"
                >
                  <b>{item.title}</b>
                </span>
              </div>
              <div style={{ width: "20%" }}>
                <span
                  style={{ height: "100%" }}
                  className="d-flex justify-content-center align-items-center"
                >
                  Qty: {item.quantity}
                </span>
              </div>
              <div style={{ width: "20%" }}>
                <span
                  style={{ height: "100%" }}
                  className="d-flex justify-content-center align-items-center"
                >
                  {item.price} €
                </span>
              </div>
            </div>
          ))}
        <hr />
        <div>Subtotal: {getCartTotal(cartItems)} €</div>
        <div>Shipping: {shipping} €</div>
        <div>IVA: {taxes && taxes * 100 - 100} %</div>
        <div>Discount:</div>
        <hr />
        <div>
          Total: {(getCartTotalIVA(cartItems, taxes) + shipping).toFixed(2)} €
        </div>
        <hr />
        <div>
          We'll send you shipping confirmation when your item(s) are on the way!
          We appreciate your business, and hope you enjoy your purchase.
        </div>
      </div>
      <Link to="/">
        <button
          onClick={() => {
            resetCartItems();
            reset();
          }}
        >
          Home
        </button>
      </Link>
    </>
  );
}

export default ResumePurchase;
