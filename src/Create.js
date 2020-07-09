import React from 'react';
import Popup from "reactjs-popup";
import Content from "./components/content";
import {Button} from 'react-bootstrap';
import './Create.css';

export const Create = () => (
  <div>
    <div class="buttonstyle" >
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
    </div>
    <div class="tablestyle">
      <table class="trstyle">
        <tr class="trstyle">
          <th class="trstyle">
            S.No.
          </th>
          <th class="trstyle">
            Project Name
          </th>
          <th class="trstyle">
            Project Type
          </th>
          <th class="trstyle">
            Active
          </th>
        </tr>
        <tr>
          <td class="trstyle">
            1.
          </td>
          <td class="trstyle">
            First Project
          </td>
          <td class="trstyle">
            PMS Plan
          </td>
          <td class="trstyle">
            No
          </td>

        </tr>
      </table>
    </div>
    </div>
)