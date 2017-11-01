import { GET_ALL_POSTS, GET_ONE_POST, CREATE_POST, DELETE_POST, UPDATE_POST } from './actionTypes';

export const getAllPosts = () => ({ type: GET_ALL_POSTS });
export const getOnePost = () => ({ type: GET_ONE_POST });
export const createPost = (payload) => ({ type: CREATE_POST, payload });
export const deletePost = (payload) => ({ type: DELETE_POST, payload });
export const updatePost = (payload) => ({ type: UPDATE_POST, payload });
