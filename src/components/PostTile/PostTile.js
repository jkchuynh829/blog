import React from 'react';
import './PostTile.scss';

const PostTile = ({ id, title, body, createdAt }) => <div styleName="container">
  <h1>{title}</h1>
  <p>{createdAt}</p>
  <p>{body}</p>
</div>

export default PostTile;