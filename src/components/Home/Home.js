import React from 'react';
import PostEditorContainer from '../../containers/PostEditorContainer';
import FeedContainer from '../../containers/FeedContainer';
import './Home.scss';

/**
 * Rendered by App
 */
const Home = () =>
  <div styleName="container">
    <FeedContainer />
    <PostEditorContainer />
  </div>;

export default Home;
