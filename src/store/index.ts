import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

const rootReducer = combineReducers({
  invoices: () => {return null},
  customers: () => {return null},
  products: () => {return null},
});

export const store = createStore(
  rootReducer,
  devToolsEnhancer({}),
);