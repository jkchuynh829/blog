/* eslint-disable no-undef */
import { GET_ALL_POSTS, CREATE_POST, DELETE_POST, UPDATE_POST } from '../../../src/actions/actionTypes';
import postsReducer from '../../../src/reducers/postsReducer';

const state = [{ id: 1, title: 'What' }, { id: 2, title: 'Is' }];
const getAllPostAction = { type: GET_ALL_POSTS };
const createPostAction = { type: CREATE_POST, payload: { id: 3, title: 'Up?' } };
const deletePostAction = { type: DELETE_POST, payload: { id: 3 } };
const updatePostAction = { type: UPDATE_POST, payload: { id: 1, title: 'NEW TITLE?' } };

describe('postsReducer', () => {
  it('should be a function', () => {
    expect(typeof postsReducer).toEqual('function');
  });

  it('it should return the correct state', () => {
    expect(postsReducer(state, getAllPostAction)).toMatchObject([{ id: 1, title: 'What' }, { id: 2, title: 'Is' }]);
    expect(postsReducer(state, createPostAction)).toMatchObject([{ id: 1, title: 'What' }, { id: 2, title: 'Is' }, { id: 3, title: 'Up?' }]);
    expect(postsReducer(state, deletePostAction)).toMatchObject([{ id: 1, title: 'What' }, { id: 2, title: 'Is' }]);
    expect(postsReducer(state, updatePostAction)).toMatchObject([{ id: 1, title: 'NEW TITLE?' }, { id: 2, title: 'Is' }]);
  });
});
