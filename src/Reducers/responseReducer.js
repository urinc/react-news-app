import {  SET_RESPONSE } from '../Constants/item'


export const response = function(state = false, action) {
 
  switch (action.type) {
    case SET_RESPONSE:
      {
       
        return action.payload;
      }
   
    default:
      return state;
  }
};

