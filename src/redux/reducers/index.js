import { combineReducers } from 'redux';
import initialReducer from './initialReducer';

const reducers = {
  initialReducer,
}

export default combineReducers(
  reducers
)
