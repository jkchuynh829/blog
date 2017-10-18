import { getAllPosts } from '../../../src/actions';
import { GET_ALL_POSTS } from '../../../src/actions/actionTypes';
import postsReducer from '../../../src/reducers/postsReducer';

const state = [{ id: 1 }];
const action = { type: GET_ALL_POSTS, payload: [{ id: 2 }, { id: 3 }] };

describe('postsReducer', function() {
  it('should be a function', function() {
    expect(typeof postsReducer).toEqual('function');
  });

  it('it should return the correct state', function() {
    expect(postsReducer(state, action)).toMatchObject([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
});