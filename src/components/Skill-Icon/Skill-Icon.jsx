import React from 'react';
import './Skill-Icon.styles.scss';
import { Link } from 'react-router-dom';
import skillIconImageGrey from "./../../img/skill-icon-grey.png";

const SkillIcon = ({ title, link }) => (
	<div className="SkillIcon">
		<Link to={link}>
			<img
				className="skill-icon-image-grey"
				src={skillIconImageGrey}
				alt="skill icon incomplete"
			/>
			<div className="skill-icon-title">{title}</div>
		</Link>
	</div>
);

export default SkillIcon;