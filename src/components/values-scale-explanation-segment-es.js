import React from "react";

const ValuesScaleExplanationSegmentES = ({ direction }) => {
  return (
    <div className={ "flex-fill values-scale-explanation-segment-" + direction }>
      <p className={ "answers answers-" + direction }>
        Respuestas en esta dirección:
      </p>
      <p className="explanation">
      Las pruebas genéticas pueden { direction === "left" ? <strong>no</strong> : "" } <strong>ser</strong> adecuada para ti
      </p>
    </div>
  );
}

export default ValuesScaleExplanationSegmentES;
