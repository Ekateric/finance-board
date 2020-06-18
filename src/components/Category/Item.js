import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../UI/Button';
import CategoryFormContainer from './FormContainer';
import CategoryAddSpending from './AddSpending';
import SpendingList from '../Spending/List';
import './Item.scss';

const CategoryItem = (props) => {
  const {data, spendings, spendingsData, editHandlers, spendingHandlers} = props;
  const {id, title, moneySum, isEdit, isSpendingAdd, addSpendingButtonText} = data;

  return (
    <li className="category-item">
      <h3 className="category-item__title">{title}</h3>
      <div className="category-item__body">
        {isEdit
        ? <>
            <p>Changing category:</p>
            <CategoryFormContainer 
              id={id}
              title={title}
              moneySum={moneySum}
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
        buttonText={addSpendingButtonText}
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
    isEdit: PropTypes.bool.isRequired,
    isSpendingAdd: PropTypes.bool.isRequired,
    addSpendingButtonText: PropTypes.string.isRequired
  }).isRequired,
  spendings: PropTypes.array,
  spendingsData: PropTypes.arrayOf(PropTypes.object),
  editHandlers: PropTypes.objectOf(PropTypes.func).isRequired,
  spendingHandlers: PropTypes.objectOf(PropTypes.func).isRequired
};

export default CategoryItem;
