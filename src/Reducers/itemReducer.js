import { ADD_ITEMS } from '../Constants/item';
import { ADD_COMMENTS_COUNTER } from '../Constants/item';

export const items = function (state = [], action) {
  switch (action.type) {
    case ADD_ITEMS:

      let id = action.payload.id;

      if (state[id]) {
        return state;
      }

      let arr = Object.assign([], state);
      arr[id] = (action.payload);
      return arr;



    case ADD_COMMENTS_COUNTER:
      {
        let id = action.payload.id;
        let counter = action.payload.counter;
        let arr = Object.assign([], state);
        arr[id].commentCounter = (counter);
        return arr;
      }

    default:
      return state;
  }
};





