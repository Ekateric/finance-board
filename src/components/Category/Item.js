import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../UI/Button';
import CategoryFormContainer from './FormContainer';
import CategoryAddSpending from './AddSpending';
import SpendingList from '../Spending/List';
import './Item.scss';

const CategoryItem = (props) => {
  const {data, spendings, spendingsData, editHandlers, spendingHandlers} = props;
  const {id, title, moneySum, subClass, isEdit, isSpendingAdd, isEmptySpendings, disabledEdit} = data;

  return (
    <li className={`category-item ${subClass}`}>
      <h3 className="category-item__title">{title}</h3>
      <div className="category-item__body">
        {isEdit
        ? <>
            <p>Changing category:</p>
            <CategoryFormContainer 
              id={id}
              title={title}
              moneySum={moneySum}
              disabled={disabledEdit}
              handleSubmit={editHandlers.formSubmit}
              handleCancelClick={editHandlers.toggleForm} />
          </>
        : <>
            <p>{moneySum}</p>
            <Button
              title="Edit"
              handleClick={editHandlers.toggleForm}
              disabled={isSpendingAdd} />
            <Button
              title="Delete"
              subClass="err"
              handleClick={editHandlers.deleteClick} />
          </>
        }
      </div>
      {spendings && spendings.length > 0 &&
        <SpendingList 
          spendings={spendings}
          spendingsData={spendingsData} />
      }
      <CategoryAddSpending
        isEmptySpendings={isEmptySpendings}
        isSpendingAdd={isSpendingAdd}
        toggleAddSpendingForm={spendingHandlers.toggleForm}
        addSpending={spendingHandlers.add}
        disabled={isEdit} />
    </li>
  );
}

CategoryItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    title: PropTypes.string.isRequired,
    moneySum: PropTypes.number.isRequired,
    subClass: PropTypes.string,
    isEdit: PropTypes.bool.isRequired,
    isSpendingAdd: PropTypes.bool.isRequired,
    isEmptySpendings: PropTypes.bool.isRequired,
    disabledEdit: PropTypes.object
  }).isRequired,
  spendings: PropTypes.array,
  spendingsData: PropTypes.arrayOf(PropTypes.object),
  editHandlers: PropTypes.objectOf(PropTypes.func).isRequired,
  spendingHandlers: PropTypes.objectOf(PropTypes.func).isRequired
};

export default CategoryItem;
