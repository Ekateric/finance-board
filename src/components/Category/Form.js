import React, {Component} from 'react';
import Button from '../../UI/Button';

const errorText = {
  TITLE: 'There should be a title',
  MONEY_SUM: 'Sum must be numeric'
};

const isFilledInput = (value) => {
  return typeof value !== `undefined`
    && value !== null
    && value.toString().replace(/^\s+|\s+$/g, ``).length > 0;
};

class CategoryForm extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      title: this.props.title || '',
      moneySum: this.props.moneySum || '',
      validation: {
        title: {
          isValid: !!this.props.title,
          error: ''
        },
        moneySum: {
          isValid: !!this.props.moneySum,
          error: ''
        },
        form: {
          isValid: false
        }
      }
    };

    this.state = this.initialState;
  }

  validateInput = (inputName, value) => {
    let isValid = false;
    let error = '';

    switch (inputName) {
      case 'title':
        isValid = isFilledInput(value);
        error = isValid ? '' : errorText.TITLE;
        break;

      case 'moneySum':
        isValid = isFilledInput(value) && !isNaN(value);
        error = isValid ? '' : errorText.MONEY_SUM;
        break;

      default:
        break;
    }

    const validation = {...this.state.validation};

    validation[inputName] = {
      ...validation[inputName],
      ...{
        isValid: isValid,
        error: error
      }
    };

    this.setState({
      validation: validation
    }, this.validateForm);
  }

  validateForm = () => {
    const validation = {...this.state.validation};
    let isValidForm = true;

    for (let inputName in validation) {
      if (inputName !== 'form') {
        if (!validation[inputName].isValid) {
          isValidForm = false;
          break;
        }
      }
    }

    validation.form.isValid = isValidForm;

    this.setState({
      validation: validation
    });
  }

  handleChange = (evt) => {
    let {name, value} = evt.target;

    this.setState({
      [name]: value
    }, () => this.validateInput(name, value));
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  componentDidMount() {
    this.validateForm();
  }

  render() {
    const {title, moneySum, validation} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter title" 
          name="title"
          value={title}
          onChange={this.handleChange} />
        <input 
          type="text" 
          placeholder="Enter money value" 
          name="moneySum"
          value={moneySum}
          onChange={this.handleChange} />
        <Button
          title="Save"
          type="submit"
          disabled={!validation.form.isValid} />
      </form>
    );
  }
}

export default CategoryForm;
