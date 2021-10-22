import React from "react";
import PropTypes from "prop-types";

function Main({ children, ...props }) {
  return <main {...props}>{children}</main>;
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main;
