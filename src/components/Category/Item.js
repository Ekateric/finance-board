import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../../UI/Button';
import CategoryFormContainer from './FormContainer';
import CategoryAddSpending from './AddSpending';
import SpendingList from '../Spending/List';
import './Item.scss';

class CategoryItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      title: this.props.title,
      moneySum: this.props.moneySum,
      isEdit: false,
      isSpendingAdd: false
    };
  }

  toggleEditForm = () => {
    this.setState({
      isEdit: !this.state.isEdit
    });
  }

  handleSubmit = (newCategory) => {
    this.setState(newCategory);
    this.props.categoryHandlers.update({...newCategory, id: this.state.id});
    this.toggleEditForm();
  }

  toggleAddSpendingForm = () => {
    this.setState({
      isSpendingAdd: !this.state.isSpendingAdd
    });
  }

  addSpending = (newSpending) => {
    this.props.spendingHandlers.add(newSpending, this.state.id);
  }

  render() {
    const {id, title, moneySum, isEdit, isSpendingAdd} = this.state;
    const {spendings, spendingsData, categoryHandlers} = this.props;

    return (
      <li className="category-item">
        <h3 className="category-item__title">{title}</h3>
        
          {isEdit
          ? <div className="category-item__body">
              <p>Changing category:</p>
              <CategoryFormContainer 
                id={id}
                title={title}
                moneySum={moneySum}
                handleSubmit={this.handleSubmit}
                handleCancelClick={this.toggleEditForm} />
              <CategoryAddSpending
                isSpendingAdd={isSpendingAdd}
                toggleAddSpendingForm={this.toggleAddSpendingForm}
                addSpending={this.addSpending} />
            </div>
          : <div className="category-item__body">
              <p>{moneySum}</p>
              <Button
                title="Edit"
                handleClick={this.toggleEditForm} />
              <Button
                title="Delete"
                subClass="err"
                handleClick={() => categoryHandlers.delete(id)} />
            </div>
          }
          {spendings && spendings.length > 0 &&
            <SpendingList 
              spendings={spendings}
              spendingsData={spendingsData} />
          }
      </li>
    );
  }
}

CategoryItem.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  title: PropTypes.string.isRequired,
  moneySum: PropTypes.number.isRequired,
  spendings: PropTypes.array,
  spendingsData: PropTypes.arrayOf(PropTypes.object),
  categoryHandlers: PropTypes.objectOf(PropTypes.func).isRequired,
  spendingHandlers: PropTypes.objectOf(PropTypes.func).isRequired
};

export default CategoryItem;
