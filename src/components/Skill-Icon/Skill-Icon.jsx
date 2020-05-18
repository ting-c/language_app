import React from 'react';
import './Skill-Icon.styles.scss';
import skillIconImageGrey from "./../../img/skill-icon-grey.png";

const SkillIcon = ({ title }) => (
	<div className="SkillIcon">
		<img
			className="skill-icon-image-grey"
			src={skillIconImageGrey}
			alt="skill icon incomplete"
		/>
		<div className="skill-icon-title">{title}</div>
	</div>
);

export default SkillIcon;