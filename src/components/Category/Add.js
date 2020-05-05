import React, {Component} from 'react';
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
    let categoryAddContent;

    if (isCategoryAdd) {
      categoryAddContent = <CategoryForm 
        handleSubmit={this.handleSubmit}
        handleCancelClick={this.handleClick} />;
     
    } else {
      categoryAddContent = <CategoryAddButton handleClick={this.handleClick} />
    }

    return (
      <div className="category-add">{categoryAddContent}</div>
    );
  }
}

export default CategoryAdd;
