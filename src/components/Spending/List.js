import React from 'react';
import PropTypes from 'prop-types';
import SpendingItemContainer from './ItemContainer';
import './List.scss';

const SpendingList = (props) => {
  const {categoryId, spendingHandlers} = props;
  const items = props.spendings.map((spendingId) => {
    const spendingItem = props.spendingsData.find((spending) => spending.id === spendingId);
    const {id, descr, money, isCash} = spendingItem;

    return (
      <SpendingItemContainer
        key={id.toString()}
        categoryId={categoryId}
        id={id}
        descr={descr}
        money={money}
        isCash={isCash}
        spendingHandlers={spendingHandlers} />
    )
  });

  return <ul className="spending-list">{items}</ul>
};

SpendingList.propTypes = {
  categoryId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  spendings: PropTypes.array.isRequired,
  spendingsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  spendingHandlers: PropTypes.objectOf(PropTypes.func).isRequired
};

export default SpendingList;
