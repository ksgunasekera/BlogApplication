import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const HandleSearch = (props) => {
    return(
        <div>
            <ul className="col-md-8 list-group">
                {props.posts.map((post,i)=>{
                    return(

                        <li key={i}>
                            <h3>{post.title}</h3>
                            <Link to={`/editPost/${post.id}`}>Edit</Link><br />
                            <Link to={`/deletePost/${post.id}`}>Delete</Link><br />
                            <Link to={`/viewPost/${post.id}`}>View</Link>
                        </li>
                    )
                    
                })}
            </ul>
        </div>
    )
} 

export default HandleSearch;