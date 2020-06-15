import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './Item';

const addSpendingText = {
  LIST: '+ spending list',
  ITEM: '+ spending item'
};

class CategoryItemContainer extends Component {
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

  handleDeleteClick = () => {
    this.props.categoryHandlers.delete(this.state.id)
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
    const {spendings, spendingsData} = this.props;
    const addSpendingButtonText = spendings && spendings.length > 0 
    ? addSpendingText.ITEM 
    : addSpendingText.LIST;
    const editHandlers = {
      toggleForm: this.toggleEditForm,
      formSubmit: this.handleSubmit,
      deleteClick: this.handleDeleteClick
    };
    const spendingHandlers = {
      toggleForm: this.toggleAddSpendingForm,
      add: this.addSpending
    };

    return (
      <CategoryItem
        data={this.state}
        spendings={spendings}
        spendingsData={spendingsData}
        addSpendingButtonText={addSpendingButtonText}
        editHandlers={editHandlers}
        spendingHandlers={spendingHandlers}
      />
    );
  }
}

CategoryItemContainer.propTypes = {
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

export default CategoryItemContainer;
