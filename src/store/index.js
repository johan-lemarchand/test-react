import { createStore, compose } from 'redux';

import {movieReducer} from '/home/johan/PhpstormProjects/test-react/react-app/src/component/reducers/reducers.js';

const enhancers = compose(
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(movieReducer, {}, enhancers);

export default store;