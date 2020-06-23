import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './Item';

const subClasses = {
  NEGATIVE: 'category-item_negative'
};

class CategoryItemContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    this.props.categoryHandlers.update({...newCategory, id: this.props.id});
    this.toggleEditForm();
  }

  handleDeleteClick = () => {
    this.props.categoryHandlers.delete(this.props.id)
  }

  toggleAddSpendingForm = () => {
    this.setState({
      isSpendingAdd: !this.state.isSpendingAdd
    });
  }

  addSpending = (newSpending) => {
    this.props.spendingHandlers.add(newSpending, this.props.id);
  }

  render() {
    const {spendings, spendingsData} = this.props;
    const isEmptySpendings = !(spendings && spendings.length > 0);
    const data = {
      id: this.props.id,
      title: this.props.title,
      moneySum: this.props.moneySum,
      subClass: this.props.moneySum < 0 ? subClasses.NEGATIVE : '',
      isEdit: this.state.isEdit,
      isSpendingAdd: this.state.isSpendingAdd,
      isEmptySpendings: isEmptySpendings,
      disabledEdit: {
        title: false,
        moneySum: !isEmptySpendings
      }
    };
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
        data={data}
        spendings={spendings}
        spendingsData={spendingsData}
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
