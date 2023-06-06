import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Button from "react-bootstrap/Button";

const NavButton = ({ path, className, onClick, children }) => {
  return (
    <Button
      to={ path }
      as={ Link }
      onClick={ onClick }
      variant={ "da rounded-pill " + className  }
    >
    { children }
    </Button>
  );
}

NavButton.propTypes = {
  path: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default NavButton;
