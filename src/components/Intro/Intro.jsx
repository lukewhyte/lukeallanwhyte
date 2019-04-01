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
        <span className="dejaVu">journalist + programmer</span><br />
        <span className="anotherHand">working with data:</span>
    </div>
);
