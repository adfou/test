import React from "react";
import Form from "react-bootstrap/Form";

const FieldInput = ({ input, meta, type, size, as, ...props }) => {
  return (
    <Form.Control
      type={ type }
      value={ input.value }
      onChange={ input.onChange }
      size={ size }
      as={ as }
    >
      { props.children }
    </Form.Control>
  );
}

export default FieldInput;
