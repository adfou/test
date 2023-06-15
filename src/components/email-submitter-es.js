import React, { Component } from "react";
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import PropTypes from "prop-types";



class EmailSubmitterES extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: false,
      confirm: false,
      message: ""
    };
    this.sendEmail = this.sendEmail.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  sendEmail = (data, email = false, notes = false) => {
    if (this.props.type === "user" && !email) {
      this.setState({ 
        message: "Tienes que introducir su dirección de correo electrónico",
        confirm: true
      });
      return;
    }
    const payload = {
      email,
      site: data.site,
      type: this.props.type,
      userBasic: {
        id: data.userid,
        cancerType: data.cancerType,
        site: data.site
      },
      userTest : {
        decision: data.test.doYouWantGeneticTest,
        test: data.test.testTypes || false,
        notSure: data.test.notSureWhichTest && data.test.notSureWhichTest.length > 0 && data.test.notSureWhichTest.join(", "),
        nextSteps: data.test.notReadyToDecide && data.test.notReadyToDecide.length > 0 && data.test.notReadyToDecide.join(", ")
      },
      userValues: data.values,
      notes
    };
    const json = JSON.stringify(payload);
    //fetch("https://api.mghcancergeneticsda.com/sendmail.php",
    //fetch("http://api.mghda.hccstaging.org/sendmail.php",
    fetch("http://apiv2.mghda.hccdev.org/sendmail.php",
      {
        method: "post",
        headers: { 
          "Content-Type" : "application/json",
          "Accept" : "application/json" 
        },
        body: json
      })
      .then( (response) => {
        this.setState({ 
          confirm: true,
          message: "Su correo electrónico fue enviado"
        });
      })
      .catch( (err) => {
        console.error("Error:", err);
        this.setState({ 
          confirm: true,
          message: "Hubo un problema y no se pudo enviar tu correo electrónico"
        });
      });
  /*
    */
  }

  setEmail = (value) => {
    this.setState({ email: value });
  }

  handleClose = () => {
    this.setState({ confirm: false });
  }

  render() {
    return (
      <>
        <Modal show={ this.state.confirm } onHide={ this.handleClose }>
          <Modal.Body>{ this.state.message }</Modal.Body>
          <Modal.Footer>
           <Button variant="da rounded-pill" onClick={ this.handleClose }>Ok</Button> 
          </Modal.Footer>
        </Modal>
        <Form>
          <div className="d-flex justify-content-around">      
              { this.props.type === "user" ? 
                <Form.Control 
                  placeholder="Tienes que introducir su dirección de correo electrónico"
                  type="email"
                  onChange={ (e) => this.setEmail(e.target.value) }  
                /> : "" 
              } 
            <div>
              <Button variant="da rounded-pill" onClick={ () => this.sendEmail(this.props.data, this.state.email, this.props.notes) }>{ this.props.children }</Button>
            </div>
          </div>      
        </Form>
      </>
    )
  }
}


EmailSubmitterES.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object.isRequired,
  email: PropTypes.string
}

export default EmailSubmitterES;
