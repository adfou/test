import React, { useContext } from "react";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import AccordionContext from "react-bootstrap/AccordionContext";
import Card from "react-bootstrap/Card";

const AccordionHeading = ({ heading, subheading, eventKey, callback,lang }) => {

  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );
  const isCurrentEventKey = activeEventKey === eventKey;
  
  var iconDisplay  =getIconDisplay(isCurrentEventKey);
  switch(lang) {
    case "es":
      iconDisplay  =getIconDisplay_es(isCurrentEventKey);
      break;
    case "ht":
      iconDisplay  =getIconDisplay_ht(isCurrentEventKey);
      break;
    case "pt-pt":
      iconDisplay  =getIconDisplay_pt(isCurrentEventKey);
      break;  
    default:
      iconDisplay= getIconDisplay(isCurrentEventKey);
  }
  //const iconDisplay = lang === "es" ? getIconDisplay_es(isCurrentEventKey) : getIconDisplay(isCurrentEventKey);

  return (
    <Card.Header onClick={ decoratedOnClick }>
      <div className="d-flex accordion-header-content">
        <div className="icon-wrapper d-flex align-items-center">
          <div className={ "icon " + iconDisplay.style }>{ iconDisplay.text }</div>
        </div>
        <div className="heading-wrapper">
          <h3>{ heading }</h3>
          { subheading ? <h4>{ subheading }</h4> : "" }
        </div>
      </div>
    </Card.Header>
  );
}

  const getIconDisplay = (isOpen) => {
    return isOpen ?
      { style: "icon-close", text: "less" } :
      { style: "icon-open", text: "more" };
  }
  //plis
  const getIconDisplay_es = (isOpen) => {
    return isOpen ?
      { style: "icon-close", text: "menos" } :
      { style: "icon-open", text: "más" };
  }
  const getIconDisplay_ht = (isOpen) => {
    return isOpen ?
      { style: "icon-close", text: "mwens" } :
      { style: "icon-open", text: "plis" };
  }
  const getIconDisplay_pt = (isOpen) => {
    return isOpen ?
      { style: "icon-close", text: "menos " } :
      { style: "icon-open", text: "mais" };
  }

export default AccordionHeading;
