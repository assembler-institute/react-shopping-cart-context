import React from "react";
import withLayout from "../../hoc/withLayout";
import {useUser} from "../../context/userContext/userContex"




// function getTotal(cart) {
//     return cart.reduce((accum, item) => {
//       return accum + item.price * item.quantity;
//     }, 0);
//   }

function CheckoutStepFour() {
    const { name, email, countryCode, phone,address, city,zip,country,cardNumber} = useUser();
     return(<div>
    <div className="summary">
      <h1>Order completed!</h1>
      <hr />

      <div className="col shopping__cart__footer">
        <div className="row row-cols-1 flex-column">
          <div className="col">
            <div className="d-flex justify-content-between mb-5">
              <h4 className="h5">Total</h4>
              <h4>
                {/* <strong>{getTotal(checkoutCart)}€</strong> */}
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="col shopping__cart__header">
        <h2 className="h3 mt-2">Personal information</h2>
        <hr className="mb-3" />
      </div>
      <div>
        <div className="step1 col">
          <p>
            <span className="h5">Name:</span> {name}
          </p>
          <p>
            <span className="h5">Email:</span> {email}
          </p>
          <p>
            <span className="h5">Name:</span> {countryCode} {phone}
          </p>
        </div>
      </div>

      <div className="col shopping__cart__header">
        <h2 className="h3 mt-2">Shipping information</h2> {}
        <hr className="mb-3" />
      </div>
      <div>
        <div className="step1 col">
          <p>
            <span className="h5">Address:</span>
            <br />
            {address}
            <br />
            {city} - {zip}
            <br />
            {country}
          </p>
        </div>
      </div>

      <div className="col shopping__cart__header">
        <h2 className="h3 mt-2">Billing information</h2>
        <hr className="mb-3" />
      </div>
      <div>
        <div className="step1 col">
          <p>
            {/* <span className="h5">Card holder:</span> {cardHolder} */}
          </p>
          <p>
            <span className="h5">Card number:</span> **** **** ****{" "}
            {cardNumber}
            {/* {cardNumber.slice(12, 16)} */}
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        {/* <Button onClick={goToHome}>Back home</Button> */}
      </div>
    </div>
        </div>
    )
}
export default withLayout(CheckoutStepFour);