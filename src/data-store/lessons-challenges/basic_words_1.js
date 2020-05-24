export const basic_words_1 = {
  title: "Basic Words (ㄱ) ",

  introduction: `Now we will use the consonants and vowels in previous lesson to form words. Here we will focus on words that starts with ㄱ (g). For example: ㅏ(a), ㅓ(eo), ㅕ(yeo) combined with ㄱ(g) will make 가 = ga, 거 = geo, 겨 = gyeo. `,

  word_list: [
    {
      id: 1,
      korean_char: "가",
      romanization: "ga",
    },
    {
      id: 2,
      korean_char: "갸",
      romanization: "gya",
    },
    {
      id: 3,
      korean_char: "거",
      romanization: "geo",
    },
    {
      id: 4,
      korean_char: "겨",
      romanization: "gyeo",
    },
    {
      id: 5,
      korean_char: "고",
      romanization: "go",
    },
    {
      id: 6,
      korean_char: "교",
      romanization: "gyo",
    },
    {
      id: 7,
      korean_char: "구",
      romanization: "gu",
    },
    {
      id: 8,
      korean_char: "규",
      romanization: "gyu",
    },
    {
      id: 9,
      korean_char: "그",
      romanization: "geu",
    },
    {
      id: 10,
      korean_char: "기",
      romanization: "gi",
    }
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

export const generateBasicWords1Challenge = () => {
	const { contentType, optionsAndAnswerType } = generateRandomTypes();

	const lesson_name = basic_words_1;
	const list_name = "word_list";

	const convertTypeToText = {
		korean_char: "korean character",
		sound: "sound",
		romanization: "romanization",
	};

	const header = `Choose the correct ${convertTypeToText[optionsAndAnswerType]} for the ${convertTypeToText[contentType]}`;

	const list = lesson_name[list_name];
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
