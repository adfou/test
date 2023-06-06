import React from "react";
import { Link } from "gatsby";
import MghLogo from "../images/mgh_logo_footer.svg";

const Footer = ({ className }) => {
  const classes = (className ? " " + className : "");
  return (
    <footer className={ "d-flex justify-content-between" + classes }>
      <img src={ MghLogo } alt="MGH logo" />
      <p>&copy;2020 Massachusetts General Hospital Cancer Center<br />
      <Link to="/admin">Admin</Link></p>
    </footer>
  );
}

export default Footer;
