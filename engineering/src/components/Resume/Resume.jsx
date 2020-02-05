import React        from 'react';
import PropTypes    from 'prop-types';

// styles
import './Resume.scss';

const getEmploymentExperience = (job, key) => (
    <div className="job" key={key}>
        <h3>
            {job.position} &#8226; {job.location}<br />
            <div className="employer">{job.employer}</div> &#8226; {job.startDate} &ndash; {job.endDate}
        </h3>
        <span>{job.desc}</span>
    </div>
);

const Resume = ({ employment }) => (
    <div className="resume-wrap">
        <div className="resumeTab">
            <div>R&eacute;sum&eacute;</div>
        </div>
        <div className="resume">
            <div className="right">
                <h1>Luke Whyte</h1>
                <h2>Summary</h2>
                <span>Over 8 years of experience as a frontend developer and two on the backend with a focus on data engineering and visualization – writing scalable code and ingesting, analyzing and visualizing data. I love being challenged and learning new things.</span>
                <h2>Technical Skills</h2>
                <span>JavaScript, Python, SQL, Statistics, PHP, Excel, TypeScript, React.js, Angular.js, Vue.js, D3.js, Turf.js, Node.js, Express, Django, Apache, NLP, Hadoop, Wordpress, MVC, CSS3, NoSQL, Single-page apps & Photoshop</span>
                <h2>Employment Experience</h2>
                {employment.map(getEmploymentExperience)}
            </div>
            <div className="left">
                <h2>Contact</h2>
                <span>
                    319 E Jones Ave<br />
                    San Antonio, TX 78215<br />
                    210-550-9859<br />
                    lukeawhyte(at)gmail.com
                </span>
                <h2>Education</h2>
                <h3>
                    Saint Michael's College, Colchester, VT<br />
                    2001 &ndash; 2005
                </h3>
                <span>
                    BA in Journalism & Web Design<br />
                    Concentration in visual storytelling
                </span>
                <h2>Data Blog</h2>
                <h3><a target="_blank" href="https://medium.com/@luke.whyte">Articles on Medium</a></h3>
                <h2>Recently Read Books</h2>
                <span>
                    Information Dashboard Design<br />
                    Introduction to machine learning with Python<br />
                    Python for Data Analysis<br />
                    Statistics in a Nutshell<br />
                    The Data Journalism Handbook<br />
                    Programming JavaScript Applications<br />
                    Interactive Data Visualization For The Web<br />
                    The Visual Display Of Quantitative Information<br />
                    The Functional Art<br />
                    Don't Make Me Think<br />
                    The Lean Start-Up
                </span>
            </div>
        </div>
    </div>
);

Resume.propTypes = {
    employment: PropTypes.arrayOf(PropTypes.shape({
        position: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        employer: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
    })).isRequired,
};

export default Resume
