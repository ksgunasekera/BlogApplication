import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link ,Redirect} from 'react-router-dom';

import axios from 'axios';

class CreatePost extends Component {
    constructor(props){
        super(props);
        this.state={
            
            title:"",
            category:'',
            body:''
        }
        
    }

    handleTitle(title) {
        this.setState({title:title});

    }

    handleCategory(category) {
        this.setState({category:category});
    }

    handleBody(body) {
        this.setState({body:body});
    }

    onSubmit(event) {
        event.preventDefault();
        let newPost={
            title:this.state.title,
            category:this.state.category,
            body:this.state.body
        }
        axios.post('http://localhost:8000/api/createPost',newPost).then((res) => {
            console.log(res);
            })
    }

    render(){
        return(
            <div>
                  <form onSubmit={this.onSubmit.bind(this)}>
                      <div className="form-group">
                      <label>Title</label><br/>
                      <input type="text" className="form-control" placeholder="Title" id="title" onChange={(event) => this.handleTitle(event.target.value)}/>
                      </div>
                      <div className="from-group">
                      <label>Category</label>
                      <select value={this.state.category} className="form-control" onChange={(event) => this.handleCategory(event.target.value)}>
                        <option></option>
                        <option>IoT</option>
                        <option>Sports</option>
                        <option>Movies</option>
                      </select>
                      </div>
                      <br />
                      <div className="from-group">
                      <label>Body</label><br />
                      <textarea rows="5" cols="100" placeholder="Body" onChange={(event) => this.handleBody(event.target.value)}/>
                      </div>
                      <input type="submit" value="Submit" className="btn btn-primary"/>
                  </form>
            </div>
        )
    }
}

export default CreatePost;