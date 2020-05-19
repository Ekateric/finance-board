import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../../UI/Button';
import CategoryForm from './Form';
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
      spendings: this.props.spendings,
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
    this.props.updateCategory({...newCategory, id: this.state.id});
    this.toggleEditForm();
  }

  toggleAddSpendingForm = () => {
    this.setState({
      isSpendingAdd: !this.state.isSpendingAdd
    });
  }

  render() {
    const {id, title, moneySum, spendings, isEdit, isSpendingAdd} = this.state;
    const {deleteCategory} = this.props;

    return (
      <li className="category-item">
        <h3 className="category-item__title">{title}</h3>
        
          {isEdit
          ? <div className="category-item__body">
              <p>Changing category:</p>
              <CategoryForm 
                id={id}
                title={title}
                moneySum={moneySum}
                handleSubmit={this.handleSubmit}
                handleCancelClick={this.toggleEditForm} />
              <CategoryAddSpending
                isSpendingAdd={isSpendingAdd}
                toggleAddSpendingForm={this.toggleAddSpendingForm} />
            </div>
          : <div className="category-item__body">
              <p>{moneySum}</p>
              <Button
                title="Edit"
                handleClick={this.toggleEditForm} />
              <Button
                title="Delete"
                subClass="err"
                handleClick={() => deleteCategory(id)} />
            </div>
          }
          {spendings && spendings.length > 0 &&
            <SpendingList spendings={spendings} />
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
  spendings: PropTypes.arrayOf(PropTypes.object),
  updateCategory: PropTypes.func.isRequired,
  deleteCategory: PropTypes.func.isRequired
};

export default CategoryItem;
