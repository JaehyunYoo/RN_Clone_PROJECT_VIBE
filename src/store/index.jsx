import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer/reducer';
import homeReducer from './homeReducer/reducer';
const rootReducer = combineReducers({ homeReducer, tokenReducer });

export default rootReducer;
