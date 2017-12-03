import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import { addArticle } from '../../Store/FireBase/fireBase';
import './add.css'
class Add extends Component {

    state = {
        title: '',
        avatarsName: '',
        autorsName: 'news',
        videoUrl: 'none',
        type: 'news',
        body: ''
    }

    arcticleBuilder = () => {
        let s = this.state
        let date = Date.now()
        let article = {
            author: s.autorsName,
            avatar: s.avatarsName,
            body: s.body,
            category: s.type,
            comments: 0,
            date,
            id: this.props.store.items.length,
            title: s.title,
            videoUrl: s.videoUrl || 'none',
            viewable: true
        }
        return article;
    }


    handleChange = ({ target }) => {
        let { type, value } = target;
        if (type === 'setupeditor') {
            let b = target.getContent();
            this.setState({ body: b })
            return
        }
        if (type === 'select-one') {
            this.setState({ type: value })
        }
        this.setState({ [target.name]: target.value })
    }

    render() {

        return <div  className='addContainer' >
            <h2>Add new article</h2>
            <form>
                <div>
                    <label>
                        Title:
                       <input
                            onChange={this.handleChange}
                            style={this.inputStyle}
                            type="text"
                            name="title"
                            placeholder='Title'
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Avatar source:
                    <input
                            onChange={this.handleChange}
                            
                            type="text"
                            name="avatarsName"
                            placeholder='Avatar source'
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Autor's name:
                    <input
                            onChange={this.handleChange}
                            
                            type="text"
                            name="autorsName"
                            placeholder="Autor's name"
                        />
                    </label>

                </div>
                <div>
                    <label>
                        Video UrL:
                    <input
                            onChange={this.handleChange}
                          
                            type="text"
                            name="videoUrl"
                            placeholder="Video URL"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Select Article Type:
                          <select
                            onChange={this.handleChange}
                        >
                            <option value="news">News</option>
                            <option value="blog">Blogs</option>
                            <option value="article">Articles</option>
                            <option value="video">Video</option>
                        </select>
                    </label>
                </div>
                <br />
                <Editor

                    init={{
                        plugins: 'link image code',
                        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                    }}
                    onChange={this.handleChange}
                />
            </form>
            <button onClick={() =>
                addArticle(this.arcticleBuilder())              
            }>Post</button>
        </div>
    }
}

export default connect(
    (state) => ({
        store: state
    }),
    dispatch => ({
        //onGetItems: (func) => dispatch(func),
        //onGetCoord: (coord) => dispatch(coordYActionCreator(coord)),
        //onGetResponse: (res) => dispatch(responseActionCreator(res)),
    }))(Add)
