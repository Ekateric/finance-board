import React from 'react';

const DEFAULT_CLASS_NAME = 'btn';
const DEFAULT_TYPE = 'button';

const Button = (props) => {
  const type = props.type || DEFAULT_TYPE;
  const title = props.title;
  let className = DEFAULT_CLASS_NAME;

  if (props.subClass) {
    if (typeof props.subClass === 'string') {
      className = `${className} ${DEFAULT_CLASS_NAME}__${props.subClass}`
    
    } else {
        const subClassName = props.subClass.map((subClass) => {
          return `${DEFAULT_CLASS_NAME}__${subClass}`;
        })
        .join(' ');

        className = `${className} ${subClassName}`;
    }
  }

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
