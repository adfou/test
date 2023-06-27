import React from "react";
import { connect } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import AccordionHeading from "./accordion-heading";
import { setHTML } from "../helpers";

const mapStateToProps = (state) => {

  return {
    cancerType: state.user.cancerType,
    lang : state.user.lang
  }
}

const AccordionContent = ({ accordions, className, cancerType ,lang}) => {
  
  if(accordions != null && accordions.length === 5){
    if(accordions[0]["field_accordion_heading"] == 'Un gen es un fragmento pequeño de ADN (código genético), que cumple una función específica en el cuerpo.'){
      accordions[3]["relationships"]["field_cancer_type"]={name: 'Ovarian'}
      accordions[4].relationships.field_cancer_type={name: 'Pancreatic'}
    }
  }


  
  return accordions && (
    <Accordion>
      { accordions.map( (accordion, i) => {
        
        const isCancerSpecific = accordion.relationships.field_cancer_type && 
              accordion.relationships.field_cancer_type.name;
        return !(isCancerSpecific && isCancerSpecific !== cancerType) && (
          <Card key={ i }>
            <AccordionHeading
              heading={ accordion.field_accordion_heading }
              subheading={ accordion.field_accordion_subheading }
              eventKey={ i + 1 }
              lang = {lang}
            />
            <Accordion.Collapse eventKey={ i + 1 }>
              <Card.Body bsPrefix={ "card-body" + ( className ? " " + className : "") }>
                { setHTML(accordion.field_accordion_body.processed) }
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        );
      })}
    </Accordion>
  );
}

export default connect(mapStateToProps, null)(AccordionContent);
