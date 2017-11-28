import firebase from 'firebase/app';
import 'firebase/database';
import { store } from '../store';

let fb =null;
let initFetch = true;
let lastItems = 25;
let rangeItems = 20;

const config = {
    apiKey: "AIzaSyCxo-jPgbTXS8JoZe1vRyaS2NOxP3N7--8",
    authDomain: "newsapp-3d4ec.firebaseapp.com",
    databaseURL: "https://newsapp-3d4ec.firebaseio.com",
    projectId: "newsapp-3d4ec",
    storageBucket: "newsapp-3d4ec.appspot.com",
    messagingSenderId: "286085622833"
}
export const fetchItems = function (category, callback) {
    fb.orderByChild('category')
        .equalTo(category)
        .limitToLast(getLastCategoryIndex(category))
        .on('child_added', snapshot => {
            return callback(snapshot.val());
        })
}
function getLastCategoryIndex(category) {
    let length = store.getState().items
        .filter((element) => {
            if (element.category === category) return true;
            else return false;
        }).length
    if (length >= lastItems) return length + lastItems;
    return lastItems;
}

function getMinId() {
    let items = store.getState().items;
    let maxId = items.length - 1;
    for (let i = maxId; i >= 0; i--) {
        if (!items[i]) {
            return i;
        }
    }
}
export const fetchRangeItems = function (callback) {
    if (initFetch) {
        fetchInitialItems(callback);
        initFetch = false;
        return;
    }
    let minId = getMinId();
    if (minId > 1) {
        fb.orderByChild('id')
            .startAt(minId - rangeItems)
            .endAt(minId + 1)
            .on('child_added', snapshot =>
                callback(snapshot.val()))
    }
}

function fetchInitialItems(callback) {
    fb.limitToLast(lastItems)
        .on('child_added', snapshot => {
            return callback(snapshot.val())
        });
}

export const fetchItem = function (id, callback) {
    fb.orderByChild('id')
        .equalTo(+id)
        .on('child_added', snapshot => callback(snapshot.val()))
}
export const fetchTimeRangeItems = function (startAt, endAt, callback) {
            fb.orderByChild('date')
            .startAt(startAt)
             
            .endAt(endAt)
            .on('child_added', snapshot =>              
                callback(snapshot.val())                
                )    
}
export const addArticle = art=>{
    fb.push(art)
}
function fbConnect() {
    fb = firebase
        .initializeApp(config)
        .database()
        .ref("/items")
}
(() =>fbConnect())()









