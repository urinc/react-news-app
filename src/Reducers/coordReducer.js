import {  SET_COORDS } from '../Constants/item'


export const coordY = function(state = 0, action) {
 
  switch (action.type) {
    case SET_COORDS:
      {
       
        return action.payload;
      }
   
    default:
      return state;
  }
};

