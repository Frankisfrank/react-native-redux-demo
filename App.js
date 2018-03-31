import React, { Component } from 'react'
import {
  AppRegistry
} from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './src/redux/store/store'
import Employee from './src/components/Employee'
/**
 * get store
 */
const store = configureStore()
/**
 * entrance of app
 */
export default class Demo extends Component {
  //render view
  render() {
    return <Provider store={store}>
      <Employee />
    </Provider>
  }
}