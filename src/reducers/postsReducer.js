import initialState from './initialState';
import { GET_ALL_POSTS } from '../actions/actionTypes';

const initial = initialState.posts;

const postsReducer = (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_POSTS:
      return state;
    default:
      return state;
  }
};

export default postsReducer;