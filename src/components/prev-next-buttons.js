import React from "react";
import PropTypes from "prop-types";
import NavButton from "./nav-button.js";
import Container from "react-bootstrap/Container";
import { Link } from "gatsby";
import { ucFirst, urlify,ucFirstMult } from "../helpers";

const PrevNextButtons = ({ prevNext, isOrphan, advance, retreat, setNewCurrent,lang }) => {
  const keys = Object.keys(prevNext);
  var navContent = ''
  const link = {
    previous: retreat,
    next: advance
  }
  if (lang == 'en'){
  return (
    <div className="prev-next-buttons">
      <Container>
        <div className="buttons-container d-flex justify-content-around flex-wrap">
        { isOrphan ?
          <NavButton 
            onClick={ () => setNewCurrent(prevNext.current.path) }
            path={ prevNext.current.path }
          >{ 'Back to "' + ucFirst(prevNext.current.title) + '"' }</NavButton>
          :
          <>
            { 
            keys.map( (key, i) => {
                if (prevNext[key] && key !== "current") {
                  return (
                      <NavButton 
                        key={ i }
                        className="btn-prev-next"
                        path={ prevNext[key].path }
                        onClick={ link[key] }
                      >
                        { prevNext[key].title === "End" ? "Finish" : ucFirst(key) }
                      </NavButton>
                  );
                }
              })}
          </>
        }
        </div>
      </Container>
    </div>
  );}
  else {
    let back = 'Voltar a "'
    let backEnd='"'
    switch(lang){
      case "ht":
        back="Retounen nan «"
        backEnd="»"
        break
      
    }
    /*if(prevNext.current.title === "genes e os testes genéticos"){
      prevNext.current.title = "Genes e testes";
    }*/
 
    return (
      <div className="prev-next-buttons">
        <Container>
          <div className="buttons-container d-flex justify-content-around flex-wrap">
          { isOrphan ?
            <NavButton 
              onClick={ () => setNewCurrent(prevNext.current.path) }
              path={ prevNext.current.path }
            >{ back + ucFirst(prevNext.current.title) + backEnd }</NavButton>
            :
            <>
              { 
              keys.map( (key, i) => {
                  if (prevNext[key] && key !== "current") {
                    return (
                        <NavButton 
                          key={ i }
                          className="btn-prev-next"
                          path={ prevNext[key].path }
                          onClick={ link[key] }
                        >

                          {
                          prevNext[key].title === "End" ? ucFirstMult("Finalizar",lang) : ucFirstMult(key,lang) }
                        </NavButton>
                    );
                  }
                })}
            </>
          }
          </div>
        </Container>
      </div>
    );
  }
}

export default PrevNextButtons;
