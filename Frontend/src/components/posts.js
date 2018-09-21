import React,{Component} from 'react';
import PostItem from './post';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import DeletePost from './deletePost';
import EditPost from './editPost';

import axios from 'axios';

class Posts extends Component {
    constructor(props){
        super(props);
        this.state={
            posts:[],
            po:[
                {t1:1},
                {t1:2},
                {t1:45}
            ]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/posts').then((respond) =>{
           this.setState({posts:respond.data})
           console.log("Ammo");
           console.log(this.state.posts);
        });
    }

    render() {
        return(
            <div>
                <ul className="col-md-8 list-group">
                {this.state.posts.map((post,i)=>{
                    return(
                     <li key={i}>
                        <div className="jumbotron">
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <Link to={`/editPost/${post.id}`}>Edit</Link><br />
                            <Link to={`/deletePost/${post.id}`}>Delete</Link>
                        </div>
                             
                     </li>
                    )
                    
                })}
                </ul>
            </div>
        );
    }

    showPosts() {              
        console.log("Hello");
        //return (<div>Hello there new </div>);
    }
}

export default Posts;