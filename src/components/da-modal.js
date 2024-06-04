import React from "react";
import { connect } from "react-redux";
import { triggerModal } from "../actions";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "gatsby";

const mapStateToProps = (state) => {
  return {
    showModal: state.navigation.showModal
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    triggerModal: () => {
      dispatch( triggerModal() );
    }
  };
}

const DAModal = ({ triggerModal, showModal, title, children ,lang}) => {
 
 if(lang ==="en"){
  return (
    <Modal show={ showModal } onHide={ triggerModal } centered>
      <Modal.Header>
        <Modal.Title>{ title }</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{ children }</p>
        <div className="d-flex justify-content-between mt-4">
          <Button onClick={ triggerModal } variant="da rounded-pill">No</Button>
          <Button as={ Link } to="/end" variant="da rounded-pill">Yes</Button>
        </div>
      </Modal.Body>
    </Modal>
  );}
  else{
    let titleT = ""
    let insideT = ""
    let yes = "Si"
    let non = "No"
    let pathEnd ="/es-end"
    switch (lang){
      case ("es"):
        titleT = "detener la ayuda a la decisión"
        insideT = "¿Estás seguro de que quieres salir de la ayuda de decisión?"
        pathEnd="/es-end"
        break;
      case ("ht"):
        titleT = "Sispann èd pou pran desizyon an"
        insideT = "Èske w si ou vle sòti nan èd pou pran desizyon an ?"
        yes = "Wi"
        non = "Non"
        pathEnd="/ht-end"
        break;
      case ("pt-pt"):
          titleT = "Parar o apoio de decisão"
          insideT = "Tem a certeza de que deseja sair do auxílio à decisão?"
          yes = "Sim"
          non = "Não"
          pathEnd="/pt-end"
          break;

    }
    return(
      <Modal show={ showModal } onHide={ triggerModal } centered>
    <Modal.Header>
      <Modal.Title>{ titleT }</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>{ insideT }</p>
      <div className="d-flex justify-content-between mt-4">
        <Button onClick={ triggerModal } variant="da rounded-pill">{non}</Button>
        <Button as={ Link } to={pathEnd} variant="da rounded-pill">{yes}</Button>
      </div>
    </Modal.Body>
  </Modal>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DAModal);
