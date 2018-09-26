import React,{Component} from 'react';
import axios from 'axios';

class EditPost extends Component{
    constructor(props) {
        super(props);
        this.state={
            postId:this.props.match.params.id,
            title:"",
            postBody:"",
            category:""
        }
    }

    componentDidMount() {
        let id=this.state.postId;
        axios.get(`http://localhost:8000/api/editPost/${id}`).then((response) => {
            console.log(response.data);
            console.log(response.data[0].title);
            this.setState({title:response.data[0].title});
            this.setState({postBody:response.data[0].body});
            this.setState({category:response.data[0].category});

        });
    }
    handleTitle(title){

    }

    handleCategory(category){

    }

    handleBody(postBody){
        
    }

    handleGetPost() {
        
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                      <div className="form-group">
                      <label>Title</label><br/>
                      <input type="text" className="form-control" placeholder="Title" id="title" onChange={(event) => this.handleTitle(event.target.value)} value={this.state.title}/>
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
                      <textarea rows="5" cols="100" placeholder="Body" onChange={(event) => this.handleBody(event.target.value)} value={this.state.postBody}/>
                      </div>
                      <input type="submit" value="Submit" className="btn btn-primary"/>
                  </form>
            </div>
        )
    }
}

export default EditPost;