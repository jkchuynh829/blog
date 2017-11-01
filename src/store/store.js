import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import initialState from '../reducers/initialState';

export default createStore(reducers, initialState, composeWithDevTools());
