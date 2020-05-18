import React from 'react';
import PropTypes from 'prop-types';
import {getClassString} from '../assets/js';
import './Input.scss';

const DEFAULT_CLASS_NAME = 'input';
const DEFAULT_TYPE = 'text';

const Input = (props) => {
  const {id, type, value, name, subClass, disabled, required, placeholder, handleChange} = props;

  const className = getClassString(DEFAULT_CLASS_NAME, subClass);
  const inputId = `${name}_${id}`;

  return (
    <input
      type={type}
      className={className}
      value={value}
      name={name}
      id={inputId}
      disabled={disabled}
      required={required}
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}

Input.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  name: PropTypes.string.isRequired,
  subClass: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired
};

Input.defaultProps = {
  type: DEFAULT_TYPE,
  disabled: false,
  required: false,
  placeholder: ''
};

export default Input;
