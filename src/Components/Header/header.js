import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './header.css';

export class Header extends Component {
  state = {
    activeLink: false,
    color: 'red'
  }
  home = {
    path: '/',
    name: 'HOME'
  }
  news = {
    path: '/news',
    name: 'NEWS'
  }
  video = {
    path: '/video',
    name: 'VIDEO'
  }
  blogs = {
    path: '/blogs',
    name: 'BLOGS'
  }
  calendar = {
    path: '/calendar',
    name: 'CALENDAR'
  }
  
  add = {
    path: '/add',
    name: 'ADD'
  }

  sections = [this.home, this.news, this.video, this.blogs, this.calendar, this.add]
  stR = { color: 'red' }
  linkColor = { color: 'white' };
  activeLinkColor = { color: 'blue' };

  render() {
    return (
      <div>
        <div className='headerContainer'>
          <div className='linkContainer'>
            {
              this.sections.map((s, i) => <Link
                key={i}
                style={(i === this.state.activeLink) ? this.activeLinkColor : this.linkColor}
                className='link'
                to={s.path}
                onClick={() => this.setState({ activeLink: i })}
              >
                {s.name}
              </Link>)
            }


          </div>
        </div>


      </div>

    )

  }

}
/* 

()=>{
  (this.state.activeLink===i):
} */