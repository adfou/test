import React from "react";

const LeftMarginContainer = ({ children }) => {
  return (
    <div className="d-flex justify-content-end">
      <div className="left-margin-container">
        { children }
      </div>
    </div>
  );
}

export default LeftMarginContainer;
