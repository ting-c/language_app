const generateRandomTypes = (types) => {
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

const generateChallenge = (lesson_name, ...types) => {
	const { contentType, optionsAndAnswerType } = generateRandomTypes(types);

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

export default generateChallenge;