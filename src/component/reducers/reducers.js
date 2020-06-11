import * as actions from '../actions/actions';

export const movieReducer = (state, action) => {
	switch (action.type) {
		case actions.deleteCard: {
			return {
				...state,
				movies: state.movies.filter((m, i) => i !== action.index)
			}
		}
		case actions.setFilter: {
			return {
				...state,
				filter: action.filter
			}
		}
		case actions.toggleLike: {
			return {
				...state,
				movies: state.movies.map( (m, i) => {
					if (i === action.index) {
						m.done = !m.done
					}
					return m;
				})
			}
		}
		/*case actions.BUTTON_ARROW: {

		}
		case actions.ELEMENT_VISIBLE: {

		}*/
		default: {
			return state
		}
	}



}