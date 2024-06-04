import React from "react";

const ValuesScaleExplanationSegmentHT = ({ direction }) => {
  return (
    <div className={ "flex-fill values-scale-explanation-segment-" + direction }>
      <p className={ "answers answers-" + direction }>
      Reponn nan fason sa a :
      </p>
      <p className="explanation">
      Tès jenetik gen dwa   { direction === "left" ? <strong>pa</strong> : "" } apwopriye pou ou
      </p>
    </div>
  );
}

export default ValuesScaleExplanationSegmentHT;
