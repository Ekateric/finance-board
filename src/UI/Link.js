import React from 'react';
import PropTypes from 'prop-types';
import {getClassString} from '../assets/js';
import './Link.scss';

const DEFAULT_CLASS_NAME = 'link';
const DISABLED_CLASS_NAME = 'disabled';
const DEFAULT_ELEMENT = 'a';
const BUTTON_TYPE = 'button';

const Link = (props) => {
  const {element, title, subClass, type, disabled, handleClick} = props;
  const LinkElement = element;

  let classList = [];

  if (subClass) {
    classList = typeof subClass === 'string' ? [subClass] : [...subClass];
  }
  classList = disabled ? [...classList, DISABLED_CLASS_NAME] : classList;
  
  const className = getClassString(DEFAULT_CLASS_NAME, classList);
  const elementType = element === 'button' ? (type || BUTTON_TYPE) : '';

  return (
    <LinkElement
      className={className}
      {...(!!elementType && {type: elementType})}
      disabled={disabled} 
      onClick={handleClick}>
      {title}
    </LinkElement>    
  );
}

Link.propTypes = {
  element: PropTypes.string,
  title: PropTypes.string.isRequired,
  subClass: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func
};

Link.defaultProps = {
  element: DEFAULT_ELEMENT,
  disabled: false
};

export default Link;
