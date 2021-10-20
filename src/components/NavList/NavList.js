
import React from 'react';
import { Link } from "react-router-dom";

export default function NavList() {
  return (
    <ul>
      <li>
        <Link to="/checkout/step-1">Information</Link>
      </li>
      <li>
        <Link to="/checkout/step-2">Delivery</Link>
      </li>
      <li>
        <Link to="/checkout/step-3">Payment</Link>
      </li>
    </ul>
  );
}
