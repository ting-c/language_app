export const basic_words_3 = {
  title: "Basic Words (ㄷ, ㄹ, ㅁ) ",

  introduction: `Here we will look at words that starts with ㄷ(d), ㄹ(l/r), ㅁ(m) and constructed with basic vowels.`,

  list: [
    {
      id: 1,
      korean_char: "다",
      romanization: "da",
    },
    {
      id: 2,
      korean_char: "댜",
      romanization: "dya",
    },
    {
      id: 3,
      korean_char: "더",
      romanization: "deo",
    },
    {
      id: 4,
      korean_char: "뎌",
      romanization: "dyeo",
    },
    {
      id: 5,
      korean_char: "로",
      romanization: "lo",
    },
    {
      id: 6,
      korean_char: "료",
      romanization: "lyo",
    },
    {
      id: 7,
      korean_char: "루",
      romanization: "lu",
    },
    {
      id: 8,
      korean_char: "뮤",
      romanization: "myu",
    },
    {
      id: 9,
      korean_char: "므",
      romanization: "meu",
    },
    {
      id: 10,
      korean_char: "미",
      romanization: "mi",
    },
  ],
};

const generateRandomTypes = () => {
	const types = ["korean_char", "romanization"];

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

export const generateBasicWords3Challenge = () => {
	const { contentType, optionsAndAnswerType } = generateRandomTypes();

	const lesson_name = basic_words_3;

	const convertTypeToText = {
		korean_char: "korean character",
		sound: "sound",
		romanization: "romanization",
	};

	const header = `Choose the correct ${convertTypeToText[optionsAndAnswerType]} for the ${convertTypeToText[contentType]}`;

	const list = lesson_name.list;
	const random_option = list[Math.floor(Math.random() * list.length)];
	const incorrect_random_options = list.filter(
		(option) => option.id !== random_option.id
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
