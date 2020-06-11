import { combineReducers } from 'redux';

import  movieReducer  from '../reducers';

const rootReducer = combineReducers({
	movies: movieReducer
})

export default rootReducer;