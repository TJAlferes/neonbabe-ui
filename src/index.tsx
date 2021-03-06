import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import './index.css';
import App from './App.tsx';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(
  app,
  document.getElementById('root') as HTMLElement
);