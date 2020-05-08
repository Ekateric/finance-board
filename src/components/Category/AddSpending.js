import React, {Component} from 'react';
import SpendingForm from '../Spending/Form';

class CategoryAddSpending extends Component {
  render() {
    const {isSpendingAdd, toggleAddSpendingForm} = this.props;

    return (
      <div className="category-add-spending">
        {isSpendingAdd
        ? <SpendingForm  />
        : <span onClick={() => toggleAddSpendingForm()}>+ Add spending list</span>
        }
      </div>
    );
  }
}

export default CategoryAddSpending;
