import React, {Component} from 'react';

import { AppNavigator } from "./AppNavigator";

interface Props {}

export default class App extends Component<Props> {
  render() {
    return (
      <AppNavigator></AppNavigator>
    );
  }
}