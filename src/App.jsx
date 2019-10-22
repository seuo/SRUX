import React, {Component} from 'react';

import Srux from './Srux';

import './App.css'; 

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: 'fade-in',
            experience: 'exp'
        }
    }

    componentDidMount = () => {
        window.setTimeout(() => {
            this.setState({home: "active"})
        }, 8000)

        // .then(res => this.setState({categories:res.data}))
    }

    render() {

        return (

            <Srux path="/" home={this.state.home}/>

        )
    }

}

export default App;
