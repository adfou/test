import React from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import SummaryValue from "./summary-value";
import TestDecision from "./test-decision";
import EmailSubmitterPT from "./email-submitter-pt";

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const SummaryContentPT = ({ user, children }) => {
  const test = user.test;
  const values = user.values;
  let showNextSteps = false;
  return (
    <>
      <h2>O que é importante para você?</h2>
      { values.length === 0 ? <p>Não foi documentada nenhuma resposta</p> : "" }
      { values.map( (value, i) => {
        return value && (
          <SummaryValue
            key={ i }
            num={ i + 1 }
            heading={ value.heading }
            leftLabel={ value.leftLabel }
            rightLabel={ value.rightLabel }
            value={ value.value }
            lang= {'pt-pt'}
          />
        );
      })}
      <h2>A decisão é sua</h2>
      <p>Eis o que decidiu fazer a seguir:</p>
      <TestDecision test={ test }>
        { (resp, field, value, path, testSelected) => {
          if(value ==="no test selected"){value = "Nenhum teste selecionado"}
          
          return (
            <>
              <div className="test-decision">
                <p>Pretende fazer um teste genético?<br />
                <strong>{ resp }</strong></p>
                <p>{ 'Tipo de teste' }<br />
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
            <p>Indique o seu endereço de e-mail para receber uma cópia das suas respostas e anotações:</p>
            <EmailSubmitterPT type="user" data={ user } notes={ user.notes }>
            Resumo a ser enviado por e-mail
            </EmailSubmitterPT>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default connect(mapStateToProps, null)(SummaryContentPT);
