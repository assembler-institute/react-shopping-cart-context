import React from "react";
// import cn from "clsx";

function Button({ submitButton, disabled = false, children, ...props }) {
  // const classes = cn({
  //   // btn: true,
  //   // "btn-primary": true,
  //   // "btn-block": block,
  //   // "btn-sm": small,
  //   btnForm: true,
  // });

  return (
    <button
      className="btn btn-light p-3 btn__SHopping"
      type={submitButton ? "submit" : "button"}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
