import { combineReducers } from 'redux';
import products from './products';
import theme from './theme';
import cart from './cart';

export const rootReducer = combineReducers({
  products,
  theme,
  cart,
});
