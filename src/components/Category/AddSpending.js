import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SpendingFormContainer from '../Spending/FormContainer';

class CategoryAddSpending extends Component {
  handleSubmit = (newSpending) => {
    this.props.addSpending(newSpending);
    this.props.toggleAddSpendingForm();
  }

  render() {
    const {isSpendingAdd, toggleAddSpendingForm} = this.props;

    return (
      <div className="category-add-spending">
        {isSpendingAdd
        ? <SpendingFormContainer 
            handleSubmit={this.handleSubmit}
            handleCancelClick={toggleAddSpendingForm} />
        : <span onClick={() => toggleAddSpendingForm()}>+ Add spending list</span>
        }
      </div>
    );
  }
  
}

CategoryAddSpending.propTypes = {
  isSpendingAdd: PropTypes.bool.isRequired,
  toggleAddSpendingForm: PropTypes.func.isRequired,
  addSpending: PropTypes.func.isRequired
};

export default CategoryAddSpending;
