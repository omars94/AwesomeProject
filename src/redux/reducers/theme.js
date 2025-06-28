const initialState = {
  mode: 'light',
};

export default function theme(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, mode: state.mode === 'light' ? 'dark' : 'light' };
    case 'SET_THEME':
      return { ...state, mode: action.payload };
    default:
      return state;
  }
}
