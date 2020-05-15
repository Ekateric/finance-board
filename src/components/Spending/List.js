import React from 'react';
import SpendingItemContainer from './ItemContainer';

const SpendingList = (props) => {
  const items = props.spendings.map((spending) => {
    const {id, descr, money, isCash} = spending;

    return (
      <SpendingItemContainer
        key={id.toString()}
        id={id}
        descr={descr}
        money={money}
        isCash={isCash} />
    )
  });

  return <ul className="spending-list">{items}</ul>
};

export default SpendingList;
