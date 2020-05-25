import React, { useContext } from "react";
import "./AlphabetSkillPage.styles.scss";
import SkillIcon from "../../../components/Skill-Icon/Skill-Icon";
import { ProgressContext } from "../../../providers/progress_provider";

const AlphabetSkillPage = () => {
	const {
		progressState: {
			basic_consonants,
			basic_vowels,
			double_vowels,
			basic_words_1,
			basic_words_2,
		},
	} = useContext(ProgressContext);

	return (
	<div className="SkillPage">
		<div className="skill-map">
			<SkillIcon
				className="Skill-Icon"
				title="Basic Consonants"
				id="basic_consonants"
				completed={basic_consonants}
			/>
			<SkillIcon
				className="Skill-Icon"
				title="Basic Vowels"
				id="basic_vowels"
				completed={basic_vowels}
			/>
			<SkillIcon
				className="Skill-Icon"
				title="Double Vowels"
				id="double_vowels"
				completed={double_vowels}
			/>
			<SkillIcon
				className="Skill-Icon"
				title="Basic Words 1"
				id="basic_words_1"
				completed={basic_words_1}
			/>
			<SkillIcon
				className="Skill-Icon"
				title="Basic Words 2"
				id="basic_words_2"
				completed={basic_words_2}
			/>
		</div>
	</div>
)};

export default AlphabetSkillPage;
