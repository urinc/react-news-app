import { SET_COORDS } from '../Constants/item';




export const coordYActionCreator = function (coord) {

  return {
    type: SET_COORDS,
    payload: coord
  }
}
