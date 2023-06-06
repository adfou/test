import React from "react";
import PropTypes from "prop-types";
import { urlify } from "../helpers";
import MenuItem from "./menu-item";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavButton from "./nav-button";

const NavMenu = ({ menuItems, isAdminLoggedIn }) => {
  return (
    <div className="nav-container nav-margin sticky-top">
      <div className="nav-bkgrd">
        <Container>
          <div className="progress-bar position-absolute"></div>
          <Nav justify>
            { menuItems.map( (item, i) => {
              if (item.title !== "End") {
                return (
                  <MenuItem
                    name={ item.title }
                    url={ urlify(item.title) }
                    key={ i }
                    visited={ item.visited }
                  />
                );
              }
            })}
          </Nav>
        </Container>
      </div>
      { isAdminLoggedIn && <div className="text-center mt-3 mb-n3"><NavButton className="btn-admin mx-auto" path="/admin">Back to admin area</NavButton></div> } 
    </div>
  );
}

NavMenu.propTypes = {
  menuItems: PropTypes.array.isRequired,
  isAdminLoggedIn: PropTypes.bool.isRequired,
};

export default NavMenu;
