import React from 'react';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
// import {Dropdown} from 'react-router-dom';
// const options = [
//   'one', 'two', 'three'
// ]
// const defaultOption = options[0]
export const NavigationBar = () => (
  <div>
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Smith+Nephew</Navbar.Brand>
      <Nav className="mr-auto"> 
        <Nav.Link to="/home" href="Home">Home</Nav.Link>
        <Nav.Link to="/Create" href="Create">Create a Project/Program</Nav.Link>
{/*         
<Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option"
          arrowClosed={<span className="arrow-closed" />}
          arrowOpen={<span className="arrow-open" />}
         /> */}
        <Nav.Link to="/ProjDashboard" href="ProjDashboard">Project Dashboard</Nav.Link>
        <Nav.Link to="/RegistryReport" href="Registry">Registry Report</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
        <Nav.Link to="/login" href="Login">Login</Nav.Link>
      </Form>
    </Navbar>
  </div>
)