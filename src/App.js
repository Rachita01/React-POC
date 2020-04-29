import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/navbar';
import {Home} from './home';
// import Popup from "reactjs-popup";

function App() {
  return (
    <React.Fragment>
    <Router>
      <NavigationBar />
      <Switch>
  <Route exact path="/home" component={Home} />
  
</Switch>
    </Router>
   
  </React.Fragment>
  );
}

export default App;
