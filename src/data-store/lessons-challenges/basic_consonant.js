export const basic_consonant = {
  title: "Basic Consonant",

  introduction: `The Korean Language (Hangul) has nineteen consonants and there are fourteen basic consonants (ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ ㅇ ㅈ ㅊ ㅋ ㅌ ㅍ ㅎ). Five basic consonants were created by inspiration from the shape of the oral cavity. “ㄱ ㄴ ㅁ ㅅ ㅇ” are the five letters and they formed the basis of other consonant letters. Notice that these letters  ㄷ, ㅂ, ㅈ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ all look similar to the five consontant letters with slight modifications. 

However the pronunciation and romanization of Korean consonant is determined by whether the consonant appears at the beginning or end of the syllable. For now, we will focus on the pronunciation that each consonant has at the beginning of a syllable.`,

  consonant_list: [
    {
      id: 1,
      korean_char: "ㄱ",
      romanization: "g",
      sound: "g in great",
    },
    {
      id: 2,
      korean_char: "ㄴ",
      romanization: "n",
      sound: "n in noon",
    },
    {
      id: 3,
      korean_char: "ㄷ",
      romanization: "d",
      sound: "d in doll",
    },
    {
      id: 4,
      korean_char: "ㄹ",
      romanization: "l / r",
      sound: "l in london",
    },
    {
      id: 5,
      korean_char: "ㅁ",
      romanization: "m",
      sound: "m in man",
    },
    {
      id: 6,
      korean_char: "ㅂ",
      romanization: "b",
      sound: "b in ball",
    },
    {
      id: 7,
      korean_char: "ㅅ",
      romanization: "s",
      sound: "s in see",
    },
    {
      id: 8,
      korean_char: "ㅇ",
      romanization: "0",
      sound: "silent sound as in 'hour' ",
    },
    {
      id: 9,
      korean_char: "ㅈ",
      romanization: "j",
      sound: "j in jam",
    },
    {
      id: 10,
      korean_char: "ㅊ",
      romanization: "ch",
      sound: "ch in cheese",
    },
    {
      id: 11,
      korean_char: "ㅋ",
      romanization: "k",
      sound: "k in kite",
    },
    {
      id: 12,
      korean_char: "ㅌ",
      romanization: "t",
      sound: "t in time",
    },
    {
      id: 13,
      korean_char: "ㅍ",
      romanization: "p",
      sound: "power",
    },
    {
      id: 14,
      korean_char: "ㅎ",
      romanization: "h",
      sound: "h in house",
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
		sound: "sound",
		romanization: "romanization",
	};

	const header = `Choose the correct ${convertTypeToText[optionsAndAnswerType]} for the ${convertTypeToText[contentType]}`;

	const consonant_list = basic_consonant.consonant_list;
	const random_number = consonant_list[Math.floor(Math.random() * consonant_list.length)];
	const incorrect_random_numbers = basic_consonant.consonant_list.filter(
		(number) => number.id !== random_number.id
	);

	const answer = random_number;
	const content = random_number;
	const incorrect_options = incorrect_random_numbers.slice(0, 3);
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
