import React from 'react';

//styles
import './Intro.scss';

const polaroid = require('../../images/polaroid.jpg');

export default () => (
    <div className="intro">
        <span className="anton">
            <img src={polaroid} alt="Luke Whyte" /><br />
            Hello<br />
            I'm Luke.<br />
        </span><br />
        <span className="anotherHand">I'm a</span><br />
        <span className="dejaVu">full stack developer +<br />data visualization designer</span><br />
        <span className="anotherHand">telling stories in data.</span><br />
        <span className="dejaVu">From analysis and pipelines to web components and graphics</span><br />
        <span className="anotherHand">My skills include:</span>
    </div>
);
