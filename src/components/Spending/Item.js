import React from 'react';
import PropTypes from 'prop-types';

const SpendingItem = (props) => {
  const {descr, money, isCash, subClass} = props;

  return (
    <li className={`spending-item ${subClass}`}>
      <p className="spending-item__descr">{descr}</p>
      <p className="spending-item__value">
        {money}{isCash ? ', by cash' : ''}
      </p>
    </li>
  )
}

SpendingItem.propTypes = {
  descr: PropTypes.string.isRequired,
  money: PropTypes.number.isRequired,
  isCash: PropTypes.bool,
  subClass: PropTypes.string
};

export default SpendingItem;
