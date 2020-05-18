import React from 'react';
import PropTypes from 'prop-types';
import {getClassString} from '../assets/js';
import './Button.scss';

const DEFAULT_CLASS_NAME = 'btn';
const DEFAULT_TYPE = 'button';

const Button = (props) => {
  const {type, title, subClass, disabled, handleClick} = props;

  const className = getClassString(DEFAULT_CLASS_NAME, subClass);

  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={handleClick} >
      {title}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  subClass: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  disabled: PropTypes.bool,
  handleClick: PropTypes.func
};

Button.defaultProps = {
  type: DEFAULT_TYPE,
  disabled: false
};

export default Button;
