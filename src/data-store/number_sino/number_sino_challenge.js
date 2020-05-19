import number_sino from './number_sino';

const number_list = number_sino.number_list;
const random_number =	number_list[Math.floor(Math.random() * number_list.length)];
const incorrect_random_numbers = number_sino.number_list.filter(
	number => number.id !== random_number.id
);

export const header = "Choose the correct korean character for the number"; 
export const content = random_number.numeral;
export const correct_option = random_number.korean_char;
export const incorrect_options = incorrect_random_numbers.slice(0,3).map(number => number.korean_char);




