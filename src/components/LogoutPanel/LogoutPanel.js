import React, { useContext } from "react";

import AuthContext from "../../context/AuthContext";

function LogoutPanel(props) {
  const { userName } = props;
  const { logout } = useContext(AuthContext);
  return (
    <>
      <li className="d-inline-flex">
        <span className="navbar-text mx-4"> {userName}</span>
        <button className="btn btn-light" type="button" onClick={logout}>
          Logout
        </button>
      </li>
    </>
  );
}

export default LogoutPanel;
