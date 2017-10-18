import { getAllPosts } from '../../../src/actions';

const posts = [
  {
    "id": 1,
    "title": "My First Post",
    "body": "This is my first post! WHOA!"
  },
  {
    "id": 2,
    "title": "My Second Post",
    "body": "This is my second post! HOLY SHIT!"
  }
];

describe('getAllPosts', function() {
  it('should be a function', function() {
    expect(typeof getAllPosts).toEqual('function');
  });

  it('should return the right action', function() {
    expect(getAllPosts(posts).constructor).toEqual(Object);
    expect(getAllPosts(posts)).toMatchObject({ type: 'GET_ALL_POSTS', payload: [
      {
        "id": 1,
        "title": "My First Post",
        "body": "This is my first post! WHOA!"
      },
      {
        "id": 2,
        "title": "My Second Post",
        "body": "This is my second post! HOLY SHIT!"
      }
    ] });
  });
});