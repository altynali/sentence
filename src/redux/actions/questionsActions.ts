import { ActionTypesEnum } from '../actionTypes';

export const nextQuestion = () => {
	return {
		type: ActionTypesEnum.NEXT_QUESTION,
	};
};

export const prevQuestion = () => {
	return {
		type: ActionTypesEnum.PREV_QUESTION,
	};
};

export const setAnswer = (answer: string) => {
	return {
		type: ActionTypesEnum.SET_ANSWER,
		answer,
	};
};

export const resetGame = () => {
	return {
		type: ActionTypesEnum.RESET_GAME,
	};
};
