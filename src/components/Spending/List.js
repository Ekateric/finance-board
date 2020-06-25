import React from 'react';
import PropTypes from 'prop-types';
import SpendingItemContainer from './ItemContainer';

const SpendingList = (props) => {
  const {deleteSpending} = props;
  const items = props.spendings.map((spendingId) => {
    const spendingItem = props.spendingsData.find((spending) => spending.id === spendingId);
    const {id, descr, money, isCash} = spendingItem;

    return (
      <SpendingItemContainer
        key={id.toString()}
        id={id}
        descr={descr}
        money={money}
        isCash={isCash}
        deleteSpending={deleteSpending} />
    )
  });

  return <ul className="spending-list">{items}</ul>
};

SpendingList.propTypes = {
  spendings: PropTypes.array.isRequired,
  spendingsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteSpending: PropTypes.func.isRequired
};

export default SpendingList;
