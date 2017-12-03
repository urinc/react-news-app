import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Header} from '../Components/Header/header';
import Home from '../Components/Home/home';
import Video from '../Components/Video/video';
import News from '../Components/News/news';
import Blogs from '../Components/Blogs/blogs';
import Calend from '../Containers/Calendar/calendar';
import ItemDetail from '../Containers/ItemDetail/itemDetail';
import Add from '../Containers/Add/add.jsx';
import './App.css';


class App extends Component {

  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <Header />
          </div>

          <Route exact path="/" component={Home} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/video" component={Video} />
          <Route path="/news" component={News} />
          <Route path="/calendar" component={Calend} />
          <Route path="/add" component={Add} />
          <Route path="/item/:id" component={ItemDetail} />

        </div>

      </div>
    );
  }
}

export default App
