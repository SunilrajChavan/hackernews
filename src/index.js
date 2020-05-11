import React from 'react';
import { render }  from 'react-dom';
// import '../src/styles/styles.css';
import { App } from '../src/components/app';
import { Provider } from 'react-redux';
import GlobalStyles from './styles/globals'
import configureStore from './store'

const renderApp = () => {
  const initialState = {};
  const store = configureStore(initialState);

  store.dispatch({
    type: '@hnClone/@@init'
  });

  render(
    <Provider store={store}>
      <div>
        <GlobalStyles />
        <App />
      </div>
    </Provider>, document.getElementById('root')
  );
};

renderApp();
