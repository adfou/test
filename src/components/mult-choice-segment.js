import React from "react";
import Form from "react-bootstrap/Form";
import { setTestInput } from "../actions";
import { connect } from "react-redux";
import { urlify, toCamelCase } from "../helpers";

const mapStateToProps = (state) => {
  return {
    savedInput: state.user.test
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTestInput: (e) => {
      dispatch( setTestInput(toCamelCase(e.target.name), e.target.value, e.target.type) );
    }
  }
}

const MultChoiceSegment = ({ content, savedInput, setTestInput }) => {

  const type = content.field_can_choose_multiple ? "checkbox" : "radio";
  var name ="test-types";
  if (content.relationships.field_relevance != undefined){
  name = urlify(content.relationships.field_relevance.name);
  
  }
  else {
    if (content.field_option_name[0] == "Hablar con mi oncólogo"){name = "not-ready-to-decide"}
    if (content.field_option_name[0] == "Sí, quiero las pruebas genéticas"){name = "do-you-want-genetic-test";}
    if (content.field_option_name[0] == "Prueba A. Prueba del gen del cáncer pancreático" || content.field_option_name[0] == "Prueba A. Prueba del gen del cáncer de ovario" ){
    name = "test-types";
    }
    
  }
  
  return (
    <Form>
      { content.field_intro_to_options && <p>{ content.field_intro_to_options }</p> }
      { content.field_option_name.map( (option, i) => {
        let saved = savedInput[toCamelCase(name)];
        return (
          <Form.Check 
            defaultChecked={ Array.isArray(saved) ? saved.includes(option) : saved === option }
            type={ type } 
            label={ option } 
            key={ i } 
            name={ name }
            value={ option }
            onChange={ setTestInput }
          />
        );
      })}
    </Form>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MultChoiceSegment);
