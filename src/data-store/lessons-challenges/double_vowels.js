export const double_vowels = {
  title: "Double Vowels",

  introduction: `We can use a combination of the 10 basic vowels ㅏ(a),ㅑ(ya),ㅓ(eo),ㅕ(yeo), ㅗ(o), ㅛ(yo), ㅜ(u), ㅠ(yu), ㅡ(eu), ㅣ(e) to compose the 11 new double vowels.`,

  vowels_list: [
    {
      id: 1,
      korean_char: "ㅐ",
      romanization: "ae",
    },
    {
      id: 2,
      korean_char: "ㅒ",
      romanization: "yae",
    },
    {
      id: 3,
      korean_char: "ㅔ",
      romanization: "e",
    },
    {
      id: 4,
      korean_char: "ㅖ",
      romanization: "ye",
    },
    {
      id: 5,
      korean_char: "ㅘ",
      romanization: "wa",
    },
    {
      id: 6,
      korean_char: "ㅙ",
      romanization: "wae",
    },
    {
      id: 7,
      korean_char: "ㅚ",
      romanization: "oe",
    },
    {
      id: 8,
      korean_char: "ㅝ",
      romanization: "wo",
    },
    {
      id: 9,
      korean_char: "ㅞ",
      romanization: "weh",
    },
    {
      id: 10,
      korean_char: "ㅟ",
      romanization: "wui",
    },
    {
      id: 11,
      korean_char: "ㅢ",
      romanization: "ui",
    },
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

	const vowels_list = double_vowels.vowels_list;
	const random_option = vowels_list[Math.floor(Math.random() * vowels_list.length)];
	const incorrect_random_options = double_vowels.vowels_list.filter(
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
