import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import store from './reduxprocess/store'
import { Provider } from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
)