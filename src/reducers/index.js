import { combineReducers } from 'redux';
import organisationReducer from './organisationReducer';

export default combineReducers({
    organisation:organisationReducer
});