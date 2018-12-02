import { combineReducers } from 'redux-immutable';
import { reducer as HomeReducer } from '../common/header/store';

export default combineReducers({
    header: HomeReducer
});