import React from 'react';

const SpendingItem = (props) => {
  const {descr, money, isCash} = props;

  return (
    <li className="spending-item">
      <p className="spending-item__descr">{descr}</p>
      <p className="spending-item__value">
        {money}{isCash ? ', by cash' : ''}
      </p>
    </li>
  )
}

export default SpendingItem;
