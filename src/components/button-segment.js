import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavButton from "./nav-button";
import Arrow from "../images/button_segment_arrow.svg";
import { connect } from "react-redux";
import { setNewCurrent, triggerModal } from "../actions";
import { setHTML } from "../helpers";

const mapDispatchToProps = (dispatch) => {
  return {
    setNewCurrent: (path) => {
      dispatch( setNewCurrent(path) );
    },
    triggerModal: () => {
      dispatch( triggerModal() );
    }
  }
}

const ButtonSegment = ({ content, setNewCurrent, triggerModal }) => {

  const setConfirm = (e) => {
    e.preventDefault();
    triggerModal();
  }

  var path = content.relationships.field_button_destination && 
    content.relationships.field_button_destination.path.alias;
  if(path ==='/es-stop'){path = "/stop"}
  return (
    <div className="button-segment">
      <Row>
        <Col sm={ 5 }>
          <div className="button-segment-text">
            { setHTML(content.field_text_leading_to_button.processed) }
          </div>
        </Col>
        <Col sm={ 7 }>
          <Row bsPrefix="flex-nowrap row align-items-center">
            <div className="flex-fill">
              <img className="img-fluid" src={ Arrow } alt="arrow" />
            </div>
            <div className="flex-fill">
            <NavButton
              className="btn-segment"
              path={ path }
              onClick={ (e) => path === "/stop" ? setConfirm(e) : setNewCurrent(path) }
            >
              { content.field_button_text }
            </NavButton>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(ButtonSegment);
