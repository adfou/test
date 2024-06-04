import React from "react";
import ContentContainer from "./content-container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { setNotes } from "../actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  
  return {
    notes: state.user.notes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => {
      dispatch( setNotes(e.target.value));
    }
  }
}

const NotesArea = ({ notes, handleChange ,lang}) => {
  let placeholder = "Write your questions or comments here. You will be able to review them later."
  let title = 'Notes'
 
  if (lang == 'es'){
     placeholder = "Escriba sus preguntas o comentarios aquí. Podrás revisarlos más tarde."
     title ="Notas"
  }
  if (lang == 'ht'){
    placeholder = "Ekri kesyon ou yo, oswa komantè w yo, la a. W ap kapab revize yo apre."
    title ="Nòt yo"
   }
   if (lang == 'pt-pt'){
    placeholder = "Anote as suas perguntas ou comentários aqui. Poderá relê-los mais tarde."
    title ="Notas"
   }
  
  
  
  return (
      <ContentContainer className="notes-margin">
        <Card>
          <Card.Header bsPrefix="card-header notes-header">{title}</Card.Header>
          <Card.Body bsPrefix="card-body notes-body">
          <Form.Control 
            as="textarea" 
            rows="7" 
            value={ notes }
            onChange={ handleChange }
            placeholder={ notes ? "" : placeholder }
          />
          </Card.Body>
        </Card>
      </ContentContainer>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesArea);
