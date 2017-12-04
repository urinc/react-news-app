import { store } from '../store'
import { commentActionCreator } from '../../Actions/itemActionCreater';

export const comCounter = function (state) {
   disqWidgetCreate();
    let ar = state.items;
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] && ar[i].commentCounter === undefined) {
            ar[i].commentCounter = 0;
            addScriptCounter(i);
        }
    } 
}

function createComment(comment) {
    let id = comment.id.replace(/[^\d;]/g, '');
    let counter = comment.comments;
    store.dispatch(commentActionCreator(id, counter));
}

function addScriptCounter(id) {   
    let script = document.createElement('script');
    script.src = `https://break-news.disqus.com/count-data.js?1=item/` + id;
    script.async = true;
    script.type = 'text/javascript';
    document.head.appendChild(script);     
}

function disqWidgetCreate() {
    if (!window.DISQUSWIDGETS) {       
        window.DISQUSWIDGETS = {};
        window.DISQUSWIDGETS.displayCount = function (response) {
            if (response.counts.length > 0) {
                createComment(response.counts[0])
            }
        }
    }
}