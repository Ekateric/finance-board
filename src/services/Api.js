const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

class Api {
  constructor(base) {
    this._base = base;
  }

  getAll() {
    return Promise.all([this.getCategories(), this.getSpendings()]);  
  }

  getCategories() {
    return this._load('categories')
      .then((response) => response.json())
  }

  getSpendings() {
    return this._load('spendings')
      .then((response) => response.json())
  }

  _load(url) {
    return fetch(`${this._base}/${url}.json`)
      .then(checkStatus)
      .catch((err) => {
        throw err;
      });
  }
}

export default Api;
