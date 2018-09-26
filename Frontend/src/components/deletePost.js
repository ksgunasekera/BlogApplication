import React,{Component} from 'react';
import axios from 'axios';

class DeletePost extends Component{
    constructor(props) {
        super(props);
        this.state={
            postId:this.props.match.params.id
        }
    }

    handleDelete() {
        axios.delete('')
    }

    render() {
        return(
            <div><h2>{this.handleDelete()}</h2></div>
        )
    }

    
}
/*
const DeletePost = (props) =>{
   
   console.log(props.match.params);
    return(
       <div><h1>Hello</h1></div>
       
   )

}
*/
export default DeletePost;