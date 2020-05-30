import React, { useState, useContext } from "react";
import "./LessonPage.styles.scss";
import { UserContext } from '../../providers/user_provider';
import LessonContainer from "../../components/LessonContainer/LessonContainer";
import ChallengeContainer from "../../components/ChallengeContainer/ChallengeContainer";
import ChallengeButton from "../../components/ChallengeButton/ChallengeButton";
import LessonButton from "../../components/LessonButton/LessonButton";
import BackButton from '../../components/BackButton/BackButton';
import number_sino from "../../data-store/lessons/number_sino";
import number_native from "../../data-store/lessons/number_native";
import basic_consonants from "../../data-store/lessons/basic_consonants";
import basic_vowels from "../../data-store/lessons/basic_vowels";
import double_vowels from "../../data-store/lessons/double_vowels";
import basic_words_1 from "../../data-store/lessons/basic_words_1";
import basic_words_2 from "../../data-store/lessons/basic_words_2";
import basic_words_3 from "../../data-store/lessons/basic_words_3";
import basic_words_4 from "../../data-store/lessons/basic_words_4";
import basic_words_5 from "../../data-store/lessons/basic_words_5";
import generateChallenge from '../../data-store/challenge/challenge_generator';

const LessonPage = ({ match, history }) => {
  const { skill_id } = match.params
	let lessonProps, cardProps, challengeGenerator, challengeCompleteProps;

  switch (skill_id) {
		case "number_sino":
			lessonProps = {
				lesson: number_sino,
			};
			cardProps = {
				top: "numeral",
				middle: "korean_char",
				bottom: "romanization",
			};

			challengeGenerator = generateChallenge(number_sino, 'romanization', 'numeral','korean_char');
			challengeCompleteProps = { skill_id };
			break;

		case "number_native":
			lessonProps = {
				lesson: number_native,
			};
			cardProps = {
				top: "numeral",
				middle: "korean_char",
				bottom: "romanization",
			};
			challengeGenerator = generateChallenge(number_native, 'romanization', 'numeral','korean_char');
			challengeCompleteProps = { skill_id };
			break;
		case "basic_consonants":
			lessonProps = {
				lesson: basic_consonants,
			};
			cardProps = {
				top: 'romanization',
				middle: "korean_char",
				bottom: "sound",
			};
			challengeGenerator = generateChallenge(basic_consonants, 'romanization', 'korean_char');
			challengeCompleteProps = { skill_id };
			break;
		case "basic_vowels":
			lessonProps = {
				lesson: basic_vowels,
			};
			cardProps = {
				top: null,
				middle: "korean_char",
				bottom: "romanization",
			};
			challengeGenerator = generateChallenge(basic_vowels, 'romanization', 'korean_char');
			challengeCompleteProps = { skill_id };
			break;
		case "double_vowels":
			lessonProps = {
				lesson: double_vowels,
			};
			cardProps = {
				top: null,
				middle: "korean_char",
				bottom: "romanization",
			};
			challengeGenerator = generateChallenge(double_vowels, 'romanization', 'korean_char');
			challengeCompleteProps = { skill_id };
			break;
		case "basic_words_1":
			lessonProps = {
				lesson: basic_words_1,
			};
			cardProps = {
				top: null,
				middle: "korean_char",
				bottom: "romanization",
			};
			challengeGenerator = generateChallenge(basic_words_1, 'romanization', 'korean_char');
			challengeCompleteProps = { skill_id };
			break;
		case "basic_words_2":
			lessonProps = {
				lesson: basic_words_2,
			};
			cardProps = {
				top: null,
				middle: "korean_char",
				bottom: "romanization",
			};
			challengeGenerator = generateChallenge(basic_words_2, 'romanization', 'korean_char');
			challengeCompleteProps = { skill_id };
			break;
		case "basic_words_3":
			lessonProps = {
				lesson: basic_words_3,
			};
			cardProps = {
				top: null,
				middle: "korean_char",
				bottom: "romanization",
			};
			challengeGenerator = generateChallenge(basic_words_3, 'romanization', 'korean_char');
			challengeCompleteProps = { skill_id };
			break;
		case "basic_words_4":
			lessonProps = {
				lesson: basic_words_4,
			};
			cardProps = {
				top: null,
				middle: "korean_char",
				bottom: "romanization",
			};
			challengeGenerator = generateChallenge(basic_words_4, 'romanization', 'korean_char');
			challengeCompleteProps = { skill_id };
			break;
		case "basic_words_5":
			lessonProps = {
				lesson: basic_words_5,
			};
			cardProps = {
				top: null,
				middle: "korean_char",
				bottom: "romanization",
			};
			challengeGenerator = generateChallenge(basic_words_5, 'romanization', 'korean_char');
			challengeCompleteProps = { skill_id };
			break;
		default:
	}

	const [displayChallenge, toggleDisplayChallenge] = useState(false);
	const [challengeProps, setNextChallenge] = useState(challengeGenerator);

	const { currentUser } = useContext(UserContext);
	const unlockedTopics = ['basic_consonants', 'number_sino']
	if (!currentUser && !unlockedTopics.includes(skill_id)) return null;

	return (
		<div className="lesson-page">
			{displayChallenge ? (
				<div>
					<ChallengeContainer
						{...{ challengeCompleteProps, 
							setNextChallenge, 
							challengeGenerator, 
							skill_id }}
						{...challengeProps}
					/>
					<LessonButton {...{ toggleDisplayChallenge }} />
				</div>
			) : (
				<div>
					<LessonContainer {...lessonProps} {...{ cardProps, skill_id }} />
					<ChallengeButton {...{ toggleDisplayChallenge }} />
					<BackButton {...{ history }} />
				</div>
			)}
		</div>
	);
};

export default LessonPage;
