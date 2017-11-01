/* eslint-disable no-undef */
import { getAllPosts, getOnePost, createPost, updatePost, deletePost } from '../../../src/actions';

describe('getAllPosts', () => {
  it('should be a function', () => {
    expect(typeof getAllPosts).toEqual('function');
  });

  it('should return the right action', () => {
    expect(getAllPosts().constructor).toEqual(Object);
    expect(getAllPosts()).toMatchObject({});
  });
});

describe('getOnepost', () => {
  it('should be a function', () => {
    expect(typeof getOnePost).toEqual('function');
  });

  it('should return the right action', () => {
    expect(getOnePost().constructor).toEqual(Object);
    expect(getOnePost()).toMatchObject({});
  });
});

describe('createPost', () => {
  it('should be a function', () => {
    expect(typeof createPost).toEqual('function');
  });

  it('should return the right action', () => {
    const post = { id: 1 };
    expect(createPost().constructor).toEqual(Object);
    expect(createPost(post)).toMatchObject({ type: 'CREATE_POST', payload: { id: 1 } });
  });
});

describe('deletePost', () => {
  it('should be a function', () => {
    expect(typeof deletePost).toEqual('function');
  });

  it('should return the right action', () => {
    const post = { id: 1 };
    expect(deletePost().constructor).toEqual(Object);
    expect(deletePost(post)).toMatchObject({ type: 'DELETE_POST', payload: { id: 1 } });
  });
});

describe('updatePost', () => {
  it('should be a function', () => {
    expect(typeof updatePost).toEqual('function');
  });

  it('should return the right action', () => {
    const post = { id: 1 };
    expect(updatePost().constructor).toEqual(Object);
    expect(updatePost(post)).toMatchObject({ type: 'UPDATE_POST', payload: { id: 1 } });
  });
});
