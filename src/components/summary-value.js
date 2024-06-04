import React from "react";
import Card from "react-bootstrap/Card";

const SummaryValue = ({ num, heading, leftLabel, rightLabel, value, lang}) => {
  let left ="On a scale of"
  let mid = "to"
  let right = "you chose:"
  switch (lang){
  case "en":
    break;
  case "es":
    left ="en una escala de"
    mid = "a"
    right = "usted eligió:"
    break;
  case "ht":
    
    if(num ===5){
      leftLabel = "Yon bagay ki ban mwen anpil enkyetid"
      rightLabel = "ki pa ban m anpil sousi"
    }
    if(num === 6){
      leftLabel = "Yon bagay ki ban mwen anpil enkyetid"
      rightLabel = "pa enkyetan"
    }
    if(num ===10){
      leftLabel = "Yon bagay ki ban mwen anpil enkyetid"
      rightLabel = "pa enkyetan"
    }
    left ="Nan yon klasman, ant "
    mid = "e "
    right = "ou chwazi :"
    break;
  case "pt-pt":
    
  left ="Numa escala de "
  mid = "a "
  right = "você escolhe:"
    if(num ===1){
      heading ="Receber informação genética que poderia ser útil para mim seria:"
      leftLabel = "Muito difícil para mim agora"
      rightLabel ="Importante para mim, mesmo que causasse tensão"
    }
    if(num ===2){
      rightLabel="Não me preocupa"
    }
   
    
    if(num ===6){
      heading="O risco de possível discriminação genética é algo que:"
    }
    if(num === 8){
      heading="Receber informação que pode ser importante para a saúde da minha família:"
    }
    break;
  }
  
  return (
    <Card bsPrefix="card mb-4">
      <Card.Body>
        <Card.Text as="div">
          <div className="summary-value-text-container">
            <h3 className="values-scale-heading"><span className="number">{ num }</span>{ ". " + heading }</h3>
            <div className="summary-value-description">
              <p>{left} <strong>1 ({ leftLabel })</strong> {mid} <strong>7 ({ rightLabel }), </strong> {right}</p>
            </div>
          </div>
          <div className="summary-value-number-container d-flex float-right justify-content-end">
            <span className="rounded-circle summary-value-number">{ value }</span>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>)
  
}

export default SummaryValue;
