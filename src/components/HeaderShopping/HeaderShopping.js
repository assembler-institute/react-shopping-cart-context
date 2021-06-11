import React from "react";
import { NavLink } from "react-router-dom";

import "./HeaderShopping.scss";

function HeaderShopping() {
  return (
    <header className="header__Shopping">
      <NavLink to="../" className="header__logo">
        <img
          className="assembler__logo"
          alt="assembler-logo"
          src="https://assets.website-files.com/5d7ac47d34aefe1ecf290ce6/5d7ac68da9740c393a589ee7_logo_org_1.png"
        />
      </NavLink>
      <ul className="header__ul">
        <li>Home</li>
        <li>Products</li>
        <li>Promotion</li>
        <li>Help</li>
        <li>Contact</li>
        <li>
          <span role="img" aria-label="mi emoji">
            &#128561;
          </span>
        </li>
      </ul>
      <div className="header__icons">
        <span className="material-icons">search</span>
        <span className="material-icons">shopping_bag</span>
      </div>
    </header>
  );
}

export default HeaderShopping;
