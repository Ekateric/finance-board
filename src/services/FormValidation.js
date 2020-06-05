class FormValidation {
  constructor(form) {
    this._form = form;
  }

  isFilledInput = (value) => {
    return typeof value !== 'undefined'
    && value !== null
    && value.toString().replace(/^\s+|\s+$/g, ``).length > 0;
  }

  validateInput = (type, value) => {
    switch (type) {
      case 'text':
        return this.isFilledInput(value);

      case 'num':
        return this.isFilledInput(value) && !isNaN(value);

      default:
        return true;
    }
  }

  update = (formItems) => {
    this._form = this._validateInputs(formItems);

    this._form.form = {};
    this._form.form.isValid = this._validateForm();

    return this._form;
  }

  _validateInputs = (formItems) => {
    const _form = {...this._form};
    
    for (let inputName in formItems) {
      if (Object.prototype.hasOwnProperty.call(_form, inputName)) {
        _form[inputName] = {
          ..._form[inputName],
          ...{
            isValid: this.validateInput(_form[inputName].type, formItems[inputName])
          }
        };
      }
    }

    return _form;
  }

  _validateForm = () => {
    let formItems = {...this._form};
    let isValidForm = true;

    for (let inputName in formItems) {
      if (inputName !== 'form') {
        if (!formItems[inputName].isValid) {
          isValidForm = false;
          break;
        }
      }
    }

    return isValidForm;
  }
}

export default FormValidation;
