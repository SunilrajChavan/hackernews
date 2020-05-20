import React from 'react';
import { render }  from 'react-dom';
// import '../src/styles/styles.css';
import { App } from '../src/components/app';
import { Provider } from 'react-redux';
import configureStore from './store'

const renderApp = () => {
  const initialState = {};
  const store = configureStore(initialState);

  store.dispatch({
    type: 'SET_DATA'
  });

  render(
    <Provider store={store}>
      <div className="container">
        <App />
      </div>
    </Provider>, document.getElementById('root')
  );
};

renderApp();
