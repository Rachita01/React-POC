import React from "react";
import { Form} from 'react-bootstrap';
import './content.css';

export default Upload => (
  
    
    <div className="upload">
  <div className="mb-3">
    <Form.File id="formcheck-api-regular">
      <Form.File.Label>Regular file input</Form.File.Label>
      <Form.File.Input />
    </Form.File>
  </div>
    </div>
  
);
