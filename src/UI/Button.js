import React from 'react';
import PropTypes from 'prop-types';
import {getClassString} from '../assets/js';
import './Button.scss';

const DEFAULT_CLASS_NAME = 'btn';
const DISABLED_CLASS_NAME = 'disabled';
const DEFAULT_TYPE = 'button';

const Button = (props) => {
  const {type, title, subClass, disabled, handleClick} = props;

  let classList = [];

  if (subClass) {
    classList = typeof subClass === 'string' ? [subClass] : [...subClass];
  }
  classList = disabled ? [...classList, DISABLED_CLASS_NAME] : classList;

  const className = getClassString(DEFAULT_CLASS_NAME, classList);

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
