import React, { Component} from 'react';
import { hot } from 'react-hot-loader';

// components
import Nav from '../Nav/Nav';
import Bio from '../Bio/Bio';
import Skills from '../Skills/Skills';

// data
import skills from '../../data/skills.json';

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
                <Skills skills={skills} />
            </div>
        );
    }
}

export default hot(module)(App);
