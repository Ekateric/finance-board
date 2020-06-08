import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CategoryForm from './Form';
import FormValidation from '../../services/FormValidation';

const errorText = {
  TITLE: 'There should be a title',
  MONEY_SUM: 'Sum must be numeric'
};

const DEFAULT_FORM_ID = 'add';

class CategoryFormContainer extends Component {
  constructor(props) {
    super(props);

    this.formValidation = new FormValidation({
      title: {
        type: 'text',
        error: errorText.TITLE
      },
      moneySum: {
        type: 'num',
        error: errorText.MONEY_SUM
      }
    });
    
    this.initialState = {
      id: this.props.id.toString(),
      title: this.props.title,
      moneySum: this.props.moneySum,
      validation: this.formValidation.update({
        title: this.props.title,
        moneySum: this.props.moneySum
      })
    };

    this.state = this.initialState;
  }

  validate = (inputName, value) => {
    const validation = this.formValidation.update({[inputName]: value});

    this.setState({
      validation: validation
    });
  }

  handleChange = (evt) => {
    let {name, value} = evt.target;

    this.setState({
      [name]: value
    }, () => this.validate(name, value));
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.handleSubmit({
      title: this.state.title,
      moneySum: Number(this.state.moneySum)
    });
    this.setState(this.initialState);
  }

  handleCancelClick = (evt) => {
    this.props.handleCancelClick(evt);
  }

  render() {
    return <CategoryForm 
      data={this.state}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      handleCancelClick={this.handleCancelClick} />
  }
}

CategoryFormContainer.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  title: PropTypes.string,
  moneySum: PropTypes.number,
  handleSubmit: PropTypes.func.isRequired,
  handleCancelClick: PropTypes.func.isRequired
};

CategoryFormContainer.defaultProps = {
  id: DEFAULT_FORM_ID,
  title: '',
  moneySum: 0
};

export default CategoryFormContainer;
