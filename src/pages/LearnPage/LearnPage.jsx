import React from "react";
import "./LearnPage.styles.scss";
import { Link } from 'react-router-dom';
import SkillIcon from "./../../components/Skill-Icon/Skill-Icon";

const LearnPage = () => (
	<div className="LearnPage">
		<div className="skill-map">
			<Link to='/skill'><SkillIcon className='Skill-Icon' title="Number (Sino)" /></Link>
			<Link to='/skill'><SkillIcon title="Number (Native)" /></Link>
		</div>
	</div>
);

export default LearnPage;
