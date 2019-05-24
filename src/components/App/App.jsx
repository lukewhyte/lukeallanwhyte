import React, { Component} from 'react';
import { hot } from 'react-hot-loader';

// components
import Nav          from '../Nav/Nav';
import Bio          from '../Bio/Bio';
import PageBreak    from '../PageBreak/PageBreak';
import Projects     from '../Projects/Projects';
import Resume       from '../Resume/Resume';

// data
import skills       from '../../data/skills.json';
import projects     from '../../data/projects.json';
import employment   from '../../data/employment.json';

// styles
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartDiameter: 0,
        };
        this.setChartDiameter = this.setChartDiameter.bind(this);
    }

    componentDidMount() {
        this.setChartDiameter();
        window.addEventListener('resize', this.setChartDiameter);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setChartDiameter);
    }

    setChartDiameter() {
        const chartDiameter = window.innerWidth > 720 ? 720 : window.innerWidth;
        this.setState({ chartDiameter });
    }

    render() {
        const { chartDiameter } = this.state;
        return (
            <div id="app">
                <Nav />
                <Bio skills={skills} chartDiameter={chartDiameter} />
                <PageBreak />
                <Projects projects={projects} />
                <Resume employment={employment} />
                <footer><a href="#top">-- Top --</a></footer>
            </div>
        );
    }
}

export default hot(module)(App);
