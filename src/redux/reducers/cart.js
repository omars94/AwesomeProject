const initialState = {
  cart: [],
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      let item = state.cart.findIndex(i => i.id == action.payload.id);

      if (item > -1) {
        state.cart[item].quantity += 1;
        return JSON.parse(JSON.stringify({ ...state }));
      }
      action.payload.quantity = 1;
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_FROM_CART':
      let removeItem = state.cart.findIndex(i => i.id == action.payload.id);

      if (removeItem > -1 && state.cart[removeItem].quantity > 1) {
        state.cart[removeItem].quantity -= 1;
        return JSON.parse(JSON.stringify({ ...state }));
      } else {
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload.id),
        };
      }
    default:
      return state;
  }
}
