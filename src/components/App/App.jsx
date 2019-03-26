import React, { Component} from 'react';
import { hot } from 'react-hot-loader';

// components
import Nav from '../Nav/Nav';
import Bio from '../Bio/Bio';

// styles
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="app">
                <Nav />
                <Bio />
            </div>
        );
    }
}

export default hot(module)(App);
