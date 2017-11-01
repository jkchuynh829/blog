import React from 'react';
import PropTypes from 'prop-types';
import PostTile from '../PostTile/PostTile';
import './Feed.scss';

const Feed = ({ posts }) =>
  <div styleName="container">
    <h1>Posts:</h1>
    <div>
      {posts.map(post => <PostTile
        key={`${post.id}---${post.title}`}
        id={post.id}
        title={post.title}
        createdAt={post.createdAt}
        body={post.body}
      />)}
    </div>
  </div>;

Feed.propTypes = {
  posts: PropTypes.array,
};

export default Feed;
