import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SpendingForm from './Form';
import FormValidation from '../../services/FormValidation';

const errorText = {
  DESCR: 'There should be a description',
  MONEY: 'Money value must be numeric'
};

const DEFAULT_FORM_ID = 'add-spending';

class SpendingFormContainer extends Component {
  constructor(props) {
    super(props);

    this.formValidation = new FormValidation({
      descr: {
        type: 'text',
        error: errorText.DESCR
      },
      money: {
        type: 'num',
        error: errorText.MONEY
      }
    });

    this.initialState = {
      id: this.props.id.toString(),
      descr: this.props.descr,
      money: this.props.money,
      isCash: this.props.isCash,
      validation: this.formValidation.update({
        descr: this.props.descr,
        money: this.props.money
      })
    }

    this.state = this.initialState;
  }

  validate = (inputName, value) => {
    const validation = this.formValidation.update({[inputName]: value});

    this.setState({
      validation: validation
    });
  }

  handleChange = (evt) => {
    const target = evt.target;
    const {name, type, value, checked} = target;

    this.setState({
      [name]: type === 'checkbox' ? checked : value
    }, () => {
      if (name === 'descr' || name === 'money') {
        this.validate(name, value)
      }
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

  handleCancelClick = (evt) => {
    this.props.handleCancelClick(evt);
  }

  render() {
    return <SpendingForm
      data={this.state}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      handleCancelClick={this.handleCancelClick} />
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
  handleSubmit: PropTypes.func.isRequired,
  handleCancelClick: PropTypes.func.isRequired
};

SpendingFormContainer.defaultProps = {
  id: DEFAULT_FORM_ID,
  descr: '',
  money: 0,
  isCash: false
};

export default SpendingFormContainer;
