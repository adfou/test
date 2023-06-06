import React from "react";
import Image from "react-bootstrap/Image";
import headerLeft from "../images/mgh_header_left.svg";
import headerRight from "../images/mgh_header_right.svg";

const Header = () => {
  return (
    <header className="clearfix">
      <div className="header header-left header-padding-left">
          <Image src={ headerLeft } fluid="true" />
      </div>
      <div className="header header-right header-padding-right">
          <Image src={ headerRight } fluid="true" />
      </div>
    </header>
  );
}

export default Header;
