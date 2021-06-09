import React from "react";

function PaymentMethod({
  type = "radio",
  id = "radio-01",
  group = "paymentMethod",
  src = null,
  text,
  setPayment = () => {},
  checked,
  ...props
}) {
  function handleChange() {
    setPayment(id);
  }

  return (
    <>
      <input
        id={id}
        name={group}
        type={type}
        value={id}
        onChange={handleChange}
        {...props}
      />
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
