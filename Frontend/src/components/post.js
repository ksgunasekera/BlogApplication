import React,{Component} from 'react';
import axios from 'axios';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.match.params.id,
            post:[],
            comments:[]
        }
    }

    componentDidMount() {
        let id=this.state.id;
        axios.get(`http://localhost:8000/api/post/${id}`).then((respond) =>{
           this.setState({post:respond.data})
           console.log("Ammo");
           console.log(this.state.post);
        });

    }

    render(){
        return(
            <div>
            <h1>{this.state.id}</h1>
            </div>
        )
    }
}
/*
const Post = (props) =>{
    console.log(props.match.params)
    return(
       
    )
} 
*/
export default Post;