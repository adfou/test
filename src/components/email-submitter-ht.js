import React, { Component } from "react";
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import PropTypes from "prop-types";



class EmailSubmitterHT extends Component {
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
        message: "Ou dwe mete adrès imèl ou",
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
      notes,
      lang : this.props.data.lang
    };
    const json = JSON.stringify(payload);
    const encoder = new TextEncoder();
    const dataAsBytes = encoder.encode(json);
    const utf8Decoder = new TextDecoder('utf-8');
    const latin1Decoder = new TextDecoder('iso-8859-1');
    const utf8Decoded = utf8Decoder.decode(dataAsBytes);
    const latin1Decoded = latin1Decoder.decode(dataAsBytes);
    
    if (utf8Decoded === json) {
      console.log("Data is encoded in UTF-8");
    } else if (latin1Decoded === json) {
      console.log("Data is encoded in ISO-8859-1 (Latin-1)");
    } else {
      console.log("Unable to determine encoding");
    }
    fetch("https://api.mghcancergeneticsda.com/sendmail.php",
    //fetch("http://api.mghda.hccstaging.org/sendmail.php",
    //fetch("http://apiv2.mghda.hccdev.org/sendmail.php",
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
          message: "Yo voye imèl ou an ale"
        });
      })
      .catch( (err) => {
        console.error("Error:", err);
        this.setState({ 
          confirm: true,
          message: "Te gen yon pwoblèm, epi nou pa t ka voye imèl ou a"
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
           <Button variant="da rounded-pill" onClick={ this.handleClose }>DAKÒ</Button> 
          </Modal.Footer>
        </Modal>
        <Form>
          <div className="d-flex justify-content-around">      
              { this.props.type === "user" ? 
                <Form.Control 
                  placeholder="Mete Imèl adrès la"
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


EmailSubmitterHT.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object.isRequired,
  email: PropTypes.string
}

export default EmailSubmitterHT;
