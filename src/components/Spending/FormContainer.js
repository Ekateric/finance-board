import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SpendingForm from './Form';

const DEFAULT_FORM_ID = 'add-spending';

class SpendingFormContainer extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      id: this.props.id.toString(),
      descr: this.props.descr,
      money: this.props.money,
      isCash: this.props.isCash
    }

    this.state = this.initialState;
  }

  handleChange = (evt) => {
    const target = evt.target;
    const {name, type, value, checked} = target;

    this.setState({
      [name]: type === 'checkbox' ? checked : value
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.handleSubmit({
      descr: this.state.descr,
      money: Number(this.state.money),
      isCash: this.props.isCash
    });
    this.setState(this.initialState);
  }

  render() {
    return <SpendingForm
      data={this.state}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit} />
  }
}

SpendingFormContainer.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  descr: PropTypes.string,
  money: PropTypes.number,
  isCash: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired
};

SpendingFormContainer.defaultProps = {
  id: DEFAULT_FORM_ID,
  descr: '',
  money: 0,
  isCash: false
};

export default SpendingFormContainer;
