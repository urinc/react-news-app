import {
  fetchRangeItems,
  fetchTimeRangeItems,
  fetchItem,
  fetchItems,
} from '../Store/FireBase/fireBase';
import {
  ADD_ITEMS,
  ADD_COMMENTS_COUNTER
} from '../Constants/item';
import { responseActionCreator } from './responseActionCreator'


export const itemsActionCreator = function (item) {
  return {
    type: ADD_ITEMS,
    payload: item
  }
}

export const commentActionCreator = function (id, counter) {
  return {
    type: ADD_COMMENTS_COUNTER,
    payload: {
      id: id,
      counter: counter
    }
  }
}

export const getRangeItems = () => {
  return (dispatch) => {
    fetchRangeItems(item => {
      dispatch(itemsActionCreator(item));
      dispatch(responseActionCreator(false));
    })
  }
}

export const getItems = (category, startAt, endAt) => {
  return (dispatch) => {
    fetchItems(category, item => {
      dispatch(itemsActionCreator(item));
      dispatch(responseActionCreator(false));
    })
  }
}

export const getItem = (id) => {
  return (dispatch) => {
    fetchItem(id, item => {
      dispatch(itemsActionCreator(item));
      dispatch(responseActionCreator(false));
    })
  }
}

export const getTimeRangeItem = (startAt, endAt) => {
  return (dispatch) => {
    // fetchItems("video", item => {
    fetchTimeRangeItems(startAt, endAt, item => {
      dispatch(itemsActionCreator(item));
      dispatch(responseActionCreator(false));
    })
  }
}










