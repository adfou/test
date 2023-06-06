import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { urlify, getNodeId } from "../helpers";
import MenuPathUpdater from "../containers/menu-path-updater";
import Nav from "react-bootstrap/Nav";

const MenuItem = ({ name, url, visited, current, setNewCurrent }) => {
 
  const path = urlify(name);
  const currPath = current.path.slice(1);
  const nodeId = getNodeId(url);
  const vis = visited ? " visited" : "";
  const curr = (currPath === path ? " current" : "");
  return (
    <Nav.Item>
      <Nav.Link 
        bsPrefix="nav-link d-inline-block"
        as={ Link } 
        to={ "/" + path } 
        nodeid={ nodeId }
        onClick={ () => setNewCurrent("/" + path) }
    >
        <span className={ "menu-icon d-block mx-auto" + vis + curr }></span>
        { name }
      </Nav.Link>
    </Nav.Item>
  );
}

MenuItem.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
}

MenuItem.defaultProps = {
  name: "Menu item",
  url: "#"
}

export default MenuPathUpdater(MenuItem);
