import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import './showcase.css';

export class Showcase extends Component {

    render() {
        let items = this.props.stores.items

        let length = items.length;
        return (
            <div className='showcaseContainer' >
                <div className='scContainer'>
                    {items
                        .slice(length - 5, length)
                        .map((el, index) =>
                            <div id={'sc' + index} key={index}>
                                <Link to={'/item/' + el.id}>
                                    <div className='title'>
                                        {el.title}
                                    </div>
                                    <img src={el.avatar} alt="Showcase" />
                                </Link>
                            </div>)
                    }
                </div>
            </div>
        )
    }
}
export default connect(
    (state) => ({
        stores: state
    }))(Showcase)
