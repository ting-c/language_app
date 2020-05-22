import React from "react";
import "./AlphabetSkillPage.styles.scss";
import SkillIcon from "../../../components/Skill-Icon/Skill-Icon";

const AlphabetSkillPage = () => (
	<div className="SkillPage">
		<div className="skill-map">
			<SkillIcon
				className="Skill-Icon"
				title="Basic Consonants"
				link='alphabet/basic_consonants'
			/>
			<SkillIcon
				className="Skill-Icon"
				title="Basic Vowels"
				link='alphabet/basic_vowels'
			/>
			<SkillIcon
				className="Skill-Icon"
				title="Double Vowels"
				link='alphabet/double_vowels'
			/>
		</div>
	</div>
);

export default AlphabetSkillPage;
