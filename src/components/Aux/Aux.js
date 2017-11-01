import React from 'react';
import PropTypes from 'prop-types';
import './Aux.scss';

const Aux = ({ children }) =>
  <div styleName="container">
    {children}
  </div>;

Aux.propTypes = {
  children: PropTypes.any,
};

export default Aux;