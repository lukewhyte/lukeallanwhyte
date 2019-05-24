import React        from 'react';
import PropTypes    from 'prop-types';
import * as d3      from 'd3';

// styles
import './Skills.scss';

/*
 * parse, sort data hierarchally 
 */

const sortData = data => d3.hierarchy(data).sum(d => d.value).sort((a, b) => b.value - a.value);

const getPartition = (data, radius) => d3.partition().size([2 * Math.PI, radius])(sortData(data));

/*
 * d3 scale and render functions
 */

const getArc = radius => d3.arc()
    .startAngle(d => d.x0)
    .endAngle(d => d.x1)
    .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
    .padRadius(radius / 2)
    .innerRadius(d => d.y0)
    .outerRadius(d => d.y1 - 1);

const getColor = data => d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, data.children.length + 1));

/*
 * filter data
 */

const filterText = d => d.depth && (d.y0 + d.y1) / 2 * (d.x1 - d.x0) > 10;

/*
 * element attribute functions
 */
const setFill = (d, color) => {
    while (d.depth > 1) {
        d = d.parent;
    }
    return color(d.data.name);
};

const getGroupTransform = radius => `translate(${radius},${radius * 0.8})`;

const getTitleTransform = radius => `translate(${radius},${radius * 0.84})`;

const getLabelTransform = d => {
    const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
    const y = (d.y0 + d.y1) / 2;
    return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
};

/*
 * render JSX elements
 */

const getPath = (arc, color, d, i) => (
    <path
        key={`path${i}`}
        fill={setFill(d, color)}
        d={arc(d)}
    >
        <title>{d.data.name}</title>
    </path>
);

const writeLabel = (d, i) => (
    <text
        transform={getLabelTransform(d)}
        dy="0.35em"
        key={`text${i}`}
    >
        {d.data.name}
    </text>
);

const getRays = (root, arc, color) => root.descendants().filter(d => d.depth).map((d, i) => getPath(arc, color, d, i));

const getText = root => root.descendants().filter(filterText).map(writeLabel);

/*
 * Initiate component
 */

const Skills = ({ skills, diameter }) => {
    const root      = getPartition(skills, diameter / 2);
    const arc       = getArc(diameter / 2);
    const color     = getColor(skills);
    const rays      = getRays(root, arc, color);
    const labels    = getText(root);

    return (
        <div className="skills">
            <svg width={diameter} height={diameter * 0.94}>
                <g fillOpacity={0.6} transform={getGroupTransform(diameter / 2)}>
                    {rays}
                </g>
                <g pointerEvents="none" textAnchor="middle" transform={getGroupTransform(diameter / 2)}>
                    {labels}
                </g>
                <g pointerEvents="none" textAnchor="middle" transform={getTitleTransform(diameter / 2)}>
                    <text className="title">Skills</text>
                </g>
            </svg>
        </div>
    );
};

Skills.propTypes = {
    skills: PropTypes.object.isRequired,
    diameter: PropTypes.number.isRequired,
};

export default Skills
