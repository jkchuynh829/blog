import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import postsReducer from './postsReducer';
import currentReducer from './currentReducer';

export default combineReducers({
  posts: postsReducer,
  current: currentReducer,
  form: formReducer,
});
