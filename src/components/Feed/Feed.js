import React, { Component } from 'react';
import posts from '../../reducers/posts.json';

export default class Feed extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getAllPosts(posts);
  }

  render() {
    const { posts, getAllPosts } = this.props;
    return <div styleName="container">
      <h1>FEED!</h1>
    </div>;
  }
}
