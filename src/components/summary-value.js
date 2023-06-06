import React from "react";
import Card from "react-bootstrap/Card";

const SummaryValue = ({ num, heading, leftLabel, rightLabel, value, lang}) => {
  if(lang ==='en'){
  return (
    <Card bsPrefix="card mb-4">
      <Card.Body>
        <Card.Text as="div">
          <div className="summary-value-text-container">
            <h3 className="values-scale-heading"><span className="number">{ num }</span>{ ". " + heading }</h3>
            <div className="summary-value-description">
              <p>On a scale of <strong>1 ({ leftLabel })</strong> to <strong>7 ({ rightLabel }), </strong> you chose:</p>
            </div>
          </div>
          <div className="summary-value-number-container d-flex float-right justify-content-end">
            <span className="rounded-circle summary-value-number">{ value }</span>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );}
  else{
    return (
      <Card bsPrefix="card mb-4">
        <Card.Body>
          <Card.Text as="div">
            <div className="summary-value-text-container">
              <h3 className="values-scale-heading"><span className="number">{ num }</span>{ ". " + heading }</h3>
              <div className="summary-value-description">
                <p>en una escala de <strong>1 ({ leftLabel })</strong> to <strong>7 ({ rightLabel }), </strong> you chose:</p>
              </div>
            </div>
            <div className="summary-value-number-container d-flex float-right justify-content-end">
              <span className="rounded-circle summary-value-number">{ value }</span>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SummaryValue;
