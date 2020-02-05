import React        from 'react';
import PropTypes    from 'prop-types';

// components
import PageBreak from '../PageBreak/PageBreak';

// styles
import './Projects.scss';

const getButton = ({ link, text }, idx) => (
    <span key={idx}>
        <a href={link} target="_blank" className="button">
            {text}
        </a>
    </span>
);

const getButtons = (btns, btn, idx) => {
    if (btn.text && btn.link) {
        btns.push(getButton(btn, idx));
    }
    return btns;
};

const getProject = (p, idx) => {
    const buttons = [
        { text: p.btn1Text, link: p.btn1Link },
        { text: p.btn2Text, link: p.btn2Link },
        { text: p.btn3Text, link: p.btn3Link },
    ].reduce(getButtons, []);
    return (
        <div className="project" key={idx}>
            <div className="info">
                <h1>{p.title}</h1>
                <p>{p.desc}</p>
                {buttons}
            </div>
            <div className="img">
                <img src={require(`../../images/${p.img}`)} alt={p.title} />
            </div>
            <PageBreak />
        </div>
    );
};

const Projects = ({ projects }) => (
    <div className="projects">
        {projects.map(getProject)}
        <a name="resume"></a>
    </div>
);

Projects.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        btn1Text: PropTypes.string.isRequired,
        btn1Link: PropTypes.string.isRequired,
        btn2Text: PropTypes.string,
        btn2Link: PropTypes.string,
        btn3Text: PropTypes.string,
        btn3Link: PropTypes.string,
    }).isRequired).isRequired,
};

export default Projects
