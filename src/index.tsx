import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router';
import { apiInstance } from '@lib/api';

apiInstance
  .get({
    url: '/static/ko.json',
  })
  .then((result) => {
    console.log('i18n', result);
    ReactDOM.render(<AppRouter />, document.getElementById('root'));
  });
