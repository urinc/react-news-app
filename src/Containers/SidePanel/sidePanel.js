import React, { Component } from 'react';
import List from '../../Components/List/list';
import { getItems } from '../../Actions/itemActionCreater';
import './sidePanel.css'

class SidePanel extends Component {

    filter(arr) {
        return arr
            .concat([])
            .sort(function (a, b) {
                if (a.commentCounter > b.commentCounter) {
                    return -1;
                }
                if (a.commentCounter < b.commentCounter) {
                    return 1;
                }
                return 0;
            })
            .slice(0, 10)
            .reverse()
    }

    render() {
        return (
            <div className='sidePanel'>
                <div className='titleTop'>
                    Top commented :
                </div>

                <List
                    filter={this.filter}
                    getItems={()=>{return getItems('blog')}}
                    cssClass='small'
                />
            </div>
        );
    }
}

export default SidePanel