import React from 'react';
import PropTypes from 'prop-types';
import './PostTile.scss';

const PostTile = ({ id, title, body, createdAt }) =>
  <div styleName="container">
    <h1>{title}</h1>
    <p>{createdAt}</p>
    <p>{body}</p>
  </div>;

PostTile.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}

export default PostTile;