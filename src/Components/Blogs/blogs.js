import React, { Component } from 'react';
import List from '../List/list';
import { getItems } from '../../Actions/itemActionCreater';
import SidePanel from '../../Containers/SidePanel/sidePanel';
import './blog.css'


class Blogs extends Component {
    cssClass = 'square';
    filter(arr) {
        return arr.filter((element) => {
            if (element.category === 'blog') {
                return true;
            }
            else return false;
        })
    }

    render() {
        return (
            <div className='blogContainer'>
                <div className='list'>
                    <List
                        filter={this.filter}
                        getItems={() => getItems('blog') }
                        cssClass={this.cssClass} />
                </div>
                <div className='sidePanel'>
                    <SidePanel />
                </div>
            </div>
        );
    }
}

export default Blogs