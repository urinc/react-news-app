import {  SET_RESPONSE } from '../Constants/item'


export const responseActionCreator = function (response) {

  return {
    type: SET_RESPONSE,
    payload: response
  }
}
