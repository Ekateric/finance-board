import React from 'react';
import PropTypes from 'prop-types';
import SpendingForm from '../Spending/Form';

const CategoryAddSpending = (props) => {
  const {isSpendingAdd, toggleAddSpendingForm} = props;

  return (
    <div className="category-add-spending">
      {isSpendingAdd
      ? <SpendingForm  />
      : <span onClick={() => toggleAddSpendingForm()}>+ Add spending list</span>
      }
    </div>
  );
}

CategoryAddSpending.propTypes = {
  isSpendingAdd: PropTypes.bool.isRequired,
  toggleAddSpendingForm: PropTypes.func.isRequired
};

export default CategoryAddSpending;
