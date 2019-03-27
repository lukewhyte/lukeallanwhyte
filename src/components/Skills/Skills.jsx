import React        from 'react';
import PropTypes    from 'prop-types';
import * as d3      from 'd3';

// styles
import './Skills.scss';

const getDiameter = () => window.innerWidth > 960 ? 960 : window.innerWidth;

const sortData = data => d3.hierarchy(data).sum(d => d.value).sort((a, b) => b.value - a.value);

const getPartition = (data, radius) => d3.partition().size([2 * Math.PI, radius])(sortData(data));

const getArc = radius => d3.arc()
    .startAngle(d => d.x0)
    .endAngle(d => d.x1)
    .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
    .padRadius(radius / 2)
    .innerRadius(d => d.y0)
    .outerRadius(d => d.y1 - 1);

const getColor = data => d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, data.children.length + 1));

const setFill = (d, color) => {
    while (d.depth > 1) {
        d = d.parent;
    }
    return color(d.data.name);
};

const getPath = (arc, color, d, i) => (
    <path
        key={`path${i}`}
        fill={setFill(d, color)}
        d={arc(d)}
    />
);

const getRays = (root, arc, color) => root.descendants().filter(d => d.depth).map((d, i) => getPath(arc, color, d, i));

const getTransform = radius => `translate(${radius},${radius})`

const Skills = ({ skills }) => {
    const diameter = getDiameter();
    const root = getPartition(skills, diameter / 2);
    const arc = getArc(diameter / 2);
    const color = getColor(skills);
    const rays = getRays(root, arc, color);

    return (
        <svg className="skills" width={diameter} height={diameter}>
            <g fillOpacity={0.6} transform={getTransform(diameter / 2)}>
                {rays}
            </g>
        </svg>
    );
};

Skills.propTypes = {
    skills: PropTypes.object.isRequired,
};

export default Skills
