import React, { Component} from 'react';
import { hot } from 'react-hot-loader';

// styles
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="app">Hello world!</div>;
    }
}

export default hot(module)(App);
