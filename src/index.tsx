import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router';
import { apiInstance } from '@lib/api';
import API_PATH from '~/constants/path';

apiInstance
  .get({
    url: API_PATH.I18N_KO,
  })
  .then((result) => {
    console.log('i18n', result);
    ReactDOM.render(<AppRouter />, document.getElementById('root'));
  });
