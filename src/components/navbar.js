import React from 'react';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import Popup from "reactjs-popup";
import Content from './content';
import {Link} from "react-router-dom";

export const NavigationBar = () => (
  <div>
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Smith+Nephew</Navbar.Brand>
      <Nav className="mr-auto"> 
        <Nav.Link href="#home">Home</Nav.Link>
        <Popup modal trigger={<Nav.Link href="#create">Create a Project/Program</Nav.Link>}>
        {close => (
      <div>
         <a className="close" onClick={close}>
          &times;
        </a>
       <Content/>
       
      </div>
    )}
        </Popup>
        <Nav.Link to="/ProjDashboard" href="#dashboard">Project Dashboard</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  </div>
)