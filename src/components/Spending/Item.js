import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../UI/Link';
import './Item.scss';

const SpendingItem = (props) => {
  const {descr, money, isCash, subClass, handleDeleteClick} = props;

  return (
    <li className={`spending-item ${subClass}`}>
      <div className="spending-item__columns">
        <p className="spending-item__descr">{descr}</p>
        <p className="spending-item__value">
          {money}{isCash ? ', by cash' : ''}
        </p>
      </div>
      <div className="spending-item__links">
        <Link
          element="button"
          title="Delete"
          subClass={["sm", "err"]}
          handleClick={handleDeleteClick} />
      </div>
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
