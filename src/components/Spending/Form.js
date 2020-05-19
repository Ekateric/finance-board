import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../../UI/Button';
import Input from '../../UI/Input';

const DEFAULT_FORM_ID = 'add-spending';

class SpendingForm extends Component {
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

  }

  render() {
    const {id, descr, money, isCash} = this.state;

    return (
      <form 
        className="spending-form"
        onSubmit={this.handleSubmit}>
        <Input 
          id={id}
          name="descr"
          value={descr}
          placeholder="Enter description"
          subClass={["w100", "mb"]}
          handleChange={this.handleChange} />
        <Input 
          id={id}
          name="money"
          value={money}
          placeholder="Enter money value"
          subClass={["w100", "mb"]}
          handleChange={this.handleChange} />
        <label>
          <input
            type="checkbox" 
            id={id}
            name="isCash"
            checked={isCash}
            onChange={this.handleChange} />
          <span>cash payment</span>  
        </label>  
        <Button
          title="Save"
          type="submit"
          subClass="info" />
        <Button
          title="Cancel"
          subClass="warn" />
      </form>
    );
  }
}

SpendingForm.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  descr: PropTypes.string.isRequired,
  money: PropTypes.number.isRequired,
  isCash: PropTypes.bool
};

SpendingForm.defaultProps = {
  id: DEFAULT_FORM_ID,
  descr: '',
  money: 0,
  isCash: false
};

export default SpendingForm;
