const initialState = {
  products: [],
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    default:
      return state;
  }
}
