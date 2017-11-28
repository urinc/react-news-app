import { store } from './store';


export var minId = 0;



function getMinId(items) {
    let maxId = items.length - 1;
    for (let i = maxId; i >= 0; i--) {
        if (!items[i]) {
            minId = i;
            return;
        }
    }
}


//store.subscribe(() => getMinId(store.getState().items))

