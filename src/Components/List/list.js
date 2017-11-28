import React, { Component } from 'react';
import { Item } from '../Item/item';
import { connect } from 'react-redux';
import { responseActionCreator } from '../../Actions/responseActionCreator';
import { coordYActionCreator } from '../../Actions/coordActionCreator';
import { Spinner } from '../Spinner/spinner'

class List extends Component {
  componentDidMount() {
    if (this.props.cssClass !== 'small') {
      window.scrollTo(0, this.props.store.coordY);
      window.addEventListener('scroll', this.scrollHandler);
      if (this.scr.offsetTop < 600) {      
        this.getMoreItems()
      }
    }
  }

  componentWillUnmount() {
    this.props.onGetCoord(window.scrollY);
    window.removeEventListener('scroll', this.scrollHandler);
  }

  getMoreItems() {
    this.props.onGetResponse(true);
    this.props.onGetItems(
      this.props.getItems()

    );
  }

  scrollHandler = () => {
    if ((window.scrollY + window.innerHeight + 1200) >
      this.scr.offsetTop
      && (!this.props.store.response)) {
      this.getMoreItems();
    }
  }



  render() {
    
    let st={      
      position: 'absolute',
      top: '20%',
      left: '40%',      
    }
    return (
       <div >
        {(this.props.cssClass !== 'small'
       &&this.props.store.items.length===0
      )? 
      <div style={st}>
      <Spinner
      />
      </div >: null}
          <div >   {
            this.props.filter(this.props.store.items)
              .concat([]).reverse().map((element) =>
                <Item
                  key={element.id}
                  item={element}
                  cssClass={this.props.cssClass}
                />
              )}
            <div
              ref={(scr) => { this.scr = scr; }}
            >
            </div>
          </div>
        </div >
    )
  }
}

export default connect(
  (state) => ({
    store: state
  }),
  dispatch => ({
    onGetItems: (func) => dispatch(func),
    onGetCoord: (coord) => dispatch(coordYActionCreator(coord)),
    onGetResponse: (res) => dispatch(responseActionCreator(res)),
  }))(List)
