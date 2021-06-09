import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import { BILLING_URL, PAYMENT_URL, PROFILE_URL } from "../../utils/constants";

import "./ProcessBar.scss";

function ProcessBar({ processCompletedFlags }) {
  return (
    <div className="d-flex justify-content-around mb-3">
      <NavLink
        className="process-item"
        to={PROFILE_URL}
        activeClassName="process-active"
      >
        1. Profile
      </NavLink>
      <NavLink
        onClick={(event) => {
          if (!processCompletedFlags.profile) {
            event.preventDefault();
          }
        }}
        className={classNames("process-item", {
          "process-disabled": !processCompletedFlags.profile,
        })}
        to={BILLING_URL}
        activeClassName="process-active"
      >
        2. Billing
      </NavLink>
      <NavLink
        onClick={(event) => {
          if (
            !processCompletedFlags.profile ||
            !processCompletedFlags.billing
          ) {
            event.preventDefault();
          }
        }}
        className={classNames("process-item", {
          "process-disabled":
            !processCompletedFlags.profile || !processCompletedFlags.billing,
        })}
        to={PAYMENT_URL}
        activeClassName="process-active"
      >
        3. Payment
      </NavLink>
    </div>
  );
}

export default ProcessBar;
