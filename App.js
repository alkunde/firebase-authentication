import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import SwitchNavigator from './navigation/SwitchNavigator';
import reducer from './reducers'

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middleware);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SwitchNavigator />
      </Provider>
    )
  }
}