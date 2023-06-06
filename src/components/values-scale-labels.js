import React from "react";

const ValuesScaleLabels = ({ left, right }) => {
  return (
    <div className="scale-labels d-flex justify-content-between">
      <div className="scale-label label-left">{ left }</div>
      <div className="scale-label-divider align-self-center position-absolute"></div>
      <div className="scale-label label-right">{ right }</div>
    </div>
  );
}

export default ValuesScaleLabels;
