import React, { Component } from 'react';
import List from '../../Components/List/list';
import { getItems } from '../../Actions/itemActionCreater';
import SidePanel from '../../Containers/SidePanel/sidePanel';
import './news.css'

class News extends Component {

    cssClass = 'rectangle';
    filter(arr) {
        return arr.filter((element) => {
            if (element.category === 'news') {
                return true;
            }
            else return false;
        })
    }

    render() {
        return (
            <div className='newsContainer'>
                <div className='list'>
                    <List
                        filter={this.filter}
                        getItems={()=>{return getItems('news')}}
                        cssClass={this.cssClass} />
                </div>
                <div className='sidePanel'>
                    <SidePanel />
                </div>
            </div>
        );
    }
}

export default News