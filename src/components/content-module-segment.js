import React from "react";
import Card from "react-bootstrap/Card";
import MultChoiceSegment from "./mult-choice-segment";
import ButtonSegment from "./button-segment";
import { setHTML, getContent } from "../helpers";

const ContentModuleSegment = ({ segment }) => {
  const MULT_CHOICE = "field_multiple_choice";
  const BUTTON = "field_button_with_text";
  const components = segment.relationships;
  return (
    <>
      { segment.field_content && <Card.Text as="div">{ setHTML(segment.field_content.processed) }</Card.Text> }
      { Object.keys(components).map( (type, i) => {
        switch(type) {
          case MULT_CHOICE:
            const multChoice = getContent(components, MULT_CHOICE, "field_option_name");
            return multChoice && <MultChoiceSegment key={ i } content={ multChoice } />;
          case BUTTON:
            const buttons = getContent(components, BUTTON, "field_button_text");
            return buttons && (
              buttons.map( (button, j) => {
                return <ButtonSegment key={ j } content={ button } />;
              }));
          default:
            return <></>;
        }
      })}
    </>
  );
}

export default ContentModuleSegment;
