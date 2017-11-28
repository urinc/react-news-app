import React from 'react';
import { Link } from 'react-router-dom'
import './item.css';

export const Item = ({ item, cssClass }) => {

  return (
    
    <div className={cssClass}>
      <div className="itemContainer">
        <div className="container">
          <Link to={'/item/' + item.id}>
            <img src={item.avatar} alt="item" />
          </Link>
          <div className="overlay">
            <div className="text"> Time to read: {Math.ceil(
              item.body.split(' ').length / 80)}  min </div>
          </div>
        </div>
        <div className='category'>
          {item.category}
        </div>
        <div className='title'>
          <Link to={'/item/' + item.id}>
            {item.title}
          </Link>
        </div>
        <div className="metrics">
          <div className='dateStamp'>
            {new Date(item.date).toLocaleString('ru')}
          </div>
          <div className='author'>
            {item.author}
          </div>
          <div className='votes' >
            {item.commentCounter}
          </div>
        </div>
        <div className="intro" >
          <div>
            {item.body
              .replace(/(<(\/?[^>]+)>)/g, '')
              .replace(/&laquo;/g, '"')
              .replace(/&raquo;/g, '"')
              .replace(/&ndash;/g, '-')
              .replace(/&nbsp;/g, ' ')
              .replace(/&rsquo;/g, "'")
              .replace(/&mdash;/g, '-')
              .split(' ', 36).join(' ') + ' ...'}
          </div>
        </div>
        <div className="clear">
        </div>
      </div>
    </div>
  )


}