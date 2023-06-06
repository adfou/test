import React from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import SummaryValue from "./summary-value";
import TestDecision from "./test-decision";
import EmailSubmitterES from "./email-submitter-es";

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const SummaryContentES = ({ user, children }) => {
  const test = user.test;
  const values = user.values;
  let showNextSteps = false;
  return (
    <>
      <h2>¿Qué es importante para ti?</h2>
      { values.length === 0 ? <p>No hay respuestas registradas</p> : "" }
      { values.map( (value, i) => {
        return value && (
          <SummaryValue
            key={ i }
            num={ i + 1 }
            heading={ value.heading }
            leftLabel={ value.leftLabel }
            rightLabel={ value.rightLabel }
            value={ value.value }
            lang= {'es'}
          />
        );
      })}
      <h2>Su decisión</h2>
      <p>Esto es lo que decidió hacer a continuación:</p>
      <TestDecision test={ test }>
        { (resp, field, value, path, testSelected) => {
          return (
            <>
              <div className="test-decision">
                <p>¿Quieres pruebas genéticas?<br />
                <strong>{ resp }</strong></p>
                <p>{ 'tipo de prueba' }<br />
                <strong>{ value }</strong></p>
              </div>
              { 
                testSelected && 
                <div className="next-steps">
                  { children }
                </div>
              }
            </>
          );
        }}
      </TestDecision>
      <Card bsPrefix="card my-5 summary-email-card">
        <Card.Body>
          <Card.Text as="div">
            <p>Proporcione su dirección de correo electrónico para recibir una copia de sus respuestas y notas:</p>
            <EmailSubmitterES type="user" data={ user } notes={ user.notes }>
              Resumen de correo electrónico
            </EmailSubmitterES>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default connect(mapStateToProps, null)(SummaryContentES);
