import React from 'react';
import PropTypes from 'prop-types';
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

SpendingList.propTypes = {
  spendings: PropTypes.arrayOf(PropTypes.object)
};

export default SpendingList;
