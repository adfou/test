import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ContentContainer from "../components/content-container";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import FieldInput from "./field-input";
import { Field, reduxForm } from "redux-form";

let LoginForm = ({ cancers, sites, handleSubmit }) => {
  const [userid, updateId] = useState("");
  const [match, confirmMatch] = useState(false);
  const [show, showAlert] = useState(false);
  return (
    <Container bsPrefix="container mt-5">
      <ContentContainer>
        <Form className="login" onSubmit={ handleSubmit }>
          <Form.Group controlId="patientID">
            <Form.Label>Enter patient ID</Form.Label>
            <Field name="userid" component={ FieldInput } onChange={ (e) => updateId(e.target.value) }/>
          </Form.Group>
          <Alert variant={ match ? "success" : "danger" } show={ show }>
            IDs { !match && "do not" } match
          </Alert>
          <Form.Group controlId="patientIDConfirm">
            <Form.Label>Re-enter patient ID</Form.Label>
            <Form.Control 
              name="useridconfirm" 
              type="text"
              onChange={ (e) => confirmMatch(e.target.value === userid) }
              onFocus={ () => showAlert(true) }
            />
          </Form.Group>
          <Form.Group controlId="cancerType">
            <Form.Label>Select cancer type</Form.Label>
            <Field name="cancerType" size="lg" as="select" component={ FieldInput }>
              <option>--Select cancer--</option>
              { cancers.map( (cancer, i) => {
                return (
                  <option key={ i }>{ cancer.node.name }</option>
                )
              })}
            </Field>
           </Form.Group>
           <Form.Group controlId="sites">
            <Form.Label>Select site</Form.Label>
            <Field name="site" size="lg" as="select" component={ FieldInput }>
              <option>--Select site--</option>
              { sites.map( (site, i) => {
                return (
                  <option 
                    key={ i }
                    value={ site.node.path.alias.substr(1) } 
                  >
                  { site.node.name }
                  </option>
                )
              })}
            </Field>
          </Form.Group>
          <div className="text-center">
           <Button variant="da rounded-pill mt-3" size="lg" type="submit">Submit</Button>
          </div>
        </Form>
      </ContentContainer>
    </Container>
  );
}

LoginForm = reduxForm({ form: "login_form" })(LoginForm);

export default LoginForm;
