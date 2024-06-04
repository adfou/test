import React from "react";

const ValuesScaleExplanationSegmentPT = ({ direction }) => {
  return (
    <div className={ "flex-fill values-scale-explanation-segment-" + direction }>
      <p className={ "answers answers-" + direction }>
      Respostas nesta direção:
      </p>
      <p className="explanation">
      Os testes genéticos podem  { direction === "left" ? <strong>não</strong> : "" } <strong>ser</strong> a melhor decisão para você
      </p>
    </div>
  );
}

export default ValuesScaleExplanationSegmentPT;
