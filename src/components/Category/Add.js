import React, {Component} from 'react';
import CategoryForm from './Form';
import Button from '../../UI/Button';

const CategoryAddButton = (props) => {
  return (
    <Button
      title="Add new category"
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

    if (isCategoryAdd) {
      return (
        <div>
          <CategoryForm 
            handleSubmit={this.handleSubmit} />
          <Button
            title='Cancel'
            subClass='warn'
            handleClick={this.handleClick} />
        </div>
      );
    }

    return <CategoryAddButton handleClick={this.handleClick} />;
  }
}

export default CategoryAdd;
