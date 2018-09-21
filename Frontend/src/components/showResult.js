import React from 'react';

const HandleSearch = (props) => {
    return(
        <div>
            <ul className="col-md-8 list-group">
                {props.posts.map((post,i)=>{
                    console.log("As")
                    return(

                        <li key={i}>
                            <h3>{post.title}</h3>
                            <p> {post.body}</p>
                        </li>
                    )
                    
                })}
            </ul>
        </div>
    )
} 

export default HandleSearch;