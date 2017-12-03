import React, { Component } from 'react';
import List from '../List/list';
import { getItems } from '../../Actions/itemActionCreater';
import SidePanel from '../../Containers/SidePanel/sidePanel';
import './video.css'

class Video extends Component {
    cssClass = 'square';

    filter(arr) {
        return arr
            .filter((element) => {
                if (element.category === 'video') {
                    return true;
                }
                else return false;
            })
    }
        render() {

        return (
            <div className='videoContainer'>
                <div className='list' >                  
                    <List
                        filter={this.filter}
                        getItems={() => getItems('video')}
                        cssClass={this.cssClass} />
                </div>
                <div className='sidePanel'>
                    <SidePanel />
                </div>
            </div>

        );
    }
}
export default Video 