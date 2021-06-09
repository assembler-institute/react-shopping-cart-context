import React from "react";
import cn from "clsx";
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";

function ButtonLink({
  page = "",
  disabled = false,
  block = false,
  small = false,
  children,
  ...props
}) {
  const history = useHistory();
  const classes = cn({
    "btn px-4 mx-3": true,
    "btn-primary": true,
    "btn-block": block,
    "btn-sm": small,
  });

  return (
    <button
      className={classes}
      type="button"
      disabled={disabled}
      onClick={() => history.push(page)}
      {...props}
    >
      {children}
    </button>

    // <Link className={classes} disabled={disabled} to={page} {...props}>
    //   {children}
    // </Link>
  );
}

export default ButtonLink;
