import React from 'react';
import PropTypes from 'prop-types';
import SpendingFormContainer from '../Spending/FormContainer';

const CategoryAddSpending = (props) => {
  const {isSpendingAdd, toggleAddSpendingForm} = props;

  return (
    <div className="category-add-spending">
      {isSpendingAdd
      ? <SpendingFormContainer />
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
