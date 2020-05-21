export const basic_vowels = {
  title: "Basic Vowels",

  introduction: `There are ten basic vowels in Hangul.`,

  vowels_list: [
    {
      id: 1,
      korean_char: "ㅏ",
      romanization: "a",
    },
    {
      id: 2,
      korean_char: "ㅑ",
      romanization: "ya",
    },
    {
      id: 3,
      korean_char: "ㅓ",
      romanization: "eo",
    },
    {
      id: 4,
      korean_char: "ㅕ",
      romanization: "yeo",
    },
    {
      id: 5,
      korean_char: "ㅗ",
      romanization: "o",
    },
    {
      id: 6,
      korean_char: "ㅛ",
      romanization: "yo",
    },
    {
      id: 7,
      korean_char: "ㅜ",
      romanization: "u",
    },
    {
      id: 8,
      korean_char: "ㅠ",
      romanization: "yu",
    },
    {
      id: 9,
      korean_char: "ㅡ",
      romanization: "eu",
    },
    {
      id: 10,
      korean_char: "ㅣ",
      romanization: "e",
    }
  ],
};

const types = ["korean_char", "romanization"];
const generateRandomTypes = () => {
	let bothAreSameTypes = true;
	let contentType, optionsAndAnswerType;
	while (bothAreSameTypes) {
		contentType = types[Math.floor(Math.random() * types.length)];
		optionsAndAnswerType = types[Math.floor(Math.random() * types.length)];
		if (optionsAndAnswerType !== contentType) {
			bothAreSameTypes = false;
		}
	}
	return { contentType, optionsAndAnswerType };
};

export const generateChallenge = () => {
	const { contentType, optionsAndAnswerType } = generateRandomTypes();

	const convertTypeToText = {
		korean_char: "korean character",
		romanization: "romanization",
	};

	const header = `Choose the correct ${convertTypeToText[optionsAndAnswerType]} for the ${convertTypeToText[contentType]}`;

	const vowels_list = basic_vowels.vowels_list;
	const random_option = vowels_list[Math.floor(Math.random() * vowels_list.length)];
	const incorrect_random_options = basic_vowels.vowels_list.filter(
		(number) => number.id !== random_option.id
	);

	const answer = random_option;
	const content = random_option;
	const incorrect_options = incorrect_random_options.slice(0, 3);
	const unshuffled_options = [...incorrect_options, answer];

	const options = unshuffled_options.sort(() => Math.random() - 0.5);

	return {
		header,
		content,
		contentType,
		options,
		answer,
		optionsAndAnswerType,
	};
};
