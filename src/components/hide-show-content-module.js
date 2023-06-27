import React from "react";
import Card from "react-bootstrap/Card";
import Fade from "react-bootstrap/Fade";
import { connect } from "react-redux";
import { getContent } from "../helpers";
import ContentModuleSegment from "./content-module-segment";

const mapStateToProps = (state) => {
  return {
    visibility: state.user.test.visibility,
    lang :state.user.lang
  }
}

const HideShowContentModule = ({ pieces, visibility ,lang}) => {
  const visOptions = Object.values(visibility);
  if(lang ==="en"){
    var placeholder = "Please choose from the options above"
  }
  else{
    var placeholder = "Elija entre las opciones anteriores"
  }

  return (
    <Card bsPrefix="card test-choices content-module">
      <Card.Body>
        <p 
          className={ visOptions.includes(true) ? "invisible position-absolute" : "choose-placeholder mt-3 text-center" }
          >
          {placeholder}
        </p>
        { pieces.map( (piece, i) => {
          const segments = piece.relationships.field_content_segment;
          const moduleLabel = getContent(piece.relationships, "field_it_s_your_choice_label");
         
          return (
            <Fade key={i} in={ visibility[moduleLabel.name]}>
              <div className={ "mr-3 position-absolute " + (visibility[moduleLabel.name] ? "top-layer" : "bottom-layer") }>
                <Card.Title>{ piece.field_module_title }</Card.Title>
                { segments.map( (segment, j) => {
                  return (
                    <ContentModuleSegment 
                      key={ j }
                      segment={ segment }
                    />
                  );
                })}
              </div>
            </Fade>
          );
        })}
      </Card.Body>
    </Card>
  );
}

export default connect(mapStateToProps, null)(HideShowContentModule);
