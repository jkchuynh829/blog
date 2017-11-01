import moment from 'moment';
import initialState from './initialState';
import { GET_ALL_POSTS, CREATE_POST, DELETE_POST, UPDATE_POST } from '../actions/actionTypes';

const initial = initialState.posts;

const postsReducer = (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_POSTS:
      return state;
    case CREATE_POST:
      return [...state].concat(Object.assign(payload, { createdAt: moment(Date.now()).format('MMMM DD, YYYY'), id: Math.random() }));
    case DELETE_POST:
      return [...state].filter(post => post.id !== payload.id);
    case UPDATE_POST:
      return [...state].map(post => payload.id === post.id ? payload : post);
    default:
      return state;
  }
};

export default postsReducer;