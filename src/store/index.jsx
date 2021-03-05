import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer/reducer';

const rootReducer = combineReducers({ tokenReducer });

export default rootReducer;
