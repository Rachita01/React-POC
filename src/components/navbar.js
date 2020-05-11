import React from 'react';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';

export const NavigationBar = () => (
  <div>
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Smith+Nephew</Navbar.Brand>
      <Nav className="mr-auto"> 
        <Nav.Link to="/home" href="Home">Home</Nav.Link>
        <Nav.Link to="/Create" href="Create">Create a Project/Program</Nav.Link>
        <Nav.Link to="/ProjDashboard" href="ProjDashboard">Project Dashboard</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  </div>
)