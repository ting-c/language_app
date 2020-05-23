import React, { useContext } from "react";
import "./AlphabetSkillPage.styles.scss";
import SkillIcon from "../../../components/Skill-Icon/Skill-Icon";
import { ProgressContext } from "../../../providers/progress_provider";

const AlphabetSkillPage = () => {
	const { basicConsonants, basicVowels, doubleVowels } = useContext(ProgressContext);

	return (
	<div className="SkillPage">
		<div className="skill-map">
			<SkillIcon
				className="Skill-Icon"
				title="Basic Consonants"
				link="alphabet/basic_consonants"
				completed={basicConsonants}
			/>
			<SkillIcon
				className="Skill-Icon"
				title="Basic Vowels"
				link="alphabet/basic_vowels"
				completed={basicVowels}
			/>
			<SkillIcon
				className="Skill-Icon"
				title="Double Vowels"
				link="alphabet/double_vowels"
				completed={doubleVowels}
			/>
		</div>
	</div>
)};

export default AlphabetSkillPage;
