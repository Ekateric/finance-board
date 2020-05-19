import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CategoryForm from './Form';
import Button from '../../UI/Button';
import './Add.scss';

const CategoryAddButton = (props) => {
  return (
    <Button
      title="Add new category"
      subClass={["huge", "info"]}
      handleClick={props.handleClick} />
  )
}

CategoryAddButton.propTypes = {
  handleClick: PropTypes.func.isRequired
};

class CategoryAdd extends Component {
  handleClick = (evt) => {
    evt.preventDefault();
    this.props.toggleCategoriesAddForm();
  }

  handleSubmit = (newCategory) => {
    this.props.addCategory(newCategory);
    this.props.toggleCategoriesAddForm();
  }

  render() {
    const {isCategoryAdd} = this.props;

    if (isCategoryAdd) {
      return (
        <div className="category-add">
          <h3 className="category-add__title">New Category</h3>
          <CategoryForm 
            handleSubmit={this.handleSubmit}
            handleCancelClick={this.handleClick} />
        </div>
      );
    }

    return <CategoryAddButton handleClick={this.handleClick} />;
  }
}

CategoryAdd.propTypes = {
  isCategoryAdd: PropTypes.bool.isRequired,
  addCategory: PropTypes.func.isRequired,
  toggleCategoriesAddForm: PropTypes.func.isRequired
};

export default CategoryAdd;
