import initialState from './initialState';
import { GET_ONE_POST } from '../actions/actionTypes';

const initial = initialState.current;

const currentReducer = (state = initial, action) => {
  const { type } = action;
  switch (type) {
    case GET_ONE_POST:
      return state;
    default:
      return state;
  }
};

export default currentReducer;
