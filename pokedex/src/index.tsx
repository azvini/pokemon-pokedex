import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List/List'
import { Provider } from 'react-redux'
import { store } from './components/List/reducer/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><List /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
