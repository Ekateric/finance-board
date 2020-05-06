import React, {Component} from 'react';

class CategoryAddSpending extends Component {
  render() {
    const {isSpendingAdd, toggleAddSpendingForm} = this.props;

    return (
      <div className="category-add-spending">
        {isSpendingAdd
        ? <form>Adding form</form>
        : <span onClick={() => toggleAddSpendingForm()}>+ Add spending list</span>
        }
      </div>
    );
  }
}

export default CategoryAddSpending;
