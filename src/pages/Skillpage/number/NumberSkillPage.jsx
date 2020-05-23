import React, { useContext } from "react";
import "./NumberSkillPage.styles.scss";
import SkillIcon from "../../../components/Skill-Icon/Skill-Icon";
import{ ProgressContext } from '../../../providers/progress_provider';

const NumberSkillPage = () => {
	const { numberSino, numberNative } = useContext(ProgressContext);

	return (
	<div className="SkillPage">
		<div className="skill-map">
			<SkillIcon
				className="Skill-Icon"
				title="Number (Sino)"
				id="number_sino"
				link='/number/number_sino'
				completed={numberSino}
			/>

			<SkillIcon
				className="Skill-Icon"
				title="Number (Native)"
				id="number_native"
				link='/number/number_native'
				completed={numberNative}
			/>
		</div>
	</div>
)};

export default NumberSkillPage;
