import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../UI/Link';
import SpendingFormContainer from './FormContainer';
import './Item.scss';

const SpendingItem = (props) => {
  const {data, editHandlers} = props;
  const {id, descr, money, isCash, subClass, isEdit} = data;

  return (
    <li className={`spending-item ${subClass}`}>
      {isEdit
      ? <>
          <p className="spending-item__form-intro">Changing waste:</p>
          <SpendingFormContainer
            id={id}
            descr={descr}
            money={money}
            isCash={isCash}
            handleSubmit={editHandlers.formSubmit}
            handleCancelClick={editHandlers.toggleForm} />
        </> 
      : <>
          <div className="spending-item__columns">
            <p className="spending-item__descr">{descr}</p>
            <p className="spending-item__value">
              {money}{isCash ? ', by cash' : ''}
            </p>
          </div>
          <div className="spending-item__links">
            <Link
              element="button"
              title="Edit"
              subClass="sm"
              handleClick={editHandlers.toggleForm}
            />
            <Link
              element="button"
              title="Delete"
              subClass={["sm", "err"]}
              handleClick={editHandlers.deleteClick} />
          </div>
        </>
      }
    </li>
  )
}

SpendingItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    descr: PropTypes.string.isRequired,
    money: PropTypes.number.isRequired,
    isCash: PropTypes.bool,
    subClass: PropTypes.string,
    isEdit: PropTypes.bool.isRequired
  }).isRequired,
  editHandlers: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default SpendingItem;
