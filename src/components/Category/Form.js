import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../UI/Button';
import Input from '../../UI/Input';

const CategoryForm = (props) => {
  const {data, handleChange, handleSubmit, handleCancelClick} = props;
  const {id, title, moneySum, disabled, validation} = data;

  return (
    <form
      className="category-form"
      onSubmit={handleSubmit}>
      <Input 
        id={id}
        name="title"
        value={title}
        placeholder="Enter title"
        subClass={["w100", "mb"]}
        disabled={disabled.title}
        handleChange={handleChange} />
      <Input 
        id={id}
        name="moneySum"
        value={moneySum}
        placeholder="Enter money value"
        subClass={["w100", "mb"]}
        disabled={disabled.moneySum}
        handleChange={handleChange} />
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

CategoryForm.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    title: PropTypes.string.isRequired,
    moneySum: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    disabled: PropTypes.object.isRequired,
    validation: PropTypes.object.isRequired
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCancelClick: PropTypes.func.isRequired
};

export default CategoryForm;
