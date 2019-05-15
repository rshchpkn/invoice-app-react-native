import React, {Component} from 'react';
import { Provider } from 'react-redux';

import { store } from "../store";

import { AppNavigator } from "./AppNavigator";

interface Props {}

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}