import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Feed from '../components/Feed/Feed';
import { getAllPosts } from '../actions';

const mapStateToProps = ({ posts }) => ({ posts });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ getAllPosts }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);