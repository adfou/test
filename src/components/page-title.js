import React from "react";
import Container from "react-bootstrap/Container";
import LeftMarginContainer from "./left-margin-container";

const PageTitle = ({ children }) => {
  return (
    <div className="title-border d-flex justify-content-end">
      <div className="left-page-title-margin blue-bkgrd">
        <div className="page-title-left-margin">
          <div className="left-margin-container mx-auto">
          <h1>{ children }</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageTitle;
