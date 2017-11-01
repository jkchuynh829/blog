import React from 'react';
import PropTypes from 'prop-types';
import PostEditorForm from '../../forms/PostEditorForm/PostEditorForm';
import './PostEditor.scss';

const PostEditor = ({ actions }) => {
  const { createPost } = actions;
  return (
    <div styleName="container">
      <PostEditorForm onSubmit={createPost} />
    </div>
  );
};

PostEditor.propTypes = {
  actions: PropTypes.shape({
    createPost: PropTypes.func,
  }),
};

export default PostEditor;
