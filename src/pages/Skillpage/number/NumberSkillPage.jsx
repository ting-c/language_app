import React, { useContext } from "react";
import "./NumberSkillPage.styles.scss";
import SkillIcon from "../../../components/Skill-Icon/Skill-Icon";
import BackButton from '../../../components/BackButton/BackButton';
import{ ProgressContext } from '../../../providers/progress_provider';
import{ UserContext } from '../../../providers/user_provider';

const NumberSkillPage = ({history}) => {
	const {
		progressState: {
			number_sino,
			number_native,
		},
	} = useContext(ProgressContext);

	const { currentUser } = useContext(UserContext);

	return (
		<div className="SkillPage">
			<div className="skill-map">
				<SkillIcon
					className="Skill-Icon"
					title="Number (Sino)"
					id="number_sino"
					completed={number_sino}
					isUnlocked={true}
				/>

				<SkillIcon
					className="Skill-Icon"
					title="Number (Native)"
					id="number_native"
					completed={number_native}
					isUnlocked={!!currentUser}
				/>
			</div>
			<BackButton {...{ history }} />
		</div>
	);};

export default NumberSkillPage;
