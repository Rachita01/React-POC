import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/navbar';
import {Home} from './home';

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
