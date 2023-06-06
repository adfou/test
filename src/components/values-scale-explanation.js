import React from "react";
import ValuesScaleExplanationSegment from "./values-scale-explanation-segment";
import ValuesScaleExplanationSegmentES from "./values-scale-explanation-segment-es";

const ValuesScaleExplanation = ({ classes="" ,lang}) => {
  const directions = ["left", "right"];
  const className = (classes && " " + classes);
  if(lang =="en"){
  return (
    <div className={ "values-scale-explanation d-flex" + className }>
      { directions.map( (direction, i) => {
        return (
          <ValuesScaleExplanationSegment
            direction={ direction }
            key={ i }
          />
        )
      })}
    </div>
  );}
  else{
    return (
      <div className={ "values-scale-explanation d-flex" + className }>
        { directions.map( (direction, i) => {
          return (
            <ValuesScaleExplanationSegmentES
              direction={ direction }
              key={ i }
            />
          )
        })}
      </div>
    );
  }
}

export default ValuesScaleExplanation;
