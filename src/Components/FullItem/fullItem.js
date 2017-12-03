import React, { Component } from 'react';
import './fullItem.css';
import ReactDisqusComments from 'react-disqus-comments';





export class FullItem extends Component {
    componentDidMount() {

        this.refs.body.innerHTML =
            this.props.item.body//.split(' ', 36).join(' ') + ' ...';
    }

    getIdentifier() {
        let ident = "item/" + this.props.id
        console.log(ident)
        return ident;
    }


    render() {

        return (

            <div className="fullItemContainer">
                <div className="category">
                    {this.props.item.category}
                </div>
                <div className="title">
                    {this.props.item.title}
                </div>

                <div className="metrics">
                    <div className='dateStamp'>
                        {new Date(this.props.item.date).toLocaleString('ru')}
                    </div>
                    <div className='author'>
                        {this.props.item.author}
                    </div>
                </div>
                <div className='imgContainer'>
                    <img src={this.props.item.avatar} alt="item" />
                </div>
                <div className='bodyContainer'>
                    <div ref='body' />
                </div>

                <ReactDisqusComments
                    shortname="break-news"
                    identifier={"item/" + this.props.item.id}
                    url="http://news-break.ml/newsApp/#"

                    onNewComment={this.handleNewComment} />

            </div>
        )
    }


}
/*


export const FullItem1 = ({ item }) => {


    return (

        <div className="fullItemContainer">
            <div className="category">
                {item.category}
            </div>
            <div className="title">
                {item.title}
            </div>

            <div className="metrics">
                <div className='dateStamp'>
                    {new Date(item.date).toLocaleString('ru')}
                </div>
                <div className='author'>
                    {item.author}
                </div>
            </div>
            <div className='imgContainer'>
                <img src={item.avatar} alt="item" />
            </div>
            <div className='bodyContainer'>
                <div ref='body'/>
            </div>



        </div>
    )
}

*/