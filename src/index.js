import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { legacy_createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/root-reducer'

const store = legacy_createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

