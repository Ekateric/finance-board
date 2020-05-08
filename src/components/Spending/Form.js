import React, {Component} from 'react';
import Button from '../../UI/Button';
import Input from '../../UI/Input';

const DEFAULT_FORM_ID = 'add-spending';

class SpendingForm extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      id: typeof this.props.id !== 'undefined' ? this.props.id.toString() : DEFAULT_FORM_ID,
      descr: this.props.descr || '',
      money: this.props.money || '',
      cash: !!this.props.cash
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
    const {id, descr, money, cash} = this.state;

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
            name="cash"
            checked={cash}
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

export default SpendingForm;
