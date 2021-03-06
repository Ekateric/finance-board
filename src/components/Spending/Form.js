import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import './Form.scss';

const SpendingForm = (props) => {
  const {data, handleSubmit, handleChange, handleCancelClick} = props;
  const {id, descr, money, isCash, validation} = data;

  return (
    <form 
      className="spending-form"
      onSubmit={handleSubmit}>
      <Input 
        id={id}
        name="descr"
        value={descr}
        placeholder="Enter description"
        subClass={["w100", "mb"]}
        handleChange={handleChange} />
      <Input 
        id={id}
        name="money"
        value={money}
        placeholder="Enter money value"
        subClass={["w100", "mb"]}
        handleChange={handleChange} />
      <label className="spending-form__label">
        <input
          className="spending-form__checkbox"
          type="checkbox" 
          id={id}
          name="isCash"
          checked={isCash}
          onChange={handleChange} />
        <span className="spending-form__checkbox-name">cash payment</span>  
      </label>  
      <Button
        title="Save"
        type="submit"
        subClass="info"
        disabled={!validation.form.isValid} />
      <Button
        title="Cancel"
        subClass="warn"
        handleClick={handleCancelClick} />
    </form>
  );
}

SpendingForm.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    descr: PropTypes.string.isRequired,
    money: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    isCash: PropTypes.bool,
    validation: PropTypes.object.isRequired
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCancelClick: PropTypes.func.isRequired
};

export default SpendingForm;
