import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link ,Redirect} from 'react-router-dom';
import axios from 'axios';

import CreatePosts from './components/createPosts';
import Posts from './components/posts';
import Search from './components/search';
import DeletePost from './components/deletePost';
import EditPost from './components/editPost';

const NavBar =() => {
    return(
        <Router>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">Blog</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={'/createPost'} className="nav-link">Create Post</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/posts'} className="nav-link">Posts</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/search'} className="nav-link">Search</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <br />
            <br />
            <br />
            <Switch>
                <Route exact path='/createPost' component= {CreatePosts}/>
                <Route path='/posts' component={Posts} />
                <Route path='/search' component={Search} />
                <Route exact path='/editPost/:id' component= {EditPost}/>
                <Route path='/deletePost/:id' component={DeletePost} />
            </Switch>
        </div>
    </Router>
    );
}

const onClick = () => {
    console.log("Clicked");
}

export default NavBar;