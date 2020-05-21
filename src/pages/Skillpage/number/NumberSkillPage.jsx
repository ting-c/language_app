import React from "react";
import "./NumberSkillPage.styles.scss";
import SkillIcon from "../../../components/Skill-Icon/Skill-Icon";

const NumberSkillPage = () => (
	<div className="SkillPage">
		<div className="skill-map">
			<SkillIcon
				className="Skill-Icon"
				title="Number (Sino)"
				id="number_sino"
				link='/number/number_sino'
			/>

			<SkillIcon
				className="Skill-Icon"
				title="Number (Native)"
				id="number_native"
				link='/number/number_native'
			/>
		</div>
	</div>
);

export default NumberSkillPage;
