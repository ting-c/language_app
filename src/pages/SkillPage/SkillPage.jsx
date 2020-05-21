import React from "react";
import "./SkillPage.styles.scss";
import SkillIcon from "../../components/Skill-Icon/Skill-Icon";

const SkillPage = () => (
	<div className="SkillPage">
		<div className="skill-map">
			<SkillIcon
				className="Skill-Icon"
				title="Number (Sino)"
				id="number_sino"
			/>

			<SkillIcon
				className="Skill-Icon"
				title="Number (Native)"
				id="number_native"
			/>
		</div>
	</div>
);

export default SkillPage;
