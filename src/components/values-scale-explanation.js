import React from "react";
import ValuesScaleExplanationSegment from "./values-scale-explanation-segment";
import ValuesScaleExplanationSegmentES from "./values-scale-explanation-segment-es";
import ValuesScaleExplanationSegmentHT from"./values-scale-explanation-segment-ht";
import ValuesScaleExplanationSegmentPT from "./values-scale-explanation-segment-pt"
const ValuesScaleExplanation = ({ classes="" ,lang}) => {
  const directions = ["left", "right"];
  const className = (classes && " " + classes);

  return (
    <div className={ "values-scale-explanation d-flex" + className }>
      { directions.map( (direction, i) => {
        switch(lang){
          case "en":
            return (
              <ValuesScaleExplanationSegment
                direction={ direction }
                key={ i }
              />
            )
          case "es":
            return (
              <ValuesScaleExplanationSegmentES
                direction={ direction }
                key={ i }
              />
            )
          case "ht":
            return (
              <ValuesScaleExplanationSegmentHT
                direction={ direction }
                key={ i }
              />
            )
          case "pt-pt":
            return (
              <ValuesScaleExplanationSegmentPT
                direction={ direction }
                key={ i }
              />
            )

        }
        return (
          <ValuesScaleExplanationSegment
            direction={ direction }
            key={ i }
          />
        )
      })}
    </div>
  );
}

export default ValuesScaleExplanation;
