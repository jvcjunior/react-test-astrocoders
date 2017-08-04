import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => (
  <i className={`fa fa-${props.name}`} {...props}></i>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;