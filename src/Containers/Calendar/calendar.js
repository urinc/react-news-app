import React, { Component } from 'react';
import List from '../../Components/List/list';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { connect } from 'react-redux';
import {
    getItems,
    getTimeRangeItem
} from '../../Actions/itemActionCreater';
import 'react-datepicker/dist/react-datepicker.css';
import './calendar.css'


class Calend extends Component {
    cssClass = 'rectangle';
    state = {
        startDate: moment(),
        endDate: moment(),
        searching: false,
    };

    handleChangeFrom = date => {
        this.setState({ startDate: date });
    }

    handleChangeTo = date => {
        this.setState({ endDate: date });
    }

    filter = (arr) => {
        return arr
            .filter((element) => {
                if ((this.state.startDate.format('x')) < element.date
                    && element.date < this.state.endDate.format('x')) {
                    return true;
                }
                else return false;
            })
    }

    search = () => {
        this.props.onGetItems(
            getTimeRangeItem(
                +this.state.startDate.format('x'),
                +this.state.endDate.format('x')
            )
        );
        this.setState({ searching: true })
    }


    render() {
        return (
            <div className='calendarContainer'>
                <h1 >Chose time interval</h1>
               <span>From date :</span>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChangeFrom} />
                    <span>To date :</span>
                <DatePicker
                    selected={this.state.endDate}
                    onChange={this.handleChangeTo} />
                <button onClick={this.search} >Search</button>

                {this.state.searching ?
                    <div className='list'>
                        <List
                            filter={this.filter}
                            getItems={() => getItems('vo')}
                            cssClass={this.cssClass} />
                    </div>
                    : null}

            </div>
        );
    }
}

export default connect(
    (state) => ({
        store: state
    }),
    dispatch => ({
        onGetItems: (func) => dispatch(func),
        //   onGetCoord: (coord) => dispatch(coordYActionCreator(coord)),
        // onGetResponse: (res) => dispatch(responseActionCreator(res)),
    }))(Calend)
