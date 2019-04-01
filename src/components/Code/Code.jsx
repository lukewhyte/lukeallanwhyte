import React from 'react';

//styles
import './Code.scss';

const programming = require('../../images/programming.jpg');

export default () => (
    <div className="code">
        <span className="anotherHand">I write</span><br />
        <span className="dejaVu">scalable, full stack</span><br />
        <span className="anton">code</span><br />
        <img src={programming} alt="" />
        <span className="anotherHand">and write</span><br />
        <span className="dejaVu">investigative, data-driven</span><br />
        <span className="anton">stories.</span><br />
        <span className="dejaVu last">Here's some of my recent work:</span>
        <a name="projects"></a>
    </div>
);
