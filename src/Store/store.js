import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../Reducers/index';
import { comCounter } from './CommentCounter/comCount';



const initState ={
  items : [],
  coordY : 0,
  response: false
// users :[],
// spinner : false 
}


export const store = createStore(
  reducer,
  initState,
  applyMiddleware(thunk));


store.subscribe(()=>comCounter(store.getState()))
//store.subscribe(()=>console.log(store.getState()))