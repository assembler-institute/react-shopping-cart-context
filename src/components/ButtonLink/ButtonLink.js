import React from "react";
import cn from "clsx";
import { Link } from "react-router-dom";

function ButtonLink({
  page,
  disabled = false,
  block = false,
  small = false,
  children,
  ...props
}) {
  const classes = cn({
    "btn px-4": true,
    "btn-primary": true,
    "btn-block": block,
    "btn-sm": small,
  });

  return (
    // <button
    //   className={classes}
    //   type={submitButton ? "submit" : "button"}
    //   disabled={disabled}
    //   {...props}
    // >
    //   {children}
    // </button>

    <Link className={classes} disabled={disabled} to={page} {...props}>
      {children}
    </Link>
  );
}

export default ButtonLink;
