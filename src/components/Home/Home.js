import React from 'react';
import FeedContainer from '../../containers/FeedContainer';
import Nav from '../Nav/Nav';
import './Home.scss';

/**
 * Rendered by App
 */
const Home = () => <div styleName="container">
  <FeedContainer />
  <Nav />
</div>;

export default Home;