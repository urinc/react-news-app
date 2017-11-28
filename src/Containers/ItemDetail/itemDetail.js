import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItem } from '../../Actions/itemActionCreater';
import { FullItem } from '../../Components/FullItem/fullItem';
import { Spinner } from '../../Components/Spinner/spinner';
import Sidepanel from '../SidePanel/sidePanel'
import './itemDetail.css';

class ItemDetail extends Component {
 
    id = this.props.match.params.id;

    componentWillMount() {
        window.scrollTo(0, 0);
        if (!this.props.store.items[this.id]) {
            this.props.onGetItems(this.id)
        }
    }

    render() {

        if (this.props.store.items[this.id]) {

            return (
                <div className='itemDetailContainer'>
                    <div className='fullItem'>
                        <FullItem item={this.props.store.items[this.id]} />
                    </div>
                    <div className='sidePanel' >
                        <Sidepanel />
                    </div>
                </div>

            )
        }

        else {
            return (<Spinner>loading...</Spinner>)
        }
    }
}

export default connect(
    (state) => ({
        store: state
    }),
    dispatch => ({
        onGetItems: (id) => dispatch(getItem(id)),
    }))(ItemDetail)

// (<div>loading...</div>)