import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SpendingFormContainer from '../Spending/FormContainer';
import Link from '../../UI/Link';
import './AddSpending.scss';

const addSpendingText = {
  LIST: '+ spending list',
  ITEM: '+ spending item'
};

class CategoryAddSpending extends Component {
  handleSubmit = (newSpending) => {
    this.props.addSpending(newSpending, this.props.categoryId);
    this.props.toggleAddSpendingForm();
  }

  render() {
    const {isEmptySpendings, isSpendingAdd, toggleAddSpendingForm, disabled} = this.props;
    const buttonText = isEmptySpendings ? addSpendingText.LIST : addSpendingText.ITEM;

    return (
      <div className="category-add-spending">
        {isSpendingAdd
        ? <>
            {isEmptySpendings
            ? <p>If you add a waste, you`ll not be able to edit category amount</p>
            : <p>New spending</p>
            }
            <SpendingFormContainer 
              handleSubmit={this.handleSubmit}
              handleCancelClick={toggleAddSpendingForm} />
          </>
        : <Link
            element="button"
            title={buttonText}
            disabled={disabled}
            handleClick={() => toggleAddSpendingForm()} />
        }
      </div>
    );
  }
  
}

CategoryAddSpending.propTypes = {
  categoryId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  isEmptySpendings: PropTypes.bool.isRequired,
  isSpendingAdd: PropTypes.bool.isRequired,
  toggleAddSpendingForm: PropTypes.func.isRequired,
  addSpending: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

CategoryAddSpending.defaultProps = {
  disabled: false
};

export default CategoryAddSpending;
