import React, {Component} from 'react';

import { View, Text } from "react-native";

interface Props {}

export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Invoice Application</Text>
      </View>
    );
  }
}