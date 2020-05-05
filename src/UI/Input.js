import React from 'react';
import {getClassString} from '../assets/js';
import './Input.scss';

const DEFAULT_CLASS_NAME = 'input';
const DEFAULT_TYPE = 'text';

const Input = (props) => {
  const {id, value, name, placeholder, handleChange} = props;
  let {type, disabled} = props;

  type = type || DEFAULT_TYPE;
  disabled = !!disabled;

  const className = getClassString(DEFAULT_CLASS_NAME, props.subClass);
  const inputId = `${name}_${id}`;

  return (
    <input
      type={type}
      className={className}
      value={value}
      name={name}
      id={inputId}
      disabled={disabled}
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}

export default Input;
