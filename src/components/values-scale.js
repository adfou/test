import React, { useState } from "react";
import { connect } from "react-redux";
import { setValue } from "../actions";
import { urlify } from "../helpers";
import Card from "react-bootstrap/Card";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ValuesScaleLabels from "./values-scale-labels";

const SCALE_NUM = [1, 2, 3, 4, 5, 6, 7];


const mapStateToProps = (state) => {
  return {
    values: state.user.values
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setValue: (e, heading, leftLabel, rightLabel) => {
      dispatch( setValue(e, heading, leftLabel, rightLabel) );
    }
  }
}


const ValuesScale = ({ num, heading, leftLabel, rightLabel, setValue, values }) => {
  const [checked, setChecked] = useState(false);
  const name = `scale-${num}`;
  //const name = "scale-" + num;
  return (
    <div className="values-scale">
    <Card>
      <Card.Body>
        <Card.Text as="div">
      <h3 className="values-scale-heading">{ num + 1 }. { heading }</h3>
      <ToggleButtonGroup type="radio" value={ values[num] && Number(values[num].value) } name={ name } className="d-flex justify-content-between btn-group-values">
        { SCALE_NUM.map( (sn, i) => {
          return (
            <ToggleButton 
              id={ `${urlify(heading)}-${i}` }
              key={i} 
              value={ sn } 
              variant="value"
              className="rounded-circle"
              onChange={ (e) => setValue(e, heading, leftLabel, rightLabel) }>
              { sn }
            </ToggleButton>
          );
        })}
        <div className="btn-group-values-bkgrd"></div>
      </ToggleButtonGroup>
      <ValuesScaleLabels left={ leftLabel } right={ rightLabel } />
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(ValuesScale);
