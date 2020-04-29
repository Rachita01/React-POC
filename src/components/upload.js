import React from "react";
import { Form} from 'react-bootstrap';
import './content.css';

export default Upload => (
  
    
    <div className="upload">
    <div className="mb-3">
    <Form.File id="formcheck-api-custom" custom>
      <Form.File.Input isValid />
      <Form.File.Label data-browse="Button text">
        Custom file input
      </Form.File.Label>
      <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
    </Form.File>
  </div>
  <div className="mb-3">
    <Form.File id="formcheck-api-regular">
      <Form.File.Label>Regular file input</Form.File.Label>
      <Form.File.Input />
    </Form.File>
  </div>
    </div>
  
);