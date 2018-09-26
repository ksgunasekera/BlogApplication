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
            postId:"",
            username:"",
            comment:"",
            comments:[]
        }
    }
    handlePostId(postId) {
        this.setState({postId});
    }

    handleUsername(username) {
        this.setState({username});
    }

    handleComment(comment) {
        this.setState({comment});
    }

    onSubmitComment(event) {
        event.preventDefault();
        let newComment= {
            postId:this.state.postId,
            username:this.state.username,
            comment:this.state.comment
        }
        console.log(newComment);
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/posts').then((respond) =>{
           this.setState({posts:respond.data})
           console.log("Ammo");
           console.log(this.state.posts);
        });
    }

    deletePost(id) {

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
                        <div className="col col-md-4">
                                <form onSubmit={this.onSubmitComment.bind(this)}>
                                <div className="form-group">
                                    <input type="text" className="form-control" onChange={this.handleTitle(this.state.posts[i].id)} value={this.state.posts[i].title}/>
                                    </div>
                                    <div className="form-group">
                                    <input type="text" className="form-control" onChange={(event) => this.handleUsername(event.target.value)} placeholder="username"/>
                                    </div>
                                    <div className="form-group">
                                    <textarea rows="2" cols="20" onChange={(event) => this.handleComment(event.target.value)}/>
                                    </div>
                                    <input type="submit" value="Comment" className="btn btn-primary"/>
                                </form>
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