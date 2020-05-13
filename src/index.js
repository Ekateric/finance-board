import React from 'react';
import ReactDOM from 'react-dom';
import Api from './services/Api';
import './index.css';
import App from './App';

const API_BASE = './data/';
const api = new Api(API_BASE);

ReactDOM.render(<App api={api} />, document.getElementById('root'));

