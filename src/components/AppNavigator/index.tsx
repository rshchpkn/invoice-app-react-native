import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import { InvoiceNavigator } from "./InvoiceNavigator";
import { CustomerNavigator } from "./CustomerNavigator";
import { ProductNavigator } from "./ProductNavigator";

export enum AppTabs {
  Invoice = 'Invoice',
  Customer = 'Customer',
  Product = 'Product',
}

const Navigator = createBottomTabNavigator({
  [AppTabs.Invoice]: {
    screen: InvoiceNavigator,
    navigationOptions: {
      title: AppTabs.Invoice
    }
  },
  [AppTabs.Customer]: {
    screen: CustomerNavigator,
    navigationOptions: {
      title: AppTabs.Customer
    }
  },
  [AppTabs.Product]: {
    screen: ProductNavigator,
    navigationOptions: {
      title: AppTabs.Product
    }
  },
}, {
  initialRouteName: AppTabs.Invoice
});

const NavigatorContainer = createAppContainer(Navigator);

export const AppNavigator: React.FC = () => {
  return (
    <NavigatorContainer/>
  )
};
