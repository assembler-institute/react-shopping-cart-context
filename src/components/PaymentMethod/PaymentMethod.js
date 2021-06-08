import React from "react";

function PaymentMethod({
  type = "radio",
  id = "radio-01",
  group = "payment-methods",
  src = null,
  text,
  ...props
}) {
  return (
    <>
      <input id={id} name={group} type={type} {...props} />
      <label
        htmlFor={id}
        className="payment-method d-flex justify-content-center align-items-center"
      >
        {text && (
          <p className="m-0" htmlFor={id}>
            {text}
          </p>
        )}
        {src && <img src={src} alt={id} />}
      </label>
    </>
  );
}

export default PaymentMethod;
