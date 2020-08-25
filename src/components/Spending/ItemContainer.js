import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SpendingItem from './Item';

const subClasses = {
  NEGATIVE: 'spending-item_negative'
};

class SpendingItemContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isEdit: false
    };
  }

  toggleEditForm = () => {
    this.setState({
      isEdit: !this.state.isEdit
    });
  }

  handleSubmit = (newSpending) => {
    this.props.spendingHandlers.update({...newSpending, id: this.props.id}, this.props.categoryId);
    this.toggleEditForm();
  }

  handleDeleteClick = () => {
    this.props.spendingHandlers.delete(this.props.id, this.props.categoryId);
  }

  render() {
    const data = {
      id: this.props.id,
      descr: this.props.descr,
      money: this.props.money,
      isCash: this.props.isCash,
      subClass: this.props.money < 0 ? subClasses.NEGATIVE : '',
      isEdit: this.state.isEdit
    };
    const editHandlers = {
      toggleForm: this.toggleEditForm,
      formSubmit: this.handleSubmit,
      deleteClick: this.handleDeleteClick
    };

    return (
      <SpendingItem 
        data={data}
        editHandlers={editHandlers}
      />
    );
  }
}

SpendingItemContainer.propTypes = {
  categoryId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  descr: PropTypes.string.isRequired,
  money: PropTypes.number.isRequired,
  isCash: PropTypes.bool,
  spendingHandlers: PropTypes.objectOf(PropTypes.func).isRequired
};

export default SpendingItemContainer;
