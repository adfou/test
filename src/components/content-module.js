import React from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Fade from "react-bootstrap/Fade";
import { getContent } from "../helpers";
import HideShowContentModule from "./hide-show-content-module";
import ContentModuleSegment from "./content-module-segment";

const mapStateToProps = (state) => {
  return {
    cancerType: state.user.cancerType
  }
}

const ContentModule = ({ content, cancerType }) => {
 
  let modules = content.field_content_module;
  let hideShowContent = [];
  if(modules.length == 6 && (modules[0]["field_module_title"] == "Opciones de pruebas genéticas")){
     
     modules[0].relationships["field_cancer_type"]={'name': 'Ovarian'}
     modules[1].relationships["field_cancer_type"]={'name': 'Pancreatic'}
     modules[4].relationships["field_cancer_type"]={'name': 'Ovarian'}
     modules[5].relationships["field_cancer_type"]={'name': 'Pancreatic'}
  }
  if (modules.length > 0 && modules[0].field_module_title) {
 
    if (modules[1] && modules[1].relationships.hasOwnProperty("field_it_s_your_choice_label") &&
        modules[1].relationships["field_it_s_your_choice_label"]) {
      
      hideShowContent = modules.slice(1);
      modules = [JSON.parse(JSON.stringify(modules[0]))];
    }
    
    else{
      if(modules[1] && modules[1].relationships.hasOwnProperty("field_it_s_your_choice_label") && modules[1]["field_module_title"] == 'Ahora veamos las opciones de pruebas'){
        
        hideShowContent = modules.slice(1);
        modules = [JSON.parse(JSON.stringify(modules[0]))];
        
        hideShowContent.forEach((item, index) => {
          
          //search for abrevation reduce 
          if(index == 0){hideShowContent[index].relationships["field_it_s_your_choice_label"] = {'name':"yes"}}
          if(index == 1){hideShowContent[index].relationships["field_it_s_your_choice_label"] = {'name':"no"}}
          if(index == 2){hideShowContent[index].relationships["field_it_s_your_choice_label"] = {'name':"im"}}
         
        });  
       
      }
    }
   
    return (
      <>
        { modules.map( (module, i) => {
          const hasCancerName = module.relationships.field_cancer_type;
          let correctCancer = false;
          if (hasCancerName) {
            const cancerName = hasCancerName.name;
            correctCancer = (cancerName === cancerType);
          }
          const segments = module.relationships.field_content_segment;
          return (!hasCancerName || correctCancer) && (
            <Card key={ i } bsPrefix="card content-module">
              <Card.Body>
                <Card.Title>{ module.field_module_title }</Card.Title>
                { segments.map( (segment, j) => {
                  return (
                    <ContentModuleSegment 
                      key={ j }
                      segment={ segment }
                    />
                  );
                })}
              </Card.Body>
            </Card>
          );
        })}
        { hideShowContent.length > 0 && <HideShowContentModule pieces={ hideShowContent } /> }
      </>
    );// return
  } //if
  return <></>;
}

export default connect(mapStateToProps, null)(ContentModule);
