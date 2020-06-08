import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SpendingFormContainer from '../Spending/FormContainer';

class CategoryAddSpending extends Component {
  handleSubmit = (newSpending) => {
    this.props.addSpending(newSpending);
    this.props.toggleAddSpendingForm();
  }

  render() {
    const {buttonText, isSpendingAdd, toggleAddSpendingForm} = this.props;

    return (
      <div className="category-add-spending">
        {isSpendingAdd
        ? <SpendingFormContainer 
            handleSubmit={this.handleSubmit}
            handleCancelClick={toggleAddSpendingForm} />
        : <span onClick={() => toggleAddSpendingForm()}>{buttonText}</span>
        }
      </div>
    );
  }
  
}

CategoryAddSpending.propTypes = {
  buttonText: PropTypes.string.isRequired,
  isSpendingAdd: PropTypes.bool.isRequired,
  toggleAddSpendingForm: PropTypes.func.isRequired,
  addSpending: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

CategoryAddSpending.defaultProps = {
  disabled: false
};

export default CategoryAddSpending;
