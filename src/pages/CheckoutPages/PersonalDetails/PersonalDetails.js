import React from "react";
import withLayout from "../../../hoc/withLayout";

const isCheckout = true;

function PersonalDetails({ cartItems }) {
  return (
    <div className="row">
      <div className="col col-8">Personal details</div>
      <div className="col col-4">
        {cartItems.map((item) => (
          <div key={item.id} id={item.id}>
            <p>Product name: {item.title}</p>
            <img
              src={item.img}
              alt={item.title}
              style={({ width: "100px" }, { height: "100px" })}
            />
            <p>Amount: {item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default withLayout(PersonalDetails, isCheckout);
