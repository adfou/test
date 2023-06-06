import React from "react";

const ValuesScaleExplanationSegment = ({ direction }) => {
  return (
    <div className={ "flex-fill values-scale-explanation-segment-" + direction }>
      <p className={ "answers answers-" + direction }>
        Answers in this direction:
      </p>
      <p className="explanation">
        Genetic testing may { direction === "left" ? <strong>not</strong> : "" } be right for you
      </p>
    </div>
  );
}

export default ValuesScaleExplanationSegment;
