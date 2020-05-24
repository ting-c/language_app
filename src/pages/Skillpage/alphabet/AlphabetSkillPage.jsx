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
				id="basic_consonants"
				completed={basicConsonants}
			/>
			<SkillIcon
				className="Skill-Icon"
				title="Basic Vowels"
				id="basic_vowels"
				completed={basicVowels}
			/>
			<SkillIcon
				className="Skill-Icon"
				title="Double Vowels"
				id="double_vowels"
				completed={doubleVowels}
			/>
			<SkillIcon
				className="Skill-Icon"
				title="Basic Words 1"
				id="basic_words_1"
				completed={doubleVowels}
			/>
		</div>
	</div>
)};

export default AlphabetSkillPage;
