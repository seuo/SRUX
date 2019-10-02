import React, {Component} from 'react';
import { Router, Link, Redirect, Location,navigate  } from "@reach/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";



import Srux from './Srux';
import Portfolio from './Portfolio';

import './App.css';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        home:'fade-in'
    }
}

componentDidMount = () => {
  window.setTimeout(() => { this.setState({home:"active"})
        }, 8000)
  
  // .then(res => this.setState({categories:res.data}))
}
  
  render() {


    return (

    <Router>
      <Srux path="/" home={this.state.home} />
      <Portfolio path="/portfolio" />
    </Router>
    )
  }

}

export default App;
