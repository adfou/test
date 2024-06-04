import React from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import SummaryValue from "./summary-value";
import TestDecision from "./test-decision";
import EmailSubmitterHT from "./email-submitter-ht.js";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    lang: state.user.lang
  }
}

const SummaryContentHt = ({ user, children,lang }) => {
  const test = user.test;
  const values = user.values;
  let showNextSteps = false;
  return (
    <>
      <h2>Kisa ki enpòtan pou ou ?</h2>
      { values.length === 0 ? <p>Yo pa anrejistre repons yo</p> : "" }
      { values.map( (value, i) => {
        return value && (
          <SummaryValue
            key={ i }
            num={ i + 1 }
            heading={ value.heading }
            leftLabel={ value.leftLabel }
            rightLabel={ value.rightLabel }
            value={ value.value }
            lang= {'ht'}
          />
        );
      })}
      <h2>Desizyon ou pran</h2>
      <p>Men sa ou te deside fè apresa :</p>
      <TestDecision test={ test }>
        { (resp, field, value, path, testSelected) => {
          if(value ==="no test selected"){value = "Mwen pa si sou tès mwen vle a "}
          return (
            <>
              <div className="test-decision">
                <p>Èske w vle fè tès jenetik ?<br />
                <strong>{ resp }</strong></p>
                <p>{ "Kalite tès" }<br />
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
            <p>Bay adrès imèl ou, pou w ka resevwa yon kopi repons ak nòt ou yo :</p>
            <EmailSubmitterHT type="user" data={ user } notes={ user.notes }>
            Rezime pa imèl
            </EmailSubmitterHT>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default connect(mapStateToProps, null)(SummaryContentHt);
