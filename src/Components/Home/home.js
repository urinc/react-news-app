import React, { Component } from 'react';
import List from '../../Components/List/list';
import  Showcase  from '../../Containers/Showcase/showcase';
import SidePanel from '../../Containers/SidePanel/sidePanel';
import { getRangeItems } from '../../Actions/itemActionCreater';

import './home.css'

class Home extends Component {

  filter(arr) {
   return arr.slice(0, arr.length - 5)
  }

  render() {    
    return (
      <div className='homeContiner'>
        <div className='showcaseContainer'>
          <Showcase />
        </div>
      <div className='list'>
          <List
            filter={this.filter}        
            getItems={getRangeItems}
            cssClass='rectangle'          
          />
        </div>
        <div className='sidePanel'>
        <SidePanel />
        </div>
      </div>
    );
  }
}
export default Home
