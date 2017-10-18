import { CREATE_POST, GET_ALL_POSTS, GET_ONE_POST, UPDATE_POST, DELETE_POST } from './actionTypes';

export const createPost = (action) => ({ type: CREATE_POST, payload: 'payload' });
export const getAllPosts = (payload) => ({ type: GET_ALL_POSTS, payload });
export const getOnePost = (action) => ({ type: GET_ONE_POST, payload: 'payload' });
export const updatePost = (action) => ({ type: UPDATE_POST, payload: 'payload' });
export const deletePost = (action) => ({ type: DELETE_POST, payload: 'payload' });