import React, {Component} from 'react';
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import { HomeScreen } from "./home";

interface Props {}

const appNavigator = createBottomTabNavigator({
  Home: HomeScreen
});

const AppNavigator = createAppContainer(appNavigator);

export default class App extends Component<Props> {
  render() {
    return (
      <AppNavigator />
    );
  }
}