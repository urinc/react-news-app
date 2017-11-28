import { combineReducers } from 'redux';
import { items } from './itemReducer';
import { coordY } from './coordReducer';
import { response } from './responseReducer';

export default combineReducers({
   // routing: routerReducer,
    items,
    coordY,
    response

})

