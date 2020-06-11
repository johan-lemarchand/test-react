import { DELETE_CARD, SET_FILTER, TOGGLE_LIKE, BUTTON_ARROW,ELEMENT_VISIBLE } from './index';

export const deleteCard = (movies) => {

	return {
		type: DELETE_CARD,
		payload: movies
	}
}

export const setFilter = (category) => {
	return {
		type: SET_FILTER,
		category
	}
}
export const toggleLike = () => {
	return {
		type: TOGGLE_LIKE,

	}
}
export const buttonArrow = () => {
	return {
		type: BUTTON_ARROW,

	}
}
export const cardVisible= () => {
	return {
		type: ELEMENT_VISIBLE,

	}
}