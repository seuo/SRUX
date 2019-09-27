import React, {Component} from 'react';
import { Router, Link } from "@reach/router"

import Srux from './Srux';
import Portfolio from './Portfolio';

import './App.css';

class App extends Component {


  
  render() {
    return (
    <Router>
      <Srux path="/" />
      <Portfolio path="/portfolio" />
    </Router>
    )
  }

}

export default App;
