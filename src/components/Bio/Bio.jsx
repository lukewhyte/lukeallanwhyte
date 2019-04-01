import React        from 'react';
import PropTypes    from 'prop-types';

//components
import Intro    from '../Intro/Intro';
import Skills   from '../Skills/Skills';
import Code     from '../Code/Code';

//styles
import './Bio.scss';

const Bio = ({ skills, chartDiameter }) => (
    <div className="bio">
        <Intro />
        <Skills skills={skills} diameter={chartDiameter} />
        <Code />
    </div>
);

Bio.propTypes = {
    skills: PropTypes.object.isRequired,
    chartDiameter: PropTypes.number.isRequired,
};

export default Bio
