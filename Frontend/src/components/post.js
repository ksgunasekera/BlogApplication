import React,{Component} from 'react';
import axios from 'axios';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.match.params.id,
            posts:[],
            comments:[],
            username:"",
            commentBody:""
        }
    }

    componentDidMount() {
        
        let id=this.state.id;
        console.log(id);
        axios.get(`http://localhost:8000/api/find/${id}`
        ).then((response) =>{
            //console.log(response);
            this.setState({posts:response.data})
            console.log(this.state.posts)
        })

        axios.get(`http://localhost:8000/api/showComments/${id}`
        ).then((response) =>{
            console.log(response);
            this.setState({comments:response.data});
            console.log(this.state.comments);
        })
       

    }

    handleUsername(username) {
        this.setState({username});
    }
    handleCommentBody(commentBody) {
        this.setState({commentBody});
    }


    onSubmitComment(event) {
        event.preventDefault();
        let newcomment={
            postId:this.state.id,
            username:this.state.username,
            commentBody:this.state.commentBody
        }

        console.log(newcomment);
        axios.post('http://localhost:8000/api/comment',newcomment).then((res) => {
            console.log(res);
            })
    }

    render(){
        return(
            <div>
                <ul className="col-md-8 list-group">
                {this.state.posts.map((post,i)=>{
                    return(
                     <li key={i}>
                        <div className="jumbotron">
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            
                        </div>
                      
                             
                     </li>
                    )
                    
                })}
                </ul>

                <div className="col-md-6">
                <form onSubmit={this.onSubmitComment.bind(this)}>
                    
                    <div className="form-group">
                        <input type="text" placeholder="username" onChange={(event) =>this.handleUsername(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <textarea rows="4" cols="20" onChange={(event) =>this.handleCommentBody(event.target.value)}/>
                    </div>
                    <input type="submit" value="Comment"/>
                </form>
                </div>
                <br />
                <ul className="col-md-6 list-group">
                {this.state.comments.map((comment,i)=>{
                    return(
                     <li key={i}>
                        <div>
                            <h4>{comment.username}</h4>
                            <p>{comment.commentbody}</p>
                            
                        </div>
                      
                             
                     </li>
                    )
                    
                })}
                </ul>
            </div>
        )
    }
}

export default Post;