import React from "react";
import "./LearnPage.styles.scss";
import SkillIcon from "./../../components/Skill-Icon/Skill-Icon";

const LearnPage = ({ history }) => (
	<div className="LearnPage">
		<div className="SkillMap">
			<SkillIcon title="Number (Sino)" onClick={() => history.push('/skill')}/>
			<SkillIcon title="Number (Native)" />
		</div>
	</div>
);

export default LearnPage;
