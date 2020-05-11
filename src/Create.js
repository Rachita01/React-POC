import React from 'react';
import Popup from "reactjs-popup";
import Content from "./components/content";
import {Button} from 'react-bootstrap';

export const Create = () => (
    <Popup modal trigger={<Button variant="primary" size="lg" active>Create a project or program</Button>}>
    {close => (
  <div>
     <button className="close" onClick={close}>
      &times;
    </button>
   <Content/>
   
  </div>
)}
    </Popup>

)