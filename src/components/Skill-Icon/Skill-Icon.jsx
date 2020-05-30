import React from 'react';
import './Skill-Icon.styles.scss';
import { Link } from 'react-router-dom';
import skillIconImageGrey from "./../../img/skill-icon-grey.png";
import skillIconImage from "./../../img/skill-icon.png";

const SkillIcon = ({ title, id, completed, isUnlocked }) => {
	const iconImage = completed ? skillIconImage : skillIconImageGrey

	const displaySignInMessage = () =>  (	
		window.alert('Please sign in to unlock all the lessons.')
	);

	return (
	<div className="SkillIcon">
		{ isUnlocked ? (
			<Link to={`/lesson/${id}`}>
				<img
					className="skill-icon-image"
					src={iconImage}
					alt="skill icon"
				/>
				<div className="skill-icon-title">{title}</div>
			</Link>
		) : (
			<div onClick={() => displaySignInMessage()}>
				<img
					className="skill-icon-image"
					src={iconImage}
					alt="skill icon"
				/>
				<div className="skill-icon-title">{title}</div>
			</div>
		) }
	</div>
)};

export default SkillIcon;