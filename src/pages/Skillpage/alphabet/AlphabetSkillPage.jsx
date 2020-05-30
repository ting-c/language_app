import React, { useContext } from "react";
import "./AlphabetSkillPage.styles.scss";
import SkillIcon from "../../../components/Skill-Icon/Skill-Icon";
import BackButton from '../../../components/BackButton/BackButton';
import { ProgressContext } from "../../../providers/progress_provider";
import { UserContext } from "../../../providers/user_provider";

const AlphabetSkillPage = ({ history }) => {
	const {
		progressState: {
			basic_consonants,
			basic_vowels,
			double_vowels,
			basic_words_1,
			basic_words_2,
			basic_words_3,
			basic_words_4,
			basic_words_5,
		},
	} = useContext(ProgressContext);

	const { currentUser } = useContext(UserContext);

	return (
	<div className="SkillPage">
		<div className="skill-map">
			<SkillIcon
				className="Skill-Icon"
				title="Basic Consonants"
				id="basic_consonants"
				completed={basic_consonants}
				isUnlocked={true}
			/>
			<SkillIcon
				className="Skill-Icon"
				title="Basic Vowels"
				id="basic_vowels"
				completed={basic_vowels}
				isUnlocked={!!currentUser}
			/>
			<SkillIcon
				className="Skill-Icon"
				title="Basic Words 1"
				id="basic_words_1"
				completed={basic_words_1}
				isUnlocked={!!currentUser}
			/>
			<SkillIcon
				className="Skill-Icon"
				title="Basic Words 2"
				id="basic_words_2"
				completed={basic_words_2}
				isUnlocked={!!currentUser}
			/>
			<SkillIcon
				className="Skill-Icon"
				title="Basic Words 3"
				id="basic_words_3"
				completed={basic_words_3}
				isUnlocked={!!currentUser}
			/>
			<SkillIcon
				className="Skill-Icon"
				title="Basic Words 4"
				id="basic_words_4"
				completed={basic_words_4}
				isUnlocked={!!currentUser}
			/>
			<SkillIcon
				className="Skill-Icon"
				title="Basic Words 5"
				id="basic_words_5"
				completed={basic_words_5}
				unlock={!!currentUser}
			/>
			<SkillIcon
				className="Skill-Icon"
				title="Double Vowels"
				id="double_vowels"
				completed={double_vowels}
				unlock={!!currentUser}
			/>
		</div>
		<BackButton {...{ history }} />
	</div>
)};

export default AlphabetSkillPage;
