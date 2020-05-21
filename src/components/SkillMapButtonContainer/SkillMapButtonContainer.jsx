import React from 'react';
import './SkillMapButtonContainer.styles.scss';
import { Link } from 'react-router-dom';

const SkillMapButtonContainer = () => (
	<div className="SkillMapButtonContainer">
		<Link to="/learn">
			<button className="skill-map-button">Skill Map</button>
		</Link>
	</div>
);

export default SkillMapButtonContainer;