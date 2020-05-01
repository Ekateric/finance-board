import React from 'react';
import {getClassString} from '../assets/js';

const DEFAULT_CLASS_NAME = 'btn';
const DEFAULT_TYPE = 'button';

const Button = (props) => {
  const type = props.type || DEFAULT_TYPE;
  const title = props.title;
  const className = getClassString(DEFAULT_CLASS_NAME, props.subClass);

  return (
    <button
      type={type}
      className={className}
      onClick={props.handleClick}>
      {title}
    </button>
  )
}

export default Button;
