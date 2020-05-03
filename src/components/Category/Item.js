import React, {Component} from 'react';
import Button from '../../UI/Button';
import CategoryForm from '../Category/Form';
import './Item.scss';

class CategoryItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      title: this.props.title,
      moneySum: this.props.moneySum,
      isEdit: false
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

  render() {
    const {id, title, moneySum} = this.state;
    const {deleteCategory} = this.props;

    if (this.state.isEdit) {
      return (
        <li className="category-item">
          <CategoryForm 
            title={title}
            moneySum={moneySum}
            handleSubmit={this.handleSubmit}
            handleCancelClick={this.toggleEditForm} />
        </li>
      );
    }

    return (
      <li className="category-item">
        <h3 className="category-item__title">{title}</h3>
        <div className="category-item__body">  
          <p>{moneySum}</p>
          <Button
            title="Edit"
            handleClick={this.toggleEditForm} />
          <Button
            title="Delete"
            subClass="err"
            handleClick={() => deleteCategory(id)} />
        </div>
      </li>
    );
  }
}

export default CategoryItem;
