import { GET_TOKEN } from '../types';

const INITAL_STATE = '';

function reducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case GET_TOKEN:
      return (state = action.payload);
    default:
      return state;
  }
}
export default reducer;
