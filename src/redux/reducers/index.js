import { combineReducers } from 'redux';
import products from './products';
import theme from './theme';

export const rootReducer = combineReducers({
  products,
  theme,
});
