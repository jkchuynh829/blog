import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import './PostEditorForm.scss';
/* eslint-disable jsx-a11y/label-has-for */
const PostEditorForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title: </label>
        <Field
          name="title"
          component="input"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="body">Body: </label>
        <Field
          name="body"
          component="input"
          type="text"
        />
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
};

PostEditorForm.propTypes = {
  handleSubmit: PropTypes.func,
}

export default reduxForm({
  form: 'post',
})(PostEditorForm);
