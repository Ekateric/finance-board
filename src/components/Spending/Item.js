import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../UI/Link';

const SpendingItem = (props) => {
  const {descr, money, isCash, subClass, handleDeleteClick} = props;

  return (
    <li className={`spending-item ${subClass}`}>
      <p className="spending-item__descr">{descr}</p>
      <p className="spending-item__value">
        {money}{isCash ? ', by cash' : ''}
      </p>
      <Link
        element="button"
        title="Delete"
        subClass="err"
        handleClick={handleDeleteClick} />
    </li>
  )
}

SpendingItem.propTypes = {
  descr: PropTypes.string.isRequired,
  money: PropTypes.number.isRequired,
  isCash: PropTypes.bool,
  subClass: PropTypes.string,
  handleDeleteClick: PropTypes.func.isRequired
};

export default SpendingItem;
